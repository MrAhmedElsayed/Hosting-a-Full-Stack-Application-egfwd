aws --version
#Compress-Archive in.txt out.zip
#aws s3 cp deploy.zip s3://mybucket/deploy.zip
#aws elasticbeanstalk create-application-version --application-name my-app --version-label 12345 --source-bundle S3Bucket="mybucket",S3Key="deploy.zip"
#aws elasticbeanstalk update-environment --application-name my-app --environment-name MyApp-env --version-label 12345