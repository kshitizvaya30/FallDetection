const express = require("express");
const twilio = require("twilio");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const TWILIO_SID = "AC9a7d6ae4a1a9566e230dcd64adc603e2";
const TWILIO_AUTH_TOKEN = "553856d57d87682e9638b7dfdb21a6fd";
const TWILIO_PHONE_NUMBER = "+917976630412";

function sendSMS(data){
    const client = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
    return client.messages
    .create({
        body: data,
        from: '+12543848026',
        to: TWILIO_PHONE_NUMBER
    }).then(message => console.log(message))
    .catch(err => console.log(err));

}

app.get("/api/fall_detected", (req, res) => {
    sendSMS('Please Check User has Fallen , Location : ');
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
