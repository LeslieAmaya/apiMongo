const { Router } = require('express');
const login = require('../controllers/login');
const usuarioC = require('../controllers/usuarios');

const router = Router();
//http://localhost/api/login - post {username: "Isael", password: "Isael123" }

router.post('/login', login.login);
router.post("/user", usuarioC.registerUser);
//rutas que se importan
router.delete("/user/:id", usuarioC.deleteUser);
router.get("/user", usuarioC.getUser);
router.put("/user/:id", usuarioC.updateUser)
// get obtener los datos de la base de datos
// post enviar los datos a la base de datos

module.exports = router;