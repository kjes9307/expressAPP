// 連接資料庫
const mongoose = require('mongoose');
    // 建立collection 
    const roomSchema = new mongoose.Schema( {
        name: String,
        content:{
            type: String,
            required: [true,"內容必填"]
        },
        likes: Number,
        img : String
    },{
        versionKey: false,
        timestamps: true,
        collection : "post"
    }
    );
    // 預設加上"s"
    const Post = mongoose.model('Post', roomSchema);
    
    module.exports = Post;