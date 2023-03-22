const { Schema, model } = require('mongoose');

const trainerSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        specialty: {
            type: String,
            require: true,
            trim: true
        },
        officeHours: {
            type: String,
            required: true
          },
        rate: {
            type: String,
            required: true
        }
    }
);

const Trainer = model('Trainer', trainerSchema)

module.exports = Trainer;