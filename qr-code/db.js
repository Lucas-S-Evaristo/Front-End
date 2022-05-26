async function connect () {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3307/auditorio") /* o host onde esta o seu banco */
    console.log("Conectou no MySql!");
    global.connection = connection; /* guarda a conexão da connection em uma variável global */
    return connection
}

async function selectCustomer() {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM ADMINISTRADOR;')
    return rows
}

module.exports = {selectCustomer}