const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://pericles:pericles@cluster0-43ewi.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração, remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

// app.get('/users', (request, response) => {
//     console.log(request.query);
//     return response.json({message: 'Helo World'});
// });

// app.delete('/users/:id', (request, response) => {
//     console.log(request.params);
//     return response.json({message: 'Helo World'});
// });