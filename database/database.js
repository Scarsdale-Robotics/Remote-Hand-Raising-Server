const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

let db

async function getInstance() {
    if(!db) 
    {
        db = await sqlite.open({filename: "./app.db", driver: sqlite3.Database})
        await db.migrate()
    }
    return db
}

exports.getInstance = getInstance