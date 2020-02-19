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
    const host = `${req.connection.encrypted ? 'https' : 'http'}://${req.get('host')}`;
	const imageSrc = `${host}/static${result.path.replace(/uploads/g, '').replace(/\\/g, '/')}`;
    res.render('result', {
      url: `${host}/og/${result.id}`,
      title,
      description,
      imageSrc,
    });
  } catch (e) {
    res.send(e.message);
    next();
  }
});

module.exports = router;
