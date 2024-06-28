const indexCtrl = {};

indexCtrl.renderIndex = ('/', (req, res) => {
    res.render('index');
});

indexCtrl.renderformulario = ('/formulario', (req, res) => {
    res.render('formulario');
});

module.exports = indexCtrl