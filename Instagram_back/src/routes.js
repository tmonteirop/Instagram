const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const uploader = multer(uploadConfig);


// Middleware
routes.get('/posts', PostController.index);
routes.post('/posts', uploader.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;