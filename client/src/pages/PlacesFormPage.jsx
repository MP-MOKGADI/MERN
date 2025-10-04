import { useState ,useEffect} from "react";
import Perks from "../Perks.jsx";
import PhotoUploader from "../PhotoUploader.jsx";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";



export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [redirectToPlacesList, setRedirectToPlacesList] = useState(false);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setCheckOutTime] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);
    const[redirect,setRedirect] = useState(false);
    const [price, setPrice] = useState(100);

    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/places/'+id).then(response => {
        const { data } = response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.addedPhotos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckInTime(data.checkInTime);
        setCheckOutTime(data.checkOutTime);
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
      })
    }, [id]);

      function inputHeader(text) {
          return <h2 className="text-2xl font-semibold mt-4 mb-1">{text}</h2>;
        }
        function inputDescription(text) {
          return <p className="text-gray-500 text-sm mb-2">{text}</p>;
        }
        function preInput(header, description) {
          return (
            <div>
              {inputHeader(header)}
              {inputDescription(description)}
            </div>
          );
        }
        async function savePlace(ev) {
  ev.preventDefault();

  const placeData = {
    title,
    address,
    addedPhotos, // already contains existing + newly uploaded photos
    description,
    perks,
    extraInfo,
    checkInTime,
    checkOutTime,
    maxGuests,
    price, 
  };

  try {
    if (id) {
      
      await axios.put(`http://localhost:3000/places/${id}`, placeData);
      alert(" Place updated successfully!");
    } else {
      
      await axios.post("http://localhost:3000/places", placeData);
      alert(" Place saved successfully!");
    }

    setRedirect(true);
  } catch (error) {
    console.error(error);
    alert(" Failed to save place. Please try again.");
  }
}

        // async function savePlace(ev) {
        //   ev.preventDefault();
        //   if (id){
        //     //update
        //   }else{
        //     //new place
        //   }
      
        //   const placeData = {
        //     title,
        //     address,
        //     addedPhotos,
        //     description,
        //     perks,
        //     extraInfo,
        //     checkInTime,
        //     checkOutTime,
        //     maxGuests,
        //   };
      
        //   try {
        //     await axios.post("http://localhost:3000/places", placeData);
        //     alert(" Place saved successfully!"); 
        //     setRedirect(true);        
        //   } catch (error) {
        //     console.error(error);
        //     alert("Failed to save place. Please try again.");
        //   }
        // }
//         async function savePlace(ev) {
//   ev.preventDefault();

//   const placeData = {
//     title,
//     address,
//     addedPhotos,
//     description,
//     perks,
//     extraInfo,
//     checkInTime,
//     checkOutTime,
//     maxGuests,
//   };

//   try {
//     if (id) {
//       // 🔄 Update existing place
//       await axios.put(`http://localhost:3000/places/${id}`, placeData);
//       alert("Place updated successfully!");
//     } else {
//       // 🆕 Create new place
//       await axios.post("http://localhost:3000/places", placeData);
//       alert("Place saved successfully!");
//     }

//     setRedirect(true);
//   } catch (error) {
//     console.error(error);
//     alert("Failed to save place. Please try again.");
//   }
// }


        if (redirect) {
          return <Navigate to={"/account/places"} />;
        }

    return(
        <div>
          <AccountNav/>
            <form onSubmit={savePlace}>
                        {/* Title */}
                        {preInput(
                          "Title",
                          "Title for your place. Should be short and catchy as in advertisement"
                        )}
                        <input
                          className="w-full border p-2"
                          type="text"
                          placeholder="Title, for example: My lovely apt"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
            
                        {/* Address */}
                        {preInput("Address", "Address to this place")}
                        <input
                          className="w-full border p-2"
                          type="text"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
            
                       {/* Photos */}
                        {preInput("Photos", "Add photos to showcase your place.")}
                        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                        
                        {/* Description */}
                        {preInput("Description", "Provide a detailed description of your place.")}
                        <textarea
                          className="w-full border p-2 resize-none"
                          placeholder="Description of the place"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
            
                        <Perks selected={perks} onChange={setPerks} />
            
                        {/* Extra Info */}
                        {preInput("Extra Info", "House rules, etc.")}
                        <textarea
                          className="w-full border p-2 resize-none"
                          value={extraInfo}
                          onChange={(e) => setExtraInfo(e.target.value)}
                        ></textarea>
            
                        {/* Check-in/out */}
                        {preInput(
                          "Check in & out times",
                          "Add check in and out times, remember to have some time window for cleaning the room between guests."
                        )}
                        <div className="grid sm:grid-cols-4 gap-2">
                          <div>
                            <h3 className="mt-2 mb-1">Check in time</h3>
                            <input
                              type="text"
                              placeholder="14:00"
                              value={checkInTime}
                              onChange={(e) => setCheckInTime(e.target.value)}
                              className="w-full border p-2"
                            />
                          </div>
                          <div>
                            <h3 className="mt-2 mb-1">Check out time</h3>
                            <input
                              type="text"
                              placeholder="11:00"
                              value={checkOutTime}
                              onChange={(e) => setCheckOutTime(e.target.value)}
                              className="w-full border p-2"
                            />
                          </div>
                          <div>
                            <h3 className="mt-2 mb-1">Max guests</h3>
                            <input
                              type="number"
                              placeholder="Max guests"
                              value={maxGuests}
                              onChange={(e) => setMaxGuests(e.target.value)}
                              className="w-full border p-2"
                            />
                          </div>
                          <div>
                            <h3 className="mt-2 mb-1">Price per night</h3>
                            <input
                              type="number"
                              placeholder="Price per night"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="w-full border p-2"
                            />
                          </div>
                        </div>
            
                        <button type="submit" className="bg-pink-400 text-white px-6 py-2 rounded-full mt-4 w-full">
                          Save
                        </button>
                      </form>
        </div>
    )
}