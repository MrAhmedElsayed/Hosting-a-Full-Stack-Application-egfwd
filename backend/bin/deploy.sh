aws cp --recursive --acl public-read ./build s3://front-store/
#aws s3 website s3://my-bucket/ --index-document index.html --error-document error.html

#eb init -i --platform Node.js --region us-east-1 --profile cli-user store-front --no-verify-ssl

#from udacity code

#!/bin/bash
set -e

# branch name that will be used as a serverless stage
STAGE=$1

# get the end point and compute graphql endpoint
ENDPOINT="$(cd backend && yarn serverless info -s $STAGE --verbose | grep ServiceEndpoint | sed s/ServiceEndpoint\:\ //g)"
GRAPHQL_ENDPOINT=""\""$ENDPOINT/graphql"\"""

# edit config files before build
tmp=$(mktemp)
jq ".ephemeral.GRAPHQL_ENDPOINT = $GRAPHQL_ENDPOINT" frontend/src/config/config.json >"$tmp" && mv "$tmp" frontend/src/config/config.json
