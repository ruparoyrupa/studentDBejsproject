const express = require('express');
const { getAllStudents , creatStudents, getSingleStudent,studentAddForm , deleteStudent ,showSingleStudent , updateStudent} = require('../controllers/studentController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { dirname } = require('path');





//  multer config 

const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , path.join(__dirname , '../assets/uploads'))
    },
    filename : (req , file , cb) => {
        cb(null , Date.now() + '-' + file.originalname)
    },

})


// load multer


const upload = multer({
    storage : storage
}).single('photo');


// router

router.get('/', getAllStudents);
router.get('/create', studentAddForm);
router.post('/', upload , creatStudents);
router.post('/update/:id', upload, updateStudent);
router.get('/delete/:id', deleteStudent);
router.get('/update/:id', showSingleStudent);

router.get('/:id', getSingleStudent);


// export router

module.exports = router ;