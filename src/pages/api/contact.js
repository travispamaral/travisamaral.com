let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
})

export default function handler(req, res) {
  const mailData = {
    from: 'contact@travisamaral.com',
    to: process.env.GMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: (
      <div>
        <p>Name: {req.body.name}</p>
        <p>Email: {req.body.email}</p>
        <p>{req.body.message}</p>
      </div>
    ),
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })

  res.status(200)
}
