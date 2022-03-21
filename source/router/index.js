const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Iniciamos Servidor");
    router.get('/index',(req,res)=>{
        res.render('index.html',{titulo:'Datos Generales'})
    });
    router.get('/productos',(req,res)=>{
        res.render('productos.html',{titulo:'Productos'})
    });
    router.get('/contacto',(req,res)=>{
        res.render('contacto.html',{titulo:'Contacto'})
    });
    router.get('/admin',(req,res)=>{
        res.render('admin.html',{titulo:'Administracion'})
    });
    router.get('*',(req,res)=>{
    res.send("No existe la pagina");
})
})
module.exports=router;