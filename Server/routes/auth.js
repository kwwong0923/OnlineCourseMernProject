const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
const jwt = require("jsonwebtoken");

router.use((req, res, next) =>
{
    console.log("It's receiving a request related auth");
    next();
});

router.get("/testAPI", (req, res) =>
{
    return res.send("it's connecting to Auth API");
});

// Register Function
router.post("/register", async(req, res) =>
{
    // can't use if else statement
    // Validation of User Inputs
    let { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // To Check if the email has registered before
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("This email address has registered before");

    // Create a new user
    let { username, email, password, role } = req.body;
    let newUser = new User({username, email, password, role});
    try
    {
        let savedUser = await newUser.save();
        return res.send(
            {
                message: "The new user is saved",
                data: savedUser
            }
        )
    }
    catch(err)
    {
        return res.status(500).send("Unable to save the new user")
    }

})

// Login Function
router.post("/login", async (req, res) =>
{
    let { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) return res.status(401).send("Unable to find the user.");

    foundUser.comparePassword(req.body.password, (err, isMatch) =>
    {
        if (err) return res.status(500).send(err);

        if (isMatch)
        {
            // Create Json Web Token
            const tokenObject= {
                _id: foundUser._id,
                email: foundUser.email
            };
            const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
            return res.send(
                {
                    message: "Login Successfully",
                    token: "JWT " + token, // it must has the space after "JWT "
                    user: foundUser
                }
            )
        }
        else
        {
            return res.status(401).send("Invalid Password")
        }
    })
    // Json Web Token
})

module.exports = router;