aws s3 rm --recursive s3://storefront-front/ --profile cli-user
aws s3 cp --recursive --acl public-read ./dist s3://storefront-front/ --profile cli-user