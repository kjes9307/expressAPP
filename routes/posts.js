var express = require('express');
var router = express.Router();
const {responseHandler,errorHandler} = require('../util/tool.js')
const Post = require("../model/postsModel.js")

/* GET home page. */
router.get('/',async function(req, res, next) {
  try {
  let data = await Post.find();
  console.log(data)
    responseHandler(res,data,200);
  }catch(err){
    errorHandler(res,err,404);
  }
});

router.post('/',async function(req, res, next) {
  try {
    let addPost = req.body // 不要直接接入body 用屬性接入
    let data = await Post.create(addPost);
    responseHandler(res,data,200);
  }catch(err){
    errorHandler(res,err,404);
  }
});

router.delete('/:id',async function(req, res, next) {
  try {
    let {id} = req.params;
    console.log("id=",id);
    let data = await Post.findByIdAndDelete(id);
    responseHandler(res,data,200);
  }catch(err){
    errorHandler(res,err,404);
  }
});

router.delete('/',async function(req, res, next) {
  try {
    await Post.deleteMany();
    let array = []
    responseHandler(res,array,200);
  }catch(err){
    errorHandler(res,err,404);
  }
});

router.patch('/:id',async function(req, res, next) {
  try {
    let {id} = req.params;
    let edit = req.body;
    console.log("edit",edit)
    let data = await Post.findByIdAndUpdate(id,edit);
    responseHandler(res,data,200);
  }catch(err){
    errorHandler(res,err,404);
  }
});

module.exports = router;
