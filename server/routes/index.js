/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
import {createTask} from '../services/taskService';
import {createUser} from '../services/userService';

export default (app) => {

    // We can create an API by this.
    // Render our index.hbs
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/users', (req, res) => {
        console.log(req.body);
        createUser(req.body, (err, data) => {
            let response = {};
            if(!err && data){
                response = {
                    users: {
                        _id: data._id,
                        name: data.name,
                        email: data.email
                    },
                    loggedIn: true
                };
            }
            else{
                response = {error: 'User can not be created. Please try again'};
            }

            // Defaults status to 200, res.status(200). This is where you would specify status if needed.
            res.json(data);
        });
    });
}