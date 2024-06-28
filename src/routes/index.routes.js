const { Router } = require('express');
const router = Router();

const {renderIndex, renderformulario} = require('../controllers/index.controllers')

router.get('/',renderIndex);

router.get('/formulario', renderformulario);

module.exports = router;