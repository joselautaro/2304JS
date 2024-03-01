// Tenemos que hacer conexión inicial del JS con el html al momento de enviar el formulario
document.getElementById('cotizadorForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Guardamos en una variable el valor del input para poder utilizarlo luego
        const marca = document.getElementById('marca').value;

        const modelo = document.getElementById('modelo').value;

        const precio = document.getElementById('precio').value;

        const descuento = document.getElementById('descuento').value;
        console.log(marca)
        console.log(modelo);
        console.log(precio)
        console.log(descuento);

        // Validamos si son numericos
        if( isNaN(precio) ){
            showModal('Por favor introduce un precio valido')
        }else{
            let precioTotal = precio;

            if( !isNaN(descuento) ){
                precioTotal -= descuento;
            }

            // Generamos una demora en la carga de medio segundo
            setTimeout(() =>{

                const cotizacionInfo = document.getElementById('cotizacionInfo');
                // Generamos Template string o string literales
                cotizacionInfo.innerHTML = `
                    <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                `
                showModal()
                // mil milisegundos es un segundo
                // 1000 = 1 segundo
            }, 500)

            // Generamos una demora en la cargar de 3 segundos
            setTimeout(() =>{
                // Generamos Template string o string literales
                cotizacionInfo.innerHTML = `
                    <p>Marca: ${marca}</p>
                    <p>Modelo: ${modelo}</p>
                    <p>Precio: $${precio}</p>
                    <p>Descuento: ${descuento}%</p>
                `
                // Se activa el modal con la info tomada en el formulario
                showModal()
            }, 3000)

        }
        

})

// Funcion para el modal

const showModal = () =>{

    const modal = document.getElementById('myModal');

    modal.style.display = 'block';

    // Función para que cierre la x

    // Por querySelector
    const closeBtn = document.querySelector('.close')

    closeBtn.addEventListener('click', (e) => {
        modal.style.display = 'none'
    })
    window.addEventListener('click', (e) =>{
        if( e.target === modal ){
            modal.style.display = 'none';
            cotizadorForm.reset();
        }
    })

}
// por etiqueta o nodo
// const closeBtn2 = document.getElementsByTagName('span')

// por clase
// const btn = document.getElementsByClassName('.close')