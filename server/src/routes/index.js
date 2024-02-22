const { Router } = require("express");
const createUser = require("../controllers/CreateUser");
const createPost = require("../controllers/CreatePost");
const Login = require("../controllers/Login");
const sendMessage = require('../controllers/SendMessage');
const getMessages = require("../controllers/GetMessage");
const getUserChats = require("../controllers/getChats");

const router = Router();

//get related to users
router.post("/login", Login);

//post related to users
router.post("/createuser", createUser);

//other post
router.post("/home/createpost", createPost);

//messages routes
router.post('/send', sendMessage)

router.get('/get/:senderId/:receiverId', getMessages)
router.get('/get/:userId', getUserChats)


module.exports = router;
