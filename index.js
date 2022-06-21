const express = require('express');

const app = express();

const port = 3000;


app.set('view engine', 'ejs');

app.use('/public', express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    res.render('signIn');
});

app.get('/registration', (req, res) => {
    res.render('signUp');
});

// app.get('/:id', (req, res) => {
//     res.render('mainId', {id: req.params.id});
// });

app.listen(port, () => {
    console.log("started on", port);
});