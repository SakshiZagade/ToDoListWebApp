const mongoose = require('mongoose')

function connect(){
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/todo')
        console.log('connected successfully')
    }
    catch(error){
        console.log(error)
    }
}
module.exports = connect