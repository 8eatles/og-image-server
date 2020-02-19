var express = require('express'); 
var { ImageMeta } = require('../models');
var router = express.Router();

router.get('/:id', async function(req, res, next) {
  const found = await ImageMeta.findByPk(req.params.id);
  const { title, description, path } = found;
  const host = `${req.connection.encrypted ? 'https' : 'http'}://${req.get('host')}`;
  const imageSrc = `${host}/static${path.replace(/uploads/g, '').replace(/\\/g, '/')}`;
  console.log();
  res.render('og', { title, description, imageSrc });
});

module.exports = router;
