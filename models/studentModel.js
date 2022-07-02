const mongoose = require('mongoose');


// student schema connection

const studentSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true ," Name is require"],
        trim : true
    },
    email : {
        type : String,
        required : [true ," Email is require"],
        trim : true,
        unique : true
    },
    phone : {
        type : String,
        required : [true ," Phone is require"],
        trim : true,
        unique : true
    },
    location : {
        type : String,
        required : [true ," Location is require"],
        trim : true
    },
    photo : {
        type : String,
        default : "avatar.png"
    }

},{
    timestamps : true
});


// export schema


module.exports = mongoose.model('student', studentSchema);