const mongoose = require('mongoose');

const connectDataBase = async () => {
    try {

        const connect = await mongoose.connect('mongodb://localhost:27017/nameField');
        
        console.log("connect successfully");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDataBase