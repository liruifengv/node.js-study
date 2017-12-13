let express = require('express');
let router = express.Router();
let Photo = require('../models/Photo')
let fs = require('fs')
let path = require('path')
let join = path.join

exports.list = function(req, res, next) {
  Photo.find({}, function(err, photos) {
    if (err) return next(err)
    res.render('photos', {
      title: 'Photos',
      photos: photos
    })
  })
}

exports.form = function(req, res) {
  res.render('photos/upload', {
    title: 'Photo upload'
  })
}

exports.submit = function(dir) {
  return function(req, res, next) {
    console.log(req.files)
    let img = req.files.photo.image
    let name = req.body.photo.name || img.name
    let path = join(dir, img.name)
    fs.rename(img.path, path, function(err){
      if (err) {
        return next(err)
      }
      Photo.create({
        name: name,
        path: img.name
      }, function(err) {
        if (err) return next(err)
        res.redirect('/')
      })
    })
  }
}

exports.download = function (dir) {
  return function (req, res, next) {
    let id = req.params.id
    Photo.findById(id, function(err, photo) {
      if (err) return next(err)
      let path = join(dir, photo.path)
      // res.sendfile(path)
      res.download(path, photo.name + '.jpeg')
    })
  }
}