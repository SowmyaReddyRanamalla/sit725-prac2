const express = require('express');
const { response } = require('express');
let app = express();

app.use(express.static('public'));

app.get('/',function(req,res) {
    response.send('Hello World')
})

let accounts = [
{id:1,name:'alex',deposit:5},
{id:2,name:'sarah',deposit:5},
{id:3,name:'jim',deposit:15}
]
let findAccount= function(member){
if(member == 'alex'){
result = 'id:' + accounts[0].id + 'deposit:' + accounts[0].deposit;
}else if(member == 'sarah'){
result = 'id:' + accounts[1].id + 'deposit:' + accounts[1].deposit;
}else if(member == 'jim'){
result = 'id:' + accounts[2].id + 'deposit:' + accounts[2].deposit;
}else{
result = 'No data';
}
return result;
}


app.get('/account',function(req,res){
    let result =findAccount(req.query.name);
res.send(' The result is: ' +result);
})
app.listen(3000);
