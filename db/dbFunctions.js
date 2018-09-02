const db = require("./db");

const getall = (data) => {
    return new Promise((resolve,reject) => {
        let table = data.table;
        let start = data.start;
        if(data.end) {
            let end = data.end;
            var sql = `SELECT * from ${table} where rowid >= ${start} and rowid <= ${end}`;
        } else {
            var sql = `SELECT * from ${table} where rowid >= ${start}`;
        }
        console.log(sql);
        
        var op = "";
        db.all(sql, [], (err, rows) => {
            if(err) {
                reject(err);
            }
            rows.forEach((row) => {
            //console.log(row.email);	
            op += row.email + "\n";
        });
        resolve(op);
        });
    });
}

module.exports = getall;