
## Deployment EKS
Deploy EKS infrastructure and cluster:
```
$ aws cloudformation deploy --stack-name eks-dev-stack --template-file ./networking-cloudformation.yml
$ aws cloudformation deploy --stack-name eks-dev-cluster-roles-stack --template-file ./role-cloudformation.yml --capabilities CAPABILITY_NAMED_IAM
$ aws cloudformation deploy --stack-name eks-dev-cluster-stack --template-file ./cluster-cloudformation.yml 

```

Locally connect to EKS Cluster:
```
$ aws eks update-kubeconfig --region us-east-1 --name eks-dev
```

Deploy Nginx Ingress controller:
```
$ helm pull oci://ghcr.io/nginxinc/charts/nginx-ingress --untar --version 1.0.2
$ kubectl apply -f crds/
$ helm install nginx-ingress .

```

## Teardown EKS
```
$ aws cloudformation delete-stack --stack-name eks-dev-cluster-stack
$ aws cloudformation delete-stack --stack-name eks-dev-cluster-roles-stack
$ aws cloudformation delete-stack --stack-name eks-dev-stack
```