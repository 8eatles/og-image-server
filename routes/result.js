var express = require('express');
var { ImageMeta } = require('../models');

var router = express.Router();

router.post('/', async function (req, res, next) {
  const { title, description } = req.body;
  // const { file, files } = req;
  // console.log(title, description, file, files);
  const image = req.file;
  if (!image) throw new Error('No Image');
  try {
    const params = Object.assign({ title, description }, image);
    const result = await ImageMeta.create(params);
    res.render('result', {
      url: `http://127.0.0.1:3000/og/${result.id}`,
      title,
      description,
      imageSrc: `http://127.0.0.1:3000/static${result.path.replace(/uploads/g, '').replace(/\\/g, '/')}`,
    });
  } catch (e) {
    res.send(e.message);
    next();
  }
});

module.exports = router;
