import { openDb } from '../configDB.js';

export async function createTableReview(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Review ( idReview INTEGER PRIMARY KEY, idGame INTEGER, comment TEXT )')
    })
}

export async function insertReview(req, res) {
    let review = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Review (idGame,comment) VALUES (?,?)', [review.idGame , review.comment])
    });
    res.json({
        "statusCode": 200    
    })
}

export async function selectReviewAll(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Review').then(review => res.json(review))
    });
}

export async function selectReviewByGame(req, res){
    let review = req.body;
    openDb().then(db=>{
        db.all('SELECT * FROM Review WHERE idGame=?', [review.idGame])
        .then(review=> res.json(review) );
    });
}

export async function updateReview(req, res) {
    let review = req.body;
    openDb().then(db => {
        db.run('UPDATE Review SET comment= ? WHERE idReview= ? ', [review.comment, review.idReview])
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteReview(req, res) {
    let review = req.body;
    openDb().then(db => {
        db.get('DELETE FROM Review WHERE idReview=?', [review.idReview]).then(res => res)
    });
    res.json({
        "statusCode": 200
    })
}