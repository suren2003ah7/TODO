const Task = require("../model/task");

exports.addTask = (req, res) => {
    const task = new Task({
        text: req.body.text
    })
    task.save((err, doc) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(doc);
        }
    }) 
}

exports.getTask = (req, res) => {
    Task.find({}, (err, doc) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(doc);
        }
    })
}

exports.updateTask = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, {status: true}, (err, doc) => {
        if (err){
            res.send(err)
        }
        else{
            res.send(doc);
        }
    });
}

exports.deleteTask = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id, (err) => {
        if (err){
            res.send(err)
        }
        else{
            res.send("Deleted");
        }
    })
}