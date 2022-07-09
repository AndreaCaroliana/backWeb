const { Client } = require('pg');
const options = {
    host:"localhost",
    user:"postgres",
    database:"postgres",
    password:"root"
};

const database = new Client(options);

database.connect()
.then(client  => console.log('database connected'))
.catch(error  => console.error(error));

const queryLogin = database.query("select *from login where = email");

Promise.all([queryLogin])
.then(results => {
    const queryR = results[0].rows;
    console.log(queryR);
}).catch (error => console.error(error));

//close connection data base
setTimeout(() =>{
   database.end();
}, 2000); 