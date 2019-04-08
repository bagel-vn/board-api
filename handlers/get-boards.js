const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()


function getBoards(id){
  if (typeof id === 'undefined')
    return docClient.scan({
      TableName: 'boards'
    }).promise()
    .then((result) => result.Items)

  return docClient.get({
    TableName: 'boards',
    Key: {
      id: id
    }
  }).promise()
  .then(result => result.Item)
  .catch(error => {
    console.log('[get-boards.js] error occurred during get one item', error)
    throw error
  })
}


module.exports = getBoards