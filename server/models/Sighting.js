const { Schema, model } = require("mongoose");

const sightingSchema = new Schema({
    latitude: {
        type: Number,
        trim: true,
    },
    longitude: {
        type: Number,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    date_time: {
        type: String,
        trim: true,
    },
    text: {
        type: String,
    }
});

const Sighting = model("Sighting", sightingSchema);

module.exports = Sighting;