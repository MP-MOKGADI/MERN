

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const Place = require('./models/Place');
const fs = require('fs');
const path = require('path');
const Booking = require('./models/Booking');
const { ok } = require('assert');
require('dotenv').config();

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

// const jwtSecret = 'sdfghjkl';

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


// app.use(cors({
//   credentials: true,
//   origin: 'http://localhost:5173',
// }));
const allowedOrigins = [
  "http://localhost:5173",                   
    
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));



// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

// app.listen(3000, () => console.log(" Server running on http://localhost:3000"));




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get('/test', (req, res) => {
  res.json('test ok');
});

// ---------------- REGISTER ----------------
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({ 
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (err) {
    console.error(" Registration error:", err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// ---------------- LOGIN ----------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { id: userDoc._id },   // keep token light
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token, { httpOnly: true }).json(userDoc);
        }
      );
    } else {
      res.status(400).json('wrong password');
    }
  } else {
    res.status(404).json('user not found');
  }
});

// ---------------- PROFILE ----------------
app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.json(null);

  jwt.verify(token, jwtSecret, {}, async (err, decoded) => {
    if (err) return res.status(401).json(null);
    const userDoc = await User.findById(decoded.id);
    res.json(userDoc);
  });
});




//----------------------logout----------------------

app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,   
    secure: true,     
    sameSite: 'none', 
  });
  res.json({ success: true });
});

//-----------------------uploads-----------------------


//1.upload by link using image-downloader package
app.post('/upload-by-link', async (req, res) => {
  try {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    const dest = path.join(__dirname, 'uploads', newName);

    await imageDownloader.image({
      url: link,
      dest: dest,
    });

    
    res.json(newName);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image download failed' });
  }
});
//2.upload by photos from local computer using multer package
const photosMiddleware = multer({ dest: 'uploads/' });
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for(let i=0; i<req.files.length; i++){
    const {path , originalname} = req.files[i];
    const parts= originalname.split('.');
    const ext = parts[parts.length -1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath .replace('uploads\\', ''));

  }

  res.json(uploadedFiles)
})





//----------------------- saveplaces-----------------------
app.post("/places", async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  jwt.verify(token, jwtSecret, {}, async (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    try {
      const place = await Place.create({
        owner: decoded.id,           
        title: req.body.title,
        address: req.body.address,
        addedPhotos: req.body.addedPhotos,
        description: req.body.description,
        perks: req.body.perks,
        extraInfo: req.body.extraInfo,
        checkInTime: req.body.checkInTime,
        checkOutTime: req.body.checkOutTime,
        maxGuests: req.body.maxGuests,
        price: req.body.price,
      });

      res.status(201).json(place);
    } catch (err) {
      console.error(" Error saving place:", err);
      res.status(500).json({ error: "Failed to save place" });
    }
  });
});
//----------------------- get places-----------------------
// app.get('/places',(req,res) => {
//    const { token } = req.cookies;
//    if (!token) return res.status(401).json({ error: "Not authenticated" });

//    jwt.verify(token, jwtSecret, {}, async (err, decoded) => {
//      if (err) return res.status(401).json({ error: "Invalid token" });

//      try {
//        const places = await Place.find({ owner: decoded.id });
//        res.json(places);
//      } catch (err) {
//        console.error(" Error fetching places:", err);
//        res.status(500).json({ error: "Failed to fetch places" });
//      }
//    });
// });

app.get('/user-places', (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  jwt.verify(token, jwtSecret, {}, async (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    try {
      const places = await Place.find({ owner: decoded.id });
      res.json(places);
    } catch (err) {
      console.error(" Failed to fetch user places:", err);
      res.status(500).json({ error: "Failed to fetch user places" });
    }
  });
});

//----------------------- get place by id-----------------------
app.get('/places/:id',async (req,res) => {
    const { id } = req.params;
    res.json(await Place.findById(id));
});
//----------------------- update place by id-----------------------

app.put('/places/:id', async (req, res) => {
  const { id } = req.params;
  const { token } = req.cookies;

  
  const { 
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkInTime,
    checkOutTime,
    maxGuests,
    price
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });

    try {
      const placeDoc = await Place.findById(id);

      if (!placeDoc) {
        return res.status(404).json({ error: "Place not found" });
      }

      
      if (userData.id !== placeDoc.owner.toString()) {
        return res.status(403).json({ error: "Forbidden" });
      }

      placeDoc.set({
        title,
        address,
        addedPhotos,   
        description,
        perks,
        extraInfo,
        checkInTime,
        checkOutTime,
        maxGuests,
        price
      });

      await placeDoc.save();

      res.json(placeDoc); 
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to update place" });
    }
  });
});

//----------------------- get all places-----------------------
app.get('/places',async (req,res) => {
    res.json(await Place.find());
});
// ---------------------delete the place----------------------
app.delete("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlace = await Place.findByIdAndDelete(id);

    if (!deletedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }

    res.json({ success: true, message: "Place deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete place" });
  }
});

//----------------------- booking-----------------------


function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token; // pull token from cookies
    if (!token) {
      return reject(new Error("No token provided"));
    }

    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) {
        return reject(err); // handle error gracefully
      }
      resolve(userData); // decoded JWT payload
    });
  });
}



//------------------- Create a booking---------------------
app.post("/api/bookings", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    if (!userData) return res.status(401).json({ error: "Unauthorized" });

    const {
      place,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      fullName,
      phone,
      price,
    } = req.body;

    const booking = await Booking.create({
      place,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      fullName,
      phone,
      price,
      user: userData.id,
    });

    res.json(booking); 
  } catch (err) {
    console.error("Booking failed:", err);
    res.status(422).json({ error: err.message });
  }
});

// -------------------------Get booking by ID-----------------------------
app.get("/api/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("place");
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all bookings for logged-in user
app.get("/api/bookings", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    if (!userData) return res.status(401).json({ error: "Unauthorized" });

    const bookings = await Booking.find({ user: userData.id }).populate("place");
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// -------------------------delete a booking----------------------------
app.delete("/api/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Booking not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("(.*)", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
