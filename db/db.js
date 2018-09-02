let sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./main_db.db', (err) => {
        if(err) {
                return console.error(err.message);
        }
        console.log('Conected to main_db.db');
});

module.exports = db; 
