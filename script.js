const cuestionario = document.getElementById('cuestionario');
const respuestaEls = document.querySelectorAll('.respuesta');
const preguntaEl = document.getElementById('pregunta');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const botonEnviar = document.getElementById('enviar');
const cuestionarioData = [
    {
        pregunta: "¿Cual de estos no es un lenguaje de Programacion?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "HTML",
        correct: "d",
    },
    {
        pregunta: "¿Cual de estos es un sistema operativo de codigo abierto?",
        a: "Windows",
        b: "Linux",
        c: "MacOS",
        d: "Otro",
        correct: "b",
    },
    {
        pregunta: "¿Cual de estos no es un sistema de gestion de bases de datos?",
        a: "TensorFlow",
        b: "MongoDB",
        c: "PostgresSQL",
        d: "MySQL",
        correct: "a",
    },
    {
        pregunta: "¿Que lenguaje de programcion fue desarollado inicialmente por Sun Microsystems?",
        a: "Python",
        b: "Java",
        c: "C++",
        d: "JavaScript",
        correct: "b",
    },
];

let puntajeInicial = 0;
let puntosFinales = 0;

iniciarCuestionario();

function iniciarCuestionario() {
    sacarRespuesta();

    const puntajeInicialData = cuestionarioData[puntajeInicial];

    preguntaEl.innerText = puntajeInicialData.pregunta;
    a_text.innerText = puntajeInicialData.a;
    b_text.innerText = puntajeInicialData.b;
    c_text.innerText = puntajeInicialData.c;
    d_text.innerText = puntajeInicialData.d;
}

function sacarRespuesta() {
    respuestaEls.forEach(respuestaEl => respuestaEl.checked = false);
}

function seleccionarRespuesta() {
    let respuesta;

    respuestaEls.forEach(respuestaEl => {
        if(respuestaEl.checked) {
            respuesta = respuestaEl.id
        }
    })

    return respuesta;
}

botonEnviar.addEventListener('click', () => {
    const respuesta = seleccionarRespuesta()
    
    if(respuesta) {
        if(respuesta === cuestionarioData[puntajeInicial].correct) {
            puntosFinales++;
        }

        puntajeInicial++;

        if(puntajeInicial < cuestionarioData.length) {
            iniciarCuestionario();
        } else {
            cuestionario.innerHTML = `
                <h2>Has respondido ${puntosFinales}/${cuestionarioData.length} correctamente</h2>

                <button onclick="location.reload()">Reiniciar</button>
            `;
        }
    };
})
