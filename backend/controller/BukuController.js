const Buku = require('../model/BukuModel')

const getBooks = async(req, res) => {
    try {
        const buku = await Buku.find()
        res.status(200).json(buku)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getBookById = async(req, res) => {
    try {
        const buku = await Buku.findById(req.params.id)
        res.status(200).json(buku)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const addBook = async(req, res) => {
    const buku = new Buku(req.body)
    try {
        const bukubaru = await buku.save()
        res.status(200).json(bukubaru)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const updateBook = async(req, res) => {
    try {
        const editbook = await Buku.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(editbook)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteBook = async(req, res) => {
    try {
        const deleteBook = await Buku.deleteOne({_id: req.params.id})
        res.status(200).json(deleteBook)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {getBooks, getBookById, addBook, updateBook, deleteBook}