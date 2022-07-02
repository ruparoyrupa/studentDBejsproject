const mongoose = require('mongoose');


// mongo DB connection



const connectMongoDB = async () => {

    try {

      await mongoose.connect(process.env.MONGO_STRING);

       console.log(`mongo server is ready `.bgMagenta.black);
    } catch (error) {
        console.log(`${error}`.bgRed.black); 
    }


}


// export mongo connection

module.exports = connectMongoDB;