const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var cors = require('cors')

app.use(cors())

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'localizacaodb',
    //dateStrings: true
    dateStrings: 'date',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log("Banco de dados conectado.");
    else
    console.log("Erro de solicitação \n Error: "+ JSON.stringify(err,undefined,2));
})

app.listen(3001,()=> console.log('Server express executando'));

//get em todos os dados

app.get('/localizacoes', (req,res)=> {
    mysqlConnection.query('SELECT * FROM localizacao', (err, rows, fields)=>{
        if(!err) {
        res.send(rows)
    }else
    console.log(err);
    })
});

// get em um dado

app.get('/localizacoes/:id', (req,res)=> {
    mysqlConnection.query('SELECT * FROM localizacao WHERE ID = ?', [req.params.id], (err, rows, fields)=>{
        let [ localizacao ] = rows
        if(!err) {
        res.send(localizacao)
    }else
    console.log(err);
    })
});

// delete em um dado

app.delete('/localizacoes/:id', (req,res)=> {
    mysqlConnection.query('DELETE FROM localizacao WHERE ID = ?', [req.params.id], (err, rows, fields)=>{
        if(!err) {
        res.send("Dado deletado com sucesso.")
    }else
    console.log(err);
    })
});

// Inserir um dado

app.post('/localizacoes', (req,res)=> {
    let date = new Date();
    date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    let emp = req.body;
    var sql = "SET @ID = ?; SET @Cep = ?; SET @Data_Entrada = ?; SET @Latitude = ? ; SET @Longitude = ?; CALL LocalizacaoAddOrEdit(@ID, @Cep, @Data_Entrada, @Latitude, @Longitude);";
    mysqlConnection.query(sql, [0, emp.Cep, date, emp.Latitude, emp.Longitude], (err, rows, fields)=>{
        if(!err) {
        rows.forEach(element => {
            if(element.constructor == Array)
            res.send('Dado adicionado com id: '+ element[0].ID);
        });
        }else
        console.log(err);
    })
});

// Alterar um dado

app.put('/localizacoes', (req,res)=> {
    let emp = req.body;
    var sql = "SET @ID = ?; SET @Cep = ?; SET @Data_Entrada = ?; SET @Latitude = ? ; SET @Longitude = ?; CALL LocalizacaoAddOrEdit(@ID, @Cep, @Data_Entrada, @Latitude, @Longitude);";
    mysqlConnection.query(sql, [emp.ID, emp.Cep, emp.Data_Entrada, emp.Latitude, emp.Longitude], (err, rows, fields)=>{
        if(!err) 
            res.send('Dado alterado com sucesso.')
        else
            console.log(err);
    })
});