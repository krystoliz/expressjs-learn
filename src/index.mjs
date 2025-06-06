import express from 'express'

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (request, response) => {
    response.status(201).send({msg: 'Hello World!'});
})

app.get('/api/users', (request, response) => {
    response.send([
        {id: 1, username: 'jhon', displayName: 'Jhon Doe'}, 
        {id: 2, username: 'jane', displayName: 'Jane Doe'}]);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

