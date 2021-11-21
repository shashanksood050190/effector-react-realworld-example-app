# ![Effector + React Example App](project-logo.png)

[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)

> ### [Effector](https://effector.now.sh) + React codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

### [Demo](https://mg901.github.io/effector-react-realworld-example-app)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

Originally created for this [GH issue](https://github.com/mg901/effector-react-realworld-example-app/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc). The codebase is now feature complete; please submit bug fixes via pull requests & feedback via issues.

## Getting started

You can view a live demo over at

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

### Making requests to the backend API

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/api) which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the [main RealWorld repo](https://github.com/gothinkster/realworld).

If you want to change the API URL to a local server, simply edit `src/api.ts` and change `API_ROOT` to the local server's URL (i.e. `http://localhost:3000/api`)

## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at https://mg901.github.io/effector-react-realworld-example-app

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU\* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR\*D Comments on articles
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: / )
  - List of articles from Your Feed (URL : /your-feed)
    - Pagination for list of articles
  - List of articles from Global Feed (URL : /global-feed)
    - Pagination for list of articles
  - List of Tags (URL: /feed-by-tag)
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /login, /register )
  - Use JWT (store the token in localStorage)
- Settings page (URL: /settings )
- Editor page to create/edit articles (URL: /editor, /editor/:slug )
- Article page (URL: /article/, /article/:slug )
  - Delete article button (only shown to article's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)
- Profile page (URL: /@username, /@username/favorites )
  - Show basic user info
  - List of articles populated from author's created articles or author's favorited articles

<br />

[![Brought to you by Thinkster](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](https://thinkster.io)

# Running application via npm on local machine
- To install all packages from package.json: 
  `npm install --legacy-peer-deps`
- To start the web server: 
  `npm start`

# Running application via docker
- To build the docker image for our application: 
  `docker build --no-cache -t  realworld-app .`
- To run the docker container:
  `docker run --name realworld-app -d -p 4100:4100 realworld-app:latest`
- To find docker desktop ip address: 
  `C:\Windows\System32\drivers\etc\hosts`
- To view the application on browser: 
  `http://192.168.1.20:4100/`

# Running application via docker  compose
- To run the docker-compose.yml: 
  `docker-compose up`

# Converting docker-compose file to kubernetes 
- To download Kompose:
  `curl -L https://github.com/kubernetes/kompose/releases/download/v1.24.0/kompose-windows-amd64.exe -o kompose.exe`
- To convert docker-compose file to kubernetes resources automatically:
  `Kompose convert`

# Minikube
- To start minikube: 
  `minikube start`

# Kubernetes
https://medium.com/swlh/how-to-run-locally-built-docker-images-in-kubernetes-b28fbc32cc1d

- To switch docker images regisrty to minikube registry: 
  `minikube docker-env`
  `@FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env') DO @%i`

- Now build image again: 
  `docker build --no-cache -t  realworld-app .`

- To create kubernetes deployment: 
  `kubectl apply -f web-deployment.yaml`
- To create kubernetes service: 
  `kubectl apply -f web-service.yaml`
- To reach the service: 
  `minikube service realworld-app` 

# Helm
- To create Helm Chart
  `helm create realworld-app`

- Verify YAML files generated
  `tree realworld-app`

- Update chart.yaml
  set 
    appVersion: "latest"

- Update deployment.yaml
  set 
    containerPort : 4100

- Update values.yaml
  set 
    repository: realworld-app
  set 
    type: NodePort
    port: 4100  

- Verify Conversion of YAMLs
  `helm template realworld-app`

- To find any syntactical errors  
  `helm lint realworld-app`

- To Run/Install Helm Chart
  `helm install realworld-app-installation realworld-app`

- To upgrade Helm Chart
  `helm upgrade realworld-app-installation realworld-app`

- To uninstall Helm Chart
  `helm uninstall realworld-app-installation realworld-app`
