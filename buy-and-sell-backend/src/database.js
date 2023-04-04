import mysql from 'mysql';

const connnection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'abc123!',
    database: 'buy-and-sell',
});

export const db = {
    connect: () => connnection.connect(),
    query: (queryString, escapedValues) => 
        new Promise((resolve, reject) => {
            connnection.query(queryString, escapedValues, (error, results, fields) => {
                if(error) reject(error);
                resolve({ results, fields});
            })
        }),
    end: () => connnection.end(),
}