const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    console.log("Received request:", req.body);
    res.json({
        fulfillmentText: "안녕하세요! Dialogflow와 연결되었습니다."
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
