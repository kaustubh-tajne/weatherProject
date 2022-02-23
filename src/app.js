const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

// static path (public)
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath  = path.join(__dirname, '../templates/partials');

app.set('view engine','hbs');
app.set('views', templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialPath);

// routing
app.get('/', (req,res) => {
    res.render('index');
})

app.get('/about', (req,res) => {
    res.render('about');
})

app.get('/weather', (req,res) => {
    res.render('weather');
})

app.get('*', (req,res) => {
    res.render('404error', {
        errorMsg : 'Opps Page Not Found'
    });
})

app.listen(port,(err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`server is listening st port ${port}`);
    }
})