
## Griffin

### Installation
In the folder, run the following on the terminal:

```bash
npm install
```

This will install all the required dependencies. For starting the server, run the following:

```bash
npm run start
```

This will start the application on port 3000. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Conclusion

For this Task, I have to configure a node server in order to make request to Yelp API Server. Requests made from the frontend are blocked by Yelp and giving me CORS error. So, I created a server and a route(/api) which takes a location as a query parameter and send the results back to the frontend. Public folder contains the frontend, developed in Vanilla JS, and served it through express.
