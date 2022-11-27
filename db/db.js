const Pool= require('pg').Pool;
const pool = new pool({
    user: 'postgres',
    password:'1234',
    host:'localhost',
    port: 5432 ,
    database:'form'
})