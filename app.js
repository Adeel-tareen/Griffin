import express from "express";
const app = express();
import fetch from "node-fetch";

app.use("/api", (req, res) => {
  let location = req.query.location;
  let endpoint = `https://api.yelp.com/v3/businesses/search?location=${location}&term=parking`
  var requestOptions = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer AMBwX8qzbaXK2HDmSX5Wouig1X-IKdI_YhCCyOmyiX6tjEwHO4Ycls0KPBMNRNTO89ttt37XWrk4aGETcsqQDUuXlHLC-TnJzJeR9hKKmb9qpaN4RQpDioRAygaNYnYx",
    },
  };

  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => res.json(result).status(200))
    .catch((error) => console.log("error", error));
});

app.use(express.static("public"));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Application is up at localhost:${PORT}`);
});
