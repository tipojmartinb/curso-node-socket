
const socketController = (socket) => { 
    console.log('Usuario conectado ', socket.id);  
    socket.on('disconnect', () => {
            console.log('Usuario desconectado ',socket.id);
    });
    socket.on('enviar-mensaje',(payload,funcionCallBack)=>{
        //onsole.log(payload);
        const id="Proceso correcto";
        funcionCallBack(id); //respondo solo al cliente que genero el mensaje.
        socket.broadcast.emit('enviar-mensaje',payload); //envio a todos los clientes conectados menos a mi
        //this.io.emit('enviar-mensaje',payload); //envio a todos los clientes conectados
    })
};

module.exports=socketController;