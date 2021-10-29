const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
      callback(null, '');
    }
  });

  // image is the key!
const upload = multer({storage}).single('image');

const s3 = new AWS.S3({
    apiVersion: '2006-03-01'//lock in the version number as a precautionary measure in case the default s3 version changes
  })