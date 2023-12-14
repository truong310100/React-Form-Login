// routes/auth.js
const express = require("express");
const Login = require("../models/Login");
const router = express.Router();

router.get("/", (req, res) => {
    
});

router.post("/home", async (req, res) => {
    const { username, password } = req.body;
    Login.findOne({ username: username, password: password }).then(check =>{
        if (check) {
            res.json("true")
        } 
        else {
            res.json("Tài khoản hoặc mật khẩu không chính xác")
        }
    }).catch(err=>{
        res.json("Đã xảy ra lỗi khi gửi, bạn kiểm tra lại kết nối mạng hoặc tải lại trang nhé")
    })
});

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const data = {
        username: username,
        password: password
    };
    try {
        const check = await Login.findOne({ username: username, password: password });
        if (check) {res.json("exist");} 
        else {
            res.json("notexist");
            await Login.insertMany([data]);}
    } catch (e) {res.json("fail");}});

module.exports = router;
