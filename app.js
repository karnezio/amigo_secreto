let amigos = []; 

// funcion para agregar nombres a la lista de amigos

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    if (!nombre) {
        input.placeholder = "Inserte el nombre sus amigos"; 
        input.classList.add("input-error"); 
        input.classList.remove("input-normal"); 
        input.value = ""; 
        return; 

    }
    input.placeholder = "Escribe un nombre";
    input.classList.remove("input-error"); 
    input.classList.add("input-normal"); 

    amigos.push(nombre);
    input.value = ''; 
    actualizarLista(); 
}

//funcion para actualizar la lista de nombres

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

//funcion para darle la aliatoriedad

function sortearAmigo() {
    const resultado = document.getElementById('resultado'); 
    if (amigos.length === 0) {
        resultado.textContent = 'No hay amigos en la lista';
    } else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    }
}

//boton agregar amigos

const botonAgregar = document.getElementById('botonAgregar');
botonAgregar.addEventListener('click', agregarAmigo);