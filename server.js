const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const enforce = require('express-sslify');

const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();


app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function (req, res) {
        res.send(path.join(__dirname, 'client/build', 'index.html'))
    })

}

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})


app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }


    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, error => {
    if (error) throw error;
    console.log(`Server Running On Port ${PORT}`)
});

//PORT, () => console.log(`Server Running On Port ${PORT}`))