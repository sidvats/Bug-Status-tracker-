const bug = require('../model/bug.model');

const findbug = (req, res) => {
    bug.find().sort({ time: -1 }).then((result) => {
        counter = 0;
        var d = Date.now();
        res.render('dashboard', { bugs: result, counter, currdate: d });
    }).catch((err) => {
        console.log(err);
    })
}
const addbug = (req, res) => {
    const Bug = new bug(req.body);
    Bug.save().then((result) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
}
const deletebug = (req, res) => {
    const id = req.params.id;
    bug.findByIdAndDelete(id).then((result) => {
        res.json({
            redirect : "/"
        })
    }).catch((err) => {
        if (err)
            console.log(err);
    })
}
module.exports = {
    findbug,
    addbug,
    deletebug
}