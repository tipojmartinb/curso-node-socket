const lblOffline = document.querySelector('#lblOffline');
const lblOnline  = document.querySelector('#lblOnline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect',()=>{
    console.log('Conectado');
    lblOnline.style.display='';
    lblOffline.style.display='none';
})

socket.on('disconnect',()=>{
    console.log('Desconectado del servidor');
    lblOnline.style.display='none';
    lblOffline.style.display='';
})


socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
})

btnEnviar.addEventListener('click',()=>{
    const payload={
        mensaje:txtMensaje.value,
        id:'safs',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(idCallBack)=>{ //Paso un tercer argumento para que el server solo me responda a mi.
        console.log('Desde el servidor ',idCallBack)
    });
})