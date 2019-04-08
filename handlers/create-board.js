const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
// const uuid = require('uuid/v4')


function createBoard(request){
  if (!request || !request.id)
    throw new Error('[create-board.js] ID is required to create board')

  return docClient.put({
    TableName: 'boards',
    Item: {
      id: request.id,
      name: request.name,
      description: request.description,
      categories: request.categories,
      posts: []
    }
  }).promise()
  .then((res) => {
    console.log('[create-board.js] board is created!', res)
    return res
  })
  .catch((createError) => {
    console.log('[create-board.js] board is not created :(', createError)
    throw createError
  })
}

module.exports = createBoard