// step 1 :

const express = require('express') // charger le module
const app = express() // constuire app express 
const port = 3000 // démarer app sur le port 3000

app.use(express.json());
app.use(express.static('public'));

//step 3 : utiliser route contactform pr afficher 'got bod + req
app.post('/contactform', (req, res) => {    //  passe par cette route pr afficher body
    console.log('Got bod:', req.body);     
    res.sendStatus(200);
});


// Step 2 :
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })