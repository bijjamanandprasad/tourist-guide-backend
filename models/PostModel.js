const mongoose = require('mongoose');

const postSchema = new  mongoose.Schema({

    title: String,
    message: String,
    creator: String,
    images_url: [],
    likeCount:{
        type:Number,
        default:0,
    },
    createdAt:{
        type: Date,
        default: new Date()
    },

    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Users'

    }

})


module.exports = mongoose.model('Posts',postSchema);