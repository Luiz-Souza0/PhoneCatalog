const mongoose = require('mongoose');

const PhoneItemSchema = new mongoose.Schema({
  Marca: String,
  Modelo: String,
  Memoria: Number,
  Lancamento: String,
});

module.exports = mongoose.model('PhoneItem', PhoneItemSchema);