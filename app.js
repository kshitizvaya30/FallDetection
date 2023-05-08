const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendSMS(data){
    console.log("inside");
    client.messages.create({
        body: data,
        from: '+12543848026',
        to: "+917976630412"
    }).then(message => console.log(message))
    .catch(err => console.log(err));
}

app.get("/api/fall_detected", (req, res) => {
    sendSMS('Please Check User has Fallen , Location : http://surl.li/gwmil');
    res.send("SUCCESS");
});

app.get("/api/low_heart_rate", (req, res) => {
    sendSMS('Please check the heart rate of user , It is LOW');
    res.send("SUCCESS");
});


app.get("/api/high_heart_rate", (req, res) => {
    sendSMS('Please check the heart rate of user , It is HIGH');
    res.send("SUCCESS");
});

app.get("/api/low_spo2", (req, res) => {
    sendSMS('Please check the SpO2 of user , It is LOW');
    res.send("SUCCESS");
});

app.get("/api/high_sp02", (req, res) => {
    sendSMS('Please check the SpO2 of user , It is HIGH');
    res.send("SUCCESS");
});




const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
