# Web Application Deployment on AWS Cloud

This folder contains a minimal Express.js web application prepared for deployment on AWS Elastic Beanstalk.

## Prerequisites

- Node.js installed
- npm installed
- AWS account
- AWS CLI installed and configured
- Elastic Beanstalk CLI installed

Check Node.js and npm:

```bash
node --version
npm --version
```

Configure AWS:

```bash
aws configure
```

Install Elastic Beanstalk CLI:

```bash
pip install awsebcli
```

## Setup

Open a terminal in this folder:

```bash
cd MEAN/implementation_web_application_deployment_on_aws_cloud
```

Install dependencies:

```bash
npm install
```

## Run Locally

Start the Express server:

```bash
npm start
```

Open:

```text
http://localhost:8080
```

Health check:

```text
http://localhost:8080/health
```

## Deploy to AWS Elastic Beanstalk

Initialize the Elastic Beanstalk application:

```bash
eb init
```

Create an environment:

```bash
eb create aws-deploy-env
```

Deploy the app:

```bash
eb deploy
```

Open the deployed app:

```bash
eb open
```

## Important Files

- `server.js` - Express web server
- `package.json` - Dependencies and start script
- `Procfile` - Process command used by Elastic Beanstalk
