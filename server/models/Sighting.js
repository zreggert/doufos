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
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    date_time: {
        type: Date,
        trim: true,
    },
    text: {
        type: String,
    }
});

const Sighting = model("Sighting", sightingSchema);

module.exports = Sighting;