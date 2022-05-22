# Welcome to Storefront!

The storefront website is an *eCommerce* website, through which you can manage and order products and also manage users.

The site has two parts, the [Front-End](http://storefront-front.s3-website-us-east-1.amazonaws.com/), for [docs](https://github.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/blob/main/backend/README.md), which is concerned with the
user interface, and the [Back-End](https://github.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/blob/main/backend/README.md), which deals with databases and
analysis of user requests.
You can enter the website demo through the [link](http://storefront-front.s3-website-us-east-1.amazonaws.com/) and log in with the **username** ahmed123 and the **password** 123



# Screenshots

Screenshots of the AWS console indicate that the following services are properly set up, i.e. healthy and accessible:

-   *AWS RDS for the database*
![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/DB/aws%20rds%20for%20the%20database.png)

-   *AWS ElasticBeanstalk (or alternatives like lambda) for the API*
![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/API/ElasticBeanstalk%20Health.png)

-   *AWS S3 for web hosting*
     - fig.1
![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/Front-End/S3_1.png)
    - fig.2
![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/Front-End/S3_2.png)

The app is accessible via the link provided, [`deployed working front end`](http://storefront-front.s3-website-us-east-1.amazonaws.com/).
You must see this interface:
![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/communication_representation/app_is_accessable.png)


## Documenting Deployment Process

 -   Infrastructure description

     ![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/diagram/diagram.png)

 -   App dependencies
     - parent *package.json*
	 
	 ```json
     {
		"name": "my-app",
		"version": "0.0.1",
		"private": true,
		"engines": {
			"node": "14"
		},
		"scripts": {
			"frontend:install": "cd frontend && npm i",
			"frontend:build": "cd frontend && npm run build",
			"frontend:test": "cd frontend && npm run test",
			"frontend:deploy": "cd frontend && npm run deploy",
			"backend:install": "cd backend && npm i",
			"backend:build": "cd backend && npm run build",
			"backend:test": "cd backend && npm run test",
			"backend:deploy": "cd backend && npm run deploy"
			}
		}
        ```
	 
 -   Pipeline process
	 - fig.1
	 ![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/pipline_status/pipeline_status_1.png)
	 - fig.2
	 ![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/pipline_status/pipeline_status_2.png)
	 - fig.3
	 ![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/pipline_status/pipeline_status_3.png)
	 - fig.4
	 ![enter image description here](https://raw.githubusercontent.com/MrAhmedElsayed/Hosting-a-Full-Stack-Application-egfwd/main/docs_screenshots/pipline_status/pipeline_status_4.png)

