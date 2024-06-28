const express = require('express');
const exphbs = require('express-handlebars');
const { partials } = require('handlebars');
const path = require('path');
const morgan = require('morgan');
const overrrideas = require('method-override');

//inicialacaciones

const app = express();

//settings
app.set('port', process.env.PORT || 4000 );
app.set('views', path.join (__dirname, 'views'));
app.engine('.hbs',exphbs.engine({
    defaultLayout: 'main',
    LayoutsDir: path.join(app.get('views'), 'layouts'),
    PartialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true,},
     
}));
app.set('view engine','.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(overrrideas('_method'));

//variables globales

//routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


//static files

app.use(express.static(path.join (__dirname, 'public')));

module.exports = app;