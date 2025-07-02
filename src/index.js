
const express = require('express');
const app = express();
const morgan = require('morgan');

const cors = require('cors');
app.use(cors());


app.use(morgan('dev'));

app.use(express.json());

// configura el sever
app.set('port', process.env.PORT || 4000);
app.set('Json spaces', 2)

//Nuestro primer ws metodo Get ruta-raiz
app.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mis perros"
        }
    );
})

app.get('/hola', (req, res) => {
    res.json(
        {
            "Title": "Cambia todo"
        }
    );
})

//rutas responde el servidor a est� ruta
app.get('/mensaje', (req, res) => {
    res.json(
        {
            "Title": "Mensaje d eprueba"
        }
    );
})



//iniciar el servidor 
app.listen(app.get('port'), () => {
    console.log("ESTE ES MI SERVIDOR Y ESTA EN EL http://localhost:4000");
    console.log("mi primer servidor");
});

//variables en la api suma de dos n�meros
//para enviar informaci�n al servidor usamos el metodo post
app.post('/sumar', (req, res) => {//http://localhost/sumar
    const { num1, num2 } = req.body; //se aclaran los datos de entrada

    //validar que se hayan enviado los dos n�meros que no esten vacios
    if (!num1 || !num2) {
        return res.status(4000).send({ error: "Faltan n�meros para s�mar" });
    }

    //Sumar los n�meros
    const resultado = num1 + num2;

    //enviar el resultado 
    res.send({ resultado });
});

app.post('/edad', (req, res) => { //http://localhost:4000/sumar
    const { anacimiento, aactual } = req.body; //se declaran los datos de entrada

    //Validar que se hayan enviado los dos n�meros que no esten vacios
    if (!anacimiento || !aactual) {
        return res.status(4000).send({ error: 'Faltan n�meros para sumar' });
    }
    //sumar n�meros 
    const edad = aactual - anacimiento;

    //Enviar el resultado
    res.send({ edad });
});
