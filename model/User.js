const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({

    namaLengkap : {
        type : String
    },
    userName : {
        type : String
    },
    password : {
        type : String
    },
    noTelp : {
        type : String
    },
    role: {
         type : Number
    },
    nik : {
        type : String
    },
    alamat : {
        type : String
    },
    golonganDarah: {
        type : String
    }
})

module.exports = mongoose.model( 'users',userSchema)
