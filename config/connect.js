const db = {
    url : 'mongodb://localhost:27017/foodDB',
    opt : {
        useNewUrlParser: true//mongoose will throw an deprication warning to avoid that warning we use thi line
    }
}

module.exports = db;