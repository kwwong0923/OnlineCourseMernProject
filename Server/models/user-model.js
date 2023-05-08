const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
        username: 
        {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },
        email:
        {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50
        },
        password:
        {
            type: String,
            required: true
        },
        role: 
        {
            type: String,
            enum: ["Student", "Instructor"],
            required: true,
        },
        date:
        {
            type: Date,
            default: Date.now,
        }
    }
);

// Instance Methods
userSchema.methods.isStudent = function ()
{
    return this.role == "Student";
};

userSchema.methods.isInstructor = function()
{
    return this.role == "Instructor";
};

userSchema.methods.comparePassword = async function(password, cb)
{
    let result
    try
    {
        result = await bcrypt.compare(password, this.password);
        return cb(null, result);
    }
    catch (err)
    {
        return cb(err, result);
    }
};

// Mongoose Middlewares
// if the user is a new user or is changing the password -> hash password
userSchema.pre("save", async function (next)
{
    // isNew = from MongoDB document
    if (this.isNew || this.isModified("password"))
    {
        // hash password
        const hashValue = await bcrypt.hash(this.password, 12);
        this.password = hashValue;
    };
    next();
});

// Module Export
module.exports = mongoose.model("User", userSchema);