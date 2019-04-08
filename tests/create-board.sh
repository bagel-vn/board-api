curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"id": "stock", "name": "Stock Board", "description": "Stock Board", "categories": ["hobby", "investment"]}' \
https://1n8ogjpon4.execute-api.ap-southeast-1.amazonaws.com/latest/boards

curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"id": "iu", "name": "IU Fan Board", "description": "IU Fan Board", "categories": ["music", "idol"]}' \
https://1n8ogjpon4.execute-api.ap-southeast-1.amazonaws.com/latest/boards