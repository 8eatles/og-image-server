var express = require('express'); 
var { ImageMeta } = require('../models');
var router = express.Router();

router.get('/:id', async function(req, res, next) {
  const found = await ImageMeta.findByPk(req.params.id);
  const { title, description, path } = found;
  const imageSrc = `http://127.0.0.1:3000/static/${path.replace(/uploads/g, '').replace(/\\/g, '/')}`;
  res.render('og', { title, description, imageSrc });
});

module.exports = router;
