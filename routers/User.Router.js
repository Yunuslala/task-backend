const UserRouter=require("express").Router();

const {UserRegister,UserLogIn}=require('../controllers/User.Controller');
const { body, validationResult } = require("express-validator");

UserRouter.post('/Register',
body("email").trim().isEmail(),
body("password").trim().isLength({ min: 6 }),
body("mobileNumber").trim().isLength({ min: 10 }),
UserRegister);
UserRouter.post('/login',
body("email").trim().isEmail(),
body("password").trim().isLength({ min: 6 }),
UserLogIn);

module.exports={
    UserRouter
}