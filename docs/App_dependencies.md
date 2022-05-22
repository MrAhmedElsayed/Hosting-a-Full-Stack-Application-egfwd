# App Dependencies
In this project, you will take a newly developed full stack application and deploy it to a cloud service provider so that it is available to customers. This application contains the main components of a 3-tier full stack application (**UI**,  **API**, and  **Database**).

You will have to do the following:
-   **Configure the services and infrastructure on AWS:**
    - RDS: for managing databases such as PostgreSQL.
    - S3 Bucket: to store static files for serving the user interface.
    - Elastic Beanstalk Stack: This is for API service, and you must learn     how to deal with EB CLI to make a deployment for the code.
-   **Scripts to deploy each component of the application**
*code exapmle:*

		eb init --profile cli-user
		eb use Storefront-env --profile cli-user
		eb deploy --profile cli-user
    
	    eb setenv AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY BCRYPT_PASSWORD=$BCRYPT_PASSWORD TOKEN_SECRET=$TOKEN_SECRET SALT_ROUNDS=$SALT_ROUNDS ENV=$ENV RDS_HOSTNAME=$RDS_HOSTNAME RDS_PORT=$RDS_PORT RDS_DB_NAME=$RDS_DB_NAME RDS_USERNAME=$RDS_USERNAME RDS_PASSWORD=$RDS_PASSWORD --profile cli-user

-   **Automated pipeline using CircleCI**
*code example:*

    ```shell
    version: 2.1
    orbs:
    node: circleci/node@5.0.2
    aws-cli: circleci/aws-cli@3.1.1
    eb: circleci/aws-elastic-beanstalk@1.0.0
    jobs:
    build:
        docker:
        - image: 'cimg/base:stable'
        steps:
        - checkout
        - node/install:
            install-yarn: false
            node-version: '14'
        - aws-cli/setup:
            profile-name: cli-user
        - eb/setup
        - run: node --version
        - run: aws --version
        - run: eb --version
        - run:
            name: 'Install Frontend'
            command: npm run frontend:install
        - run:
            name: 'Build Frontend'
            command: npm run frontend:build
        - run:
            name: 'Test Frontend'
            command: npm run frontend:test
        - run:
            name: 'Deploy frontend'
            command: npm run frontend:deploy

        - run:
            name: 'Install Backend'
            command: npm run backend:install
        - run:
            name: 'Build Backend'
            command: npm run backend:build
        - run:
            name: 'Test Backend'
            command: npm run backend:test
        - run:
            name: 'Deploy backend'
            command: npm run backend:deploy


    workflows:
    storefront:
        jobs:
        - build:
            filters:
                branches:
                only:
                    - main
    ```