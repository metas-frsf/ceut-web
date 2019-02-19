const config = require('server-config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// users hardcoded for simplicity, store in a db for production applications

const users =  [
  {
    firstName: 'Ramiro',
    lastName: 'Olivencia',
    username: 'rolivencia',
    password: '$2a$10$fgB5dXfJw7dLLzGGGmyJJe2vX5lGJayJ3GW0EMzrx0tPuZ./C24De',
    id: 1,
    token: '',
    avatar: '🧑🏻'
  },
  {
    firstName: 'Leandro',
    lastName: 'Pochettino',
    username: 'lpochettino',
    password: '$2a$10$JlMs0xCnt7i6wGKBMjbKpeX8gano7d3a/sMOmty8N2YqbIU/QQOge',
    id: 2,
    token: '',
    avatar: '🧑🏻'
  },
  {
    firstName: 'Florencia',
    lastName: 'Grimaldi',
    username: 'fgrimaldi',
    password: '$2a$10$ay3401gzi0.d/.1rKg7A0.15f2IMWnGKYHXOq7DqPGlX.NqXahNm2',
    id: 3,
    token: '',
    avatar: '👩🏻'
  }
];

module.exports = {
  authenticate,
  getAll
};

async function authenticate({ username, password }) {
  const user = users.find(u => u.username === username.toLowerCase() && bcrypt.compareSync(password, u.password, 10));
  if (user) {
    const token = jwt.sign({ sub: user.id }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token
    };
  }
}

async function getAll() {
  return users.map(u => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}
