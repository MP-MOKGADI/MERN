const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, required: true },
    user:{type: mongoose.Schema.Types.ObjectId, required: true},
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    numberOfGuests: { type: Number },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    price: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;