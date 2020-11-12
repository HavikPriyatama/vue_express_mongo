const mongodb = require('mongodb');

async function userRepository(){
    const uri = "mongodb+srv://user:P@ssw0rd@cluster0.9it1w.mongodb.net/VUE_EXPRESS_MONGO?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    });
     
    return client.db('VUE_EXPRESS_MONGO').collection('user');
}

module.exports = userRepository();

