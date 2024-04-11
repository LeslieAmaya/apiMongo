const { Router } = require("express");
const login = require("../controllers/login");
const userController = require("../controllers/user.controller");
const infectedController = require("../controllers/infected.controller");
const stateController = require("../controllers/state.controller");

const router = Router();
//http://localhost/api/login - post {username: "Isael", password: "Isael123" }

router.post("/login", login.login);
router.post("/user", userController.registerUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user", userController.getUser);
router.put("/user/:id", userController.updateUser);
// get obtener los datos de la base de datos
// post enviar los datos a la base de datos

// Rutas catalogo de infectados
router.post("/infected", infectedController.createInfected);
router.delete("/infected/:id", infectedController.deleteInfected);
router.get("/infected", infectedController.getAllInfected);
router.get("/infected/:id", infectedController.getInfectedById);
router.put("/infected/:id", infectedController.updateInfected);

// Rutas de estados
router.get("/state", stateController.getAllStates);

// Rutas catalogo de campañas

module.exports = router;
