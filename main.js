const dbLocal = [
    {
        user: 'jose',
        clave: 'jos123',
        saldo: 200
    },
    {
        user: 'arturo',
        clave: 'art123',
        saldo: 500
    },
    {
        user: 'juan',
        clave: 'jua123',
        saldo: 300
    }
]
function login(event){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
for(i = 0; i < dbLocal.length; i++){
    if(username === dbLocal[i].user && password === dbLocal[i].clave){
        window.location.href = "login.html";
    }/*else if(username != dbLocal[i].user && username != ''){
            mostrarError('Usuario no existe');
            return;
    }*/else if(username === '' && password === ''){
        mostrarError('Por favor ingresa tus datos');
    }else if(username === dbLocal[i].user && password === '') {
        mostrarError('Ingresa tu contraseña');
    }else if(username === dbLocal[i].user && password !== dbLocal[i].clave && password !== '') {
            mostrarError('Contraseña incorrecta');
    }/*else{
        mostrarError('U');
    }*/
}}

    function mostrarError(dato){
        const errorHTML = document.getElementById('errorHTML')
        errorHTML.classList.remove('esconder')
        errorHTML.classList.add('error')
        errorHTML.innerHTML = dato
    
        setTimeout(()=>{
            errorHTML.classList.remove('error')
            errorHTML.classList.add('esconder')
            errorHTML.innerHTML = ''
        }, 4000)
    }
       
function cerrarSes(event){
    window.location.href = "index.html";
    const btnClose = document.getElementById('btnClose');
    btnClose.disabled = true;
}

function consul(event){
    const saldo = document.getElementById('mensaje')
    saldo.innerHTML = `Saldo actual: `;
}
function ingresarMnt(event){
    let montoIng = document.getElementById('ingMnt')
    for(i = 0; i < dbLocal.length; i++){
        let saldoNV = montoIng + dbLocal[i].saldo;
        if (username == 'arturo' ){
            console.log('Tu saldo actual es: $' + saldoNV);
        }
    }
    //saldoNv.innerHTML = `Saldo actual: ${saldoNv} `;
}
function retirarMnt(event){
    const saldo = document.getElementById('mensaje')
    saldo.innerHTML = `Saldo anterior: 300 Monto retirado:200 Saldo actual: 100`;
}
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    })