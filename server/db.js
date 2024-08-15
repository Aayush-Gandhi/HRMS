// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(
//             'mongodb+srv://gandhiaayush99:aayush00@cluster02.lfnkgf2.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster02'
//         );
//         console.log(`MongoDB Connected`);
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gandhiaayush99:aayush00@cluster02.lfnkgf2.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster02');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
