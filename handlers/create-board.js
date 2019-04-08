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
  })

}

module.exports = createBoard