#! /bin/bash

docker run -d --name postgres -e POSTGRES_DB=three-tier-app-db -e POSTGRES_PASSWORD=three-tier-app-demo -p 5432:5432 postgres