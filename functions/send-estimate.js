const parser = require('lambda-multipart-parser')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_TLS == 'true' ? true : false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

exports.handler = async event => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      address,
      street,
      city,
      zipcode,
      state,
      description,
      files,
    } = await parser.parse(event)

    if (
      !firstname ||
      !lastname ||
      !phone ||
      !email ||
      !address ||
      !street ||
      !city ||
      !zipcode ||
      !state ||
      !description
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    await transporter.sendMail({
      from: `"Panthers Painting" <admin@pantherspainting.com>`,
      to: 'admin@pantherspainting.com',
      replyTo: email,
      subject: `New quotation request by ${firstname}`,
      text: `
        First Name: ${firstname}\n
        Last Name: ${lastname}\n
        Phone: ${phone}\n
        Email: ${email}\n
        Address: ${address}\n
        Street: ${street}\n
        City: ${city}\n
        Zip Code: ${zipcode}\n
        State: ${state}\n
        Description: ${description}
      `,
      attachments: files,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent.' }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
