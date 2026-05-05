# ESD20 - Web Application Deployment on AWS Cloud

This is a minimal Node.js web app prepared for AWS Elastic Beanstalk deployment.

## Files
- `server.js` - Express web server
- `package.json` - Dependencies and start script
- `Procfile` - Process command for deployment

## Prerequisites
- AWS account
- AWS CLI installed and configured (`aws configure`)
- Elastic Beanstalk CLI installed (`pip install awsebcli`)

## Deployment Steps
1. Open terminal in `MEAN/esd20`
2. Install dependencies:
   - `npm install`
3. Initialize Elastic Beanstalk app:
   - `eb init`
4. Create environment:
   - `eb create esd20-env`
5. Deploy:
   - `eb deploy`
6. Open deployed app:
   - `eb open`

## Health Check
- `/health` route returns JSON status.
