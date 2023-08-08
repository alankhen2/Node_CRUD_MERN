const mongoose = require('mongoose')

const BukuSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    penerbit: {
        type: String,
        required: true
    },
    jumlah: {
        type: Number,
        required: true
    }
})

const BukuModel = mongoose.model("Buku", BukuSchema)

module.exports = BukuModel;