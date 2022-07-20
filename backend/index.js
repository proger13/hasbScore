require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const app = express()
const nodemailer = require("nodemailer");

app.use(cors())
app.use(express.json())

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
  });

app.post('/sendmail', async (req, res) => {
    const { body } = req;
    const { values, mbasket } = body;
    let html = ''
    html += `<h3>${values.firstName}</h3>`
    html += `<h3>${values.lastName}</h3>`
    html += '<table>'
    let cost = 0
    mbasket.forEach(product => {
      html += '<tr>';

      html += `<td style="border: 1px solid black">${product.id}</td>`
      html += `<td style="border: 1px solid black">${product.title}</td>`
      html += `<td style="border: 1px solid black">${product.price}</td>`
      html += `<td style="border: 1px solid black">${product.count}</td>`
      cost += product.price * product.count

      html += '</tr>';
    })
    html += '</table>'
    
    html += `<h1>${cost} рублей</h1>`
    const info = await transporter.sendMail({
        from: '"Абдулкадыр Магомедов" <abdulkadirmagomedov@gmail.com>', // sender address
        to: "gerry.fisherr@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "А девочки будут?", // plain text body
        html, // html body
    });
    console.log(info)
    return res.send()
})

app.listen(process.env.PORT, () => console.log(`started on http://localhost:${process.env.PORT}`))