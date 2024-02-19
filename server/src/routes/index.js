const { Router } = require("express");
const createUser = require("../controllers/CreateUser");
const createPost = require("../controllers/CreatePost");
const Login = require("../controllers/Login");

const router = Router();

//get related to users
router.get("/login", Login);

//post related to users
router.post("/createuser", createUser);

//other post
router.post("/home/createpost", createPost);

module.exports = router;
