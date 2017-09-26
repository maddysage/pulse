const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({type: String})

const DriverSchema = new Schema({
    name: {
        type: String,
        required: [
            true, 'Name is required'
        ],
        validate: {
            validator: (name) => name && name.length > 4,
            message: 'Name must be greater than 4 characters'
        }
    },
    age: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    reviews: [ReviewSchema]
});

DriverSchema
    .virtual('reviewCount')
    .get(function () {
        return this.reviews.length;
    });

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;