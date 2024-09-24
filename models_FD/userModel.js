const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true, // Trim whitespace
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true, // Convert email to lowercase before saving
        validate: {
            validator: function(v) {
                // Simple regex for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        trim: true, // Trim whitespace
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
