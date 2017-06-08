/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
import {createUser, getUsers, userLogin, pushStatus} from '../services/userService';
import {createComment} from '../services/commentService';
import {createStatus} from '../services/statusService';

export default (app) => {

    // We can create an API by this.
    // Render our index.hbs
    app.get('/', (req, res) => {
        res.render('index');
    });

     app.get('/users', (req, res) => {
        getUsers((error, users) => { 
            res.json(users);
        });
    });


    app.post('/users', (req, res) => {
        console.log(req.body);
        createUser(req.body, (err, data) => {
            let response = {};
            if(!err && data){
                response = {
                    user: {
                        _id: data._id,
                        name: data.name,
                        email: data.email,
                        statuses: data.statuses
                    },
                    loggedIn: true
                };
            }
            else{
                response = {error: 'User can not be created. Please try again'};
            }

            // Defaults status to 200, res.status(200). This is where you would specify status if needed.
            res.json(response);
        });
    });

    app.post('/login', (req, res) => {
        userLogin(req.body, (err, data) => {
           console.log(data)
            let response = {};
            if(!err && data){
                response = {
                    user: {
                        _id: data._id,
                        name: data.name,
                        email: data.email,
                        statuses: data.statuses
                    },
                    loggedIn: true
                };
            }
            else{
                response = {error: 'Password is incorrect'};
            }
            res.json(response);
        })    
    })

    // app.post('/status', (req, res) => {
    //    createStatus(req.body, (err, data) => {
    //         let response = {};
    //         if(!err && data){
    //             response = {
    //                 status: {
    //                     _id: data._id,
    //                     status: data.status,
    //                 }
    //             };
    //         }
    //         else{
    //             response = {error: 'Status can not be created. Please try again'};
    //         }

    //         // Defaults status to 200, res.status(200). This is where you would specify status if needed.
    //         res.json(response);
    //     });
    // });

    app.put('/user/:id/status', (req, res) => {
        console.log('is our id there?', req.params.id);
        console.log('is our correct status there?', req.body);
        console.log(req.body);
        userService.pushStatus(req.params.id, req.body, (err, req) => {
            if(!err){
                res.json({modifiedObject});
            }
            else {
                res.json({error: 'there was an error', err});
            }
        })
    })
    
}