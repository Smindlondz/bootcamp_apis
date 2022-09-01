import express from 'express';
import { longestWord, shortestWord, wordLengths } from './wordGame.js';
import totalPhoneBill from './phone-bill.js'



const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api/word_game", function (req, res) {

    const sentence = req.query.sentence
    if (!sentence) {
        res.json ({
            error: ' Please send in a sentence to analyse'
        });
    };
    res.json({
        "shortestWord": shortestWord(sentence),
        "longestWord": longestWord(sentence),
        "sum": wordLengths(sentence)
    });
});

app.post("/api/phonebill/total", function (req, res) {

    const bill = req.body.bill;
    res.json({
        total: totalPhoneBill(bill)
    });
});


app.get("/api/phonebill/prices", function (req, res) {
    
    const billService = req.query.bill;
    
    res.json({
        // call: 
        // sms: 
    });  
});


let PORT = process.env.PORT || 6007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});