const express = require('express');
const cors = require('cors');
const socketController = require('../sockets/controllers');

class Server {
    constructor(){
        this.app= express();
        this.port =process.env.PORT;

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths={        
            //auth:     '/api/auth/',
        }

        //CONECTAR A BASE DE DATOS
        //this.conectarDB();

        //MIDDLEWARES
        //SON FUNCIONES QUE LE AGREGAN FUNCIONALIDAD A NUESTRO WEB SERVER.
        this.middlewares();

        //Rutas de mi aplicacion
        this.route();


        //Configuracion de eventos Sockets
        this.sockets()
    }

    middlewares(){

        //CORS
        this.app.use(cors());
        //Lectura y parseo del Body
        this.app.use(express.json())
        //Directorio publico.
        this.app.use(express.static('public'))
    }

    route(){
        //this.app.use(this.paths.categorias,require('../routes/categorias'));
        //this.app.use('',require('../routes/usuarios'));        
    }

    async sockets(){
        this.io.on('connection', socketController);
    }


    listen(){
        this.server.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto: ',this.port)
        })
    }
}

module.exports=Server;