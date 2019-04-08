# Board API

## Claudia.js
### Create API
```
claudia create --region ap-southeast-1 --api-module=api > claudia.log
```
## DynamoDB

### Create DynamoDB Table
```
aws dynamodb create-table \
--table-name boards \
--attribute-definitions \
AttributeName=id,AttributeType=S \
--key-schema \
AttributeName=id,KeyType=HASH --provisioned-throughput \
ReadCapacityUnits=1,WriteCapacityUnits=1 \
--region ap-southeast-1 > \
table-boards.json
```
board의 id는 곧 url로 쓰인다.
```
예)board id가 stock이면 boards.vagel.vn/b/stock
```

### Policy
```
aws iam put-role-policy \
--role-name board-api-executor \
--policy-name BoardApiDynamoDBPolicy \
--policy-document file://./roles/dynamodb.json
```