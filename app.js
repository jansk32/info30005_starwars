const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

var characters = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
       
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
    },
    {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
    }]

    app.get('/',function(req, res){
    res.send(characters);
    console.log("Chacaractes sent!")
});
    
    app.get('/:id',function(req,res){
        res.send(characters[req.params.id]);
    });

    app.post('/add',function(req,res){
        var newChar = {
            name: req.body.name,
            height: req.body.height,
            mass: req.body.mass,
            hair_color: req.body.hair_color,
        }
        characters.push(newChar);
        res.send(newChar);
    });


    app.delete('/del/:name', function(req,res){
        
        for(let i =0; i< characters.length;i++){
            if(characters[i].name === req.params.name){
                characters.splice(i,1);
                break;
            }
        }
        res.send(characters);

    });


    app.listen(port, function(){
        console.log("Done");
    })