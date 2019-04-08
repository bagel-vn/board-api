const Api = require('claudia-api-builder')
const api = new Api()


const getBoards = require('./handlers/get-boards')
const createBoard = require('./handlers/create-board')
const updateBoard = require('./handlers/update-board')
const deleteBoard = require('./handlers/delete-board')


// get(scan)
api.get('/', () => 'Welcome to Board API for bagel.vn')
api.get('/boards', () => {
  return getBoards()
})
api.get('/boards/{id}', (request) => {
  return getBoards(request.pathParams.id)
})

// post(create)
api.post('/boards', (request) => {
  return createBoard(request.body)
},{
  success: 201,
  error: 400
})

// put(update)
api.put('/boards/{id}', (request) => {
  return updateBoard(request.pathParams.id, request.body)
},{
  error: 400
})

// delete
api.delete('/boards/{id}', (request) => {
  return deleteBoard(request.pathParams.id)
}, {
  error: 400
})

module.exports = api