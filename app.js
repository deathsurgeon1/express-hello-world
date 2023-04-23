const express = require('express');
const nodemailer = require('nodemailer');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

// Set up a route for sending emails
app.post('/send-email', (req, res) => {
  const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "technologies.moweb@gmail.com",
        pass: "xoqsnddjimdudedj"
        }
    });
    const mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.title
    };
    client.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
        }
      });
});

app.get('/', (req, res) => {
  res.send('Success');
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Export the Express API
module.exports = app;
