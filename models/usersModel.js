const moongoose = require('mongoose');

const userScheema = new moongoose.Schema({
    name: {required: true, type: 'string'},
    email: {required: true, type: 'string', unique: true},
    password: {required: true, type: 'string'},
});


module.exports = moongoose.model('users', userScheema);