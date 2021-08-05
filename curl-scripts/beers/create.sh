#!/bin/bash

API="http://localhost:4741"
URL_PATH="/beers"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "beer": {
      "Name": "'"${NAME}"'",
      "Brewery": "'"${BREWERY}"'",
      "Type": "'"${TYPE}"'",
      "Rating": "'"${RATING}"'",
      "Description": "'"${DESCRIPTION}"'"

    }
  }'

echo
