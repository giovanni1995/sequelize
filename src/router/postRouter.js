const {Router} = require ("express");
const router = Router();
const {listarC,crearP,defecto,listarIdC,actualizarC,deletedC} = require ("../controllers/postController");

router.get('/', listarC);
router.get('/:id', listarIdC);
router.post('/', crearP); 
router.put('/:id', actualizarC); 
router.delete('/:id', deletedC); 
router.get('*', defecto);
//router.get('/', crear);





module.exports = router;