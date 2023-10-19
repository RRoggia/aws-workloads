# AWS Workloads

## Event Bridge
This projects demonstrates a simple event driven architecuture using AWS Event Bridge as the event bus to receive and route events.

[Event Bridge Example](./event-bridge/)

## Three Tier App
This project demonstrates the basics of networking, database and computing by exposing a simple web application that communicates with a server with DB connectivity.

[Three tier app Example](./three-tier-app/)
AWS Services: VPC, EC2, RDS

## ECS
This project demonstrates how ECS abstracts several pieces of infrastrcuture required in the Three Tier APP demo and improves the deployment using containers.

AWS Services: ECS

## EKS
This project demonstrates how EKS abstracts the cloud provider required in both the Three Tier APP and ECS demo.

AWS Services: EKS

## Lambda
This project demonstrates how Lambda functions can reduce the overhead on infrastructure and simplify development for event driven architectures.

[Examples](./lambda/)

AWS Services: Lambda, SQS, SNS, S3