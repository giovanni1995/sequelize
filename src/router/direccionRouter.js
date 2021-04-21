const {Router} = require ("express");
const router = Router();
const {defecto,listarC} = require ("../controllers/direccionController");


router.get('/', listarC);
router.get('*', defecto);






module.exports = router;