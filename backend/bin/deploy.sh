aws --version

rm -rf www.zip

npm run build

rm -rf www

eb init --profile cli-user
eb use Storefront-env --profile cli-user
eb deploy --profile cli-user
eb setenv AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY BCRYPT_PASSWORD=$BCRYPT_PASSWORD TOKEN_SECRET=$TOKEN_SECRET SALT_ROUNDS=$SALT_ROUNDS ENV=$ENV RDS_HOSTNAME=$RDS_HOSTNAME RDS_PORT=$RDS_PORT RDS_DB_NAME=$RDS_DB_NAME RDS_USERNAME=$RDS_USERNAME RDS_PASSWORD=$RDS_PASSWORD --profile cli-user

#Compress-Archive in.txt out.zip
#aws s3 cp deploy.zip s3://mybucket/deploy.zip
#aws elasticbeanstalk create-application-version --application-name my-app --version-label 12345 --source-bundle S3Bucket="mybucket",S3Key="deploy.zip"
#aws elasticbeanstalk update-environment --application-name my-app --environment-name MyApp-env --version-label 12345