const mongodb = require('mongodb');
const express = require('express');
const userRepository = require('../repository/userRepository');
const router = express.Router();

router.get('/', async (request, response) => {
    const user = await userRepository;
    response.send(await user.find({}).toArray());
});

router.get('/:id', async(request, response) => {
    const user = await userRepository;
    response.send(await user.findOne({_id: new mongodb.ObjectID(request.params.id)}));
});

router.post('/insert', async(request, response) => {
    const user = await userRepository;
    await user.insertOne({
        text: request.body.text,
        createdAt: new Date()
    }); 
    response.status(201).send();
});

router.post('/edit/:id', async (request, reponse) => {
    const user = await userRepository;
    await user.updateOne(
        {_id: new mongodb.ObjectID(request.params.id)}, 
        {$set: 
            {text: request.body.text,
            updatedAt: new Date()}
        }
    );
    reponse.send();
});

router.post('/delete/:id', async(request, response) => {
    const user = await userRepository;
    await user.deleteOne({_id: new mongodb.ObjectID(request.params.id)});
    response.send();
});

module.exports = router;