/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
import {createUser} from '../services/userService';

export default (app) => {

    // We can create an API by this.
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/register', (req, res) => {
        res.render('index');
    });
}