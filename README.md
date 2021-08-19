# Docker Backend System Design Challenge

For this mini (but powerful) project, I took the below steps to put my backend skills to the test and learned new things along the way.
Using Node.js, Docker, Google Cloud and Kubernetes, I created a simple backend system that uses the Poke API to make API calls, store data in a non-relational database (Mongo DB) and authenticate requests with JWT. The application follows an MVC architecture with a docker-based API proxy for port-forwarding and cloud build triggers for pipeline deployments. The app is deployed through Kubernetes on an nginx server.

1. Take an existing API (used the poke-api for this)
2. Build a docker-based API proxy around it.
3. Add a RESTful database resource to that API supplementing the original (used Mongo).
4. Add HTTP authentication to it (JWT).
5. Deploy the app (Google Cloud build trigger and Kubernetes cluster).
6. Load-test it (done using K6)
7. Build a cache strategy and show how it improves performance of the system.


## How to Run
visit http://34.134.162.188/ to access the application

## Sample Endpoints
```
/ - retrieves a list of every Pokemon in the database
```
```
/Pokemon/:name retrieves the single queried Pokemon
```
