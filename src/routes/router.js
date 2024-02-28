const { Router } = require('express');
const login = require('../controllers/login');

const router = Router();
//http://localhost/api/login - post {username: "Isael", password: "Isael123" }

router.post('/login', login.login);
router.get('/hola', (req, res) =>{
    res.send({ message: "Hola Mundo:)"});
})
// get obtener los datos de la base de datos
// post enviar los datos a la base de datos

module.exports = router;