const express = require('express');
const people = express.Router();
const connection = require('../connection/mysql-connection');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

people.get('/', (res) => {
    res.status(200).send('Restful API NodeJS - MySQL Working')
});

people.get('/people/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        'SELECT * FROM people WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                return res.send(error);
            } else {
                return res.json({
                    data: results
                });
            }
        }
    );
});

people.get('/people', (req, res) => {
    connection.query(
        'SELECT * FROM people',
        (error, results) => {
            if (error) {
                return res.send(error);
            } else {
                return res.json({
                    data: results
                });
            }
        }
    );
});

people.delete('/people/delete/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        'DELETE FROM people WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                res.status(500).json({ status: 'error', message: error.message });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ status: 'not_found', message: 'Person not found' });
            } else {
                res.status(200).json({ status: 'success', message: 'Person deleted successfully' });
            }
        }
    );
});


people.post('/people/add', jsonParser, (req, res) => {
    const { first_name, last_name, email, age, gender, address } = req.body;

    connection.query('INSERT INTO People (first_name, last_name, email, age, gender, address) VALUES (?, ?, ?, ?, ?, ?)', [first_name, last_name, email, age, gender, address], (error, results) => {
        if (error) {
            res.status(500).json({ status: 'error', message: error.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ status: 'not_found', message: 'Person not found' });
        } else {
            res.status(200).json({ status: 'success', message: 'Person add successfully' });
        }
    }
    );
});

people.put('/people/update/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, age, gender, address } = req.body;

    connection.query(
        'UPDATE People SET first_name=?, last_name=?, email=?, age=?, gender=?, address=? WHERE id=?',
        [first_name, last_name, email, age, gender, address, id],
        (error, results) => {
            if (error) {
                res.status(500).json({ status: 'error', message: error.message });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ status: 'not_found', message: 'Person not found' });
            } else {
                res.status(200).json({ status: 'success', message: 'Person update successfully' });
            }
        }
    );
});

module.exports = people;