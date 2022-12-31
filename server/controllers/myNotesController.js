const Notes = require("../models/notesModel");

exports.getNotes = async(req,res)=>{
    const result = await Notes.find();
    res.send(result);
}

exports.addNote = async(req,res) =>{
    const note = new Notes(req.body);
    const result =await note.save(); 
    res.send(result);
}
