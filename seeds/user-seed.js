const { User } = require('../models');

const userData =
[
  {
    "username": "jokoth22",
    "email": "jokoth22@gmail.com",
    "password": "jokoth22PW"
  },
  {
    "username": "jump4joy322",
    "email": "jump4joy322@hotmail.com",
    "password": "jump4joy322PW"
  },
  {
    "username": "joyfuljoyce322",
    "email": "joyfuljoyce322@gmail.com",
    "password": "joyfuljoyce322PW"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;