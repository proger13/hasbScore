const express = require('express')
const cors = require('cors')
const app = express()
const nodemailer = require("nodemailer");

app.use(cors())

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'amal.abdullaev.96@gmail.com',
      pass: 'mqmxvxqjkyqmoslz'
    },
  });

app.get('/sendmail', async (req, res) => {
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <amal.abdullaev.96@gmail.com>', // sender address
        to: "gerry.fisherr@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log(info)
    return res.send()
})

app.listen(5000, () => console.log('started on localhost:5000'))