aws cp --recursive --acl public-read ./build s3://front-store/
#aws s3 website s3://my-bucket/ --index-document index.html --error-document error.html

#eb init -i --platform Node.js --region us-east-1 --profile cli-user store-front --no-verify-ssl