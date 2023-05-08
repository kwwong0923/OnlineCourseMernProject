const router = require("express").Router();
const Course = require("../models").course;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => 
{
    console.log("Course Route is receiving a request");
    next();
});

// POST - To Create New Course
router.post("/", async (req, res) =>
{
    // to check if the user input valid
    let { error } = courseValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (req.user.isStudent())
    {
        return res.status(400).send("Only Instructor is able to create course");
    }
    
    let { title, description, price } = req.body;
    let newCourse = new Course({title, description, price, instructor: req.user._id});
    try
    {
        let savedCourse = await newCourse.save();
        return res.send(
            {
                message: "Create the course successfully",
                savedCourse
        });
    }
    catch (err)
    {
        return res.status(500).send("Failed to create course");
    }
});

// POST - Enroll course by id
router.post("/enroll/:_id", async (req, res) =>
{
    let { _id } = req.params;
    try
    {
        let course = await Course.findOne({ _id }).exec();
        // jwt from the user
        course.students.push(req.user._id);
        await course.save();
        res.send("Register Successfully")
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
})
// GET - To get all the courses from database
router.get("/", async (req, res) =>
{
    try
    {
        let courseFound = await Course
                                .find({})
                                .populate("instructor", ["username", "email"])
                                .exec();;
        return res.send(courseFound);
    }
    catch (err)
    {
        return res.status(500).send("There is no course");
    }
});

// GET - To get a courses by id
router.get("/:_id", async (req, res) =>
{
    let {_id} = req.params;
    try
    {
        let courseFound = await Course
                                    .findOne({_id})
                                    .populate("instructor", ["username", "email"])
                                    .exec();
        return res.send(courseFound);                            
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
});

// GET - to get a list of courses by key word
router.get("/findByName/:name", async (req, res) =>
{
    let { name } = req.params;
    try
    {
        let courseFound = await Course
                                    .find({ title: name})
                                    .populate("instructor", ["username", "email"])
                                    .exec();
        return res.send(courseFound);
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
})
// GET - To get all the courses of particular instructor
router.get("/instructor/:_id", async (req, res) =>
{
    let { _id } = req.params;
    try
    {
        let coursesFound = await Course
                                    .find({ instructor: _id})
                                    .populate("instructor", ["username", "email"])
                                    .exec();        
        return res.send(coursesFound);                            
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
})

// GET - To get all the courses of particular student
router.get("/student/:_id", async(req, res) => 
{
    let { _id } = req.params;
    try
    {
        let coursesFound = await Course
                                .find({students: _id})
                                .populate("instructor", ["username", "email"])
                                .exec();
        return res.send(coursesFound);                        
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
});
// PATCH - To Edit the course
router.patch("/:_id", async (req, res) =>
{
    let { error } = courseValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if the course is existing
     try
     {
        let { _id } = req.params;
        let courseFound = await Course.findOne({ _id });
        if (!courseFound)
        {
            return res.status(400).send("Unable to find the courses to update");
        }

        // the editor must be the instructor of the course
        if (courseFound.instructor.equals(req.user._id))
        {
            let updatedCourse = await Course.findOneAndUpdate({_id},req.body, 
                                                    {
                                                        new: true,
                                                        runValidators: true,
                                                    });
            return res.send(
                {
                    message: "Update the course successfully",
                    updatedCourse,
                }
            );                                  
        }
        else
        {
            return res.status(403)
                        .send("Only the instructor of the course is able to edit the course");
        }
     }
     catch (err)
     {
        return res.status(500).send(err);
     }     
});

// DELETE
router.delete("/:_id", async (req, res) =>
{
    let { _id } = req.params;
    try
    {
        let courseFound = await Course.findOne({ _id }).exec();
        if (!courseFound)
        {
            return res.status(400).send("Unable to find the course to delete");
        }

        if (courseFound.instructor.equals(req.user._id))
        {
            await Course.deleteOne({_id}).exec();
            return res.send(`The Course ${courseFound.title} is deleted`);
        }
        else
        {
            return res.status(403)
                        .send("Only the instructor of the course is able to delete the course");
        }
    }
    catch (err)
    {
        return res.status(500).send(err);
    }
});

module.exports = router;