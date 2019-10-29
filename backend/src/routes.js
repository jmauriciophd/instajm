const express = require('express')
const multer = require('multer')
const uploadconfig = require('./config/upload')

const likeController = require('./controller/LikeController')
const PostController = require('./controller/PostController')
const routes = new express.Router();
const upload = multer(uploadconfig);

routes.get('/posts',PostController.index);
routes.post('/posts',upload.single('image'),PostController.store)
routes.post('/post/:id/like',likeController.store)
module.exports = routes;