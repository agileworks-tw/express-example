var models = require('../models');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const SECRET = 'rn-tw';

router.post('/login', async function(req, res) {
  // create user rn-tw if not exist
  const userInstance = await models.User.findOne({
    where: {
      username: 'rn-tw'
    }
  });
  let user = userInstance.dataValues;
  if (!user) {
    user = await models.User.create({
      username: 'rn-tw'
    });
  }

  // generate jwt token by https://jwt.io/
  // payload:
  const payload = {
    id: user.id,
    name: user.username
  };

  const token = jwt.sign(payload, SECRET);

  const { username, password } = req.body;
  // validate username & password
  if (username === 'rn-tw' && password === 'rn-tw') {
    res.json({
      success: true,
      id: user.id,
      token
    });
  } else {
    res.status(401).json({
      success: false,
      error: {
        msg: 'wrong password'
      }
    });
  }
});

function authChecker(req, res, next) {
  /*
  * Check if authorization header is set
  */
  if (
    req.hasOwnProperty('headers') &&
    req.headers.hasOwnProperty('authorization')
  ) {
    try {
      /*
      * Try to decode & verify the JWT token
      * The token contains user's id ( it can contain more informations )
      * and this is saved in req.user object
      */
      const token = req.headers['authorization'].split(' ')[1];
      req.user = jwt.verify(token, SECRET);
    } catch (err) {
      /*
      * If the authorization header is corrupted, it throws exception
      * So return 401 status code with JSON error message
      */
      return res.status(401).json({
        success: false,
        error: {
          msg: 'Failed to authenticate token!'
        }
      });
    }
  } else {
    /*
    * If there is no autorization header, return 401 status code with JSON
    * error message
    */
    return res.status(401).json({
      success: false,
      error: {
        msg: 'No token!'
      }
    });
  }
  next();
  return;
}

router.get('/', async function(req, res) {
  let users = await models.User.findAll({
    include: [models.Task]
  });

  res.render('index', {
    title: 'Sequelize: Express Example',
    users: users
  });
});

router.use(authChecker);

router.get('/api/users/:user_name/tasks', async function(req, res) {
  let username = req.params.user_name;
  let user = await models.User.findOne({
    where: { username }
  });

  let UserId = user.id;
  let tasks = await models.Task.findAll({
    where: { UserId }
  });

  res.json({ tasks });
});

router.post('/api/users/:user_name/tasks/create', async function(req, res) {
  let username = req.params.user_name;
  let user = await models.User.findOne({
    where: { username }
  });

  let title = req.body.title;
  let task = await models.Task.create({
    title,
    UserId: user.id
  });

  res.json({ task });
});

router.put('/api/task/:id', async function(req, res) {
  let id = req.params.id;
  let completed = req.body.completed;

  let task = await models.Task.findOne({
    where: { id }
  });

  task.completed = completed;
  task = await task.save();

  res.json({ task });
});

router.delete('/api/task/:id', async function(req, res) {
  let id = req.params.id;

  let task = await models.Task.findOne({
    where: {
      id
    }
  });

  task = await task.destroy();

  res.json({
    task
  });
});

module.exports = router;
