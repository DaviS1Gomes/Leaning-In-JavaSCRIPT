exports.calcular = (req, res) => {
    const { numA, numB, operacao } = req.body;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = Number(numA) + Number(numB);
            break;
        case '-':
            resultado = Number(numA) - Number(numB);
            break;
        case '*':
            resultado = Number(numA) * Number(numB);
            break;
        case '/':
            resultado = Number(numA) / Number(numB);
            break;
    }

    res.render('resultado', { resultado: resultado });
};

const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calcular', calculadoraController.calcular);

module.exports = router;

const express = require('express');
const app = express();
const calculadoraRoutes = require('./routes/calculadoraRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', calculadoraRoutes);

app.listen(3000, () => {
    console.log('Aplicativo rodando na porta 3000');
});
