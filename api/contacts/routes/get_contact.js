'use strict';

const mongoose = require('mongoose');
const Contact = require('../model/Contact');

module.exports = (req, res) => {
  const _id = req.params.id;

  Contact.findOne({ _id }, (err, contact) => {
    if (err) {
      res.status(400).json(err);
    }

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
    }

    res.json(contact);
  });
};
