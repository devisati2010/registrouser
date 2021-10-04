var mongoose = require('mongoose')

var conexao = ()=>{
    mongoose.connect('mongodb+srv://registrouser:batata@cluster0.4ifek.mongodb.net/login_registro?retryWrites=true&w=majority')
}

module.exports = conexao