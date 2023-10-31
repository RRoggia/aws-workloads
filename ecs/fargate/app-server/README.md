
## Deploy to ECR
```
<account-id>.dkr.ecr.us-east-1.amazonaws.com/app-server

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com/app-server

docker build -t app-server . 

docker tag app-server:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/app-server

docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/app-server

```