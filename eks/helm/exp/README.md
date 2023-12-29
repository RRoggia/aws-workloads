# exp

This repo creates a Deployment with 2 replicas of the pod and an ingress redirecting the traffic from the `/demo` path.

After deployed, run the command below to get the address to invoke the API.

```
kubectl get ingress
```

## Executing the app

To checkout the k8 files run:

``` sh
$ mkdir out
$ helm template . --output-dir out --name-template=demo
```

To install locally the helm on the cluster:

``` sh
$ helm install . --name-template=demo
```

To upgrade the charts on the cluster:

``` sh
$ helm upgrade demo .
```

To remove:

```sh
$ helm uninstall demo
```
