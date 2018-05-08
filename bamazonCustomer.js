var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"bamazon",
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected!")
  
})

var makeTable = function(){
    connection.query("SELECT * FROM bamazon.products",function(err,res){
        console.log(res);
        for(var i=0; i<res.length;i++){ 
            console.log(res[i].productname+"||"+res[i].departmentname+"||"+res[i].price+"||"+res[i].stockquantity);
    }

    })
}
makeTable();

var promptQuestions=function(res){
    inquirer.prompt([{
        type:"input",
        name:"choice",
        message:"How is your day going?",
    }]).then(answers)
 var correct=false;
for(var i=0; i<res.length;i++){ 
    if(res[i].productname===answer.choice){
        correct=true;  
        var product=answer.choice;
        var id=i;
        inquirer.prompt([{
            type:"input",
            name:"quantity",
            message:"How much are you ordering?",
        }]).then(answers)
    }
}
}