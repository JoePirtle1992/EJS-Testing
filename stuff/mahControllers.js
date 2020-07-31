const Project = require("./mahModels");

exports.getSomething = async (req, res )=> {
    try {
        const shoots = await Project.find();
        res.render('../views/home.ejs', { yes: 'YES', everyBody: shoots});
        // res.status(200).json({ message: "Get STUFFs", everyBody: shoots })
    } catch (err) {
        res.status(404).json({ message: "FOUND NOTHING"});
    }
}

// CREATE
exports.addSomething = async (req, res) => {
    try {
        const newOne = await Project.create(req.body);
        newOne.save();
        res.redirect("/radiohead") //This is causing a Redirect Error
        res.status(200).json({ message: "Added One", data: newOne })
    } catch (err) {
        res.status(404).json({ message: "NOT ADDED!"});
        console.log(err);
        console.log(req.body);
    }
 };