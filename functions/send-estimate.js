const parser = require('lambda-multipart-parser')
// const Busboy = require('busboy')
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

// const parseFormData = event =>
//   new Promise((resolve, reject) => {
//     const fields = {}
//     const files = []

//     const busboy = new Busboy({
//       headers: {
//         ...event.headers,
//         'content-type':
//           event.headers['Content-Type'] || event.headers['content-type'],
//       },
//     })

//     busboy.on('field', (fieldName, value) => {
//       fields[fieldName] = value
//     })

//     busboy.on('file', (fieldName, file, filename, encoding, mimetype) => {
//       file.on('data', data => {
//         files.push({
//           content: data,
//           filename: filename,
//           contentType: mimetype,
//         })
//       })
//     })

//     busboy.on('error', error => reject(`Parse error: ${error}`))

//     busboy.on('finish', () => {
//       console.log({ ...fields, files })
//       resolve({ ...fields, files })
//     })

//     busboy.write(event.body, event.isBase64Encoded ? 'base64' : 'binary')

//     busboy.end()
//   })

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
    } = await parser.parse(event) //await parseFormData(event) //

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
    console.log(error.toString())
    return { statusCode: 500, body: error.toString() }
  }
}
