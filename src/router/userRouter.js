const {Router} = require ("express");
const router = Router();
const {crearC,defecto,listarC,
    listarIdCDirecciones,listarIdCPublicaciones,listarIdCBandas} = require ("../controllers/userController.js");


router.get('/', listarC);
router.get('/:id/direccion', listarIdCDirecciones);
router.get('/:id/publicaciones', listarIdCPublicaciones);
router.get('/:id/bandas', listarIdCBandas);
router.post('/', crearC); 
router.get('*', defecto);
//router.get('/', crear);





module.exports = router;