const nodemailer = require('nodemailer')
const faunadb = require('faunadb'),
  q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

let transporter = nodemailer.createTransport({
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
    const { slug, rating, name, description } = JSON.parse(event.body)

    if (!slug || !rating || !name || !description) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid input' }),
      }
    }

    const { ref, data: review } = await client.query(
      q.Create(q.Collection('reviews'), {
        data: {
          slug,
          rating,
          name,
          description,
          approved: false,
          date: Date.now(),
        },
      })
    )

    await transporter.sendMail({
      from: `"Panthers Painting" <admin@pantherspainting.com>`,
      to: 'admin@pantherspainting.com',
      subject: `New review posted under ${review.slug} by ${review.name}`,
      html: `Review ${ref.id}: 
        <a href="https://pantherspainting.com/.netlify/functions/view-review?ref=${ref.id}">View</a> 
        <a href="https://pantherspainting.com/.netlify/functions/approve-review?ref=${ref.id}">Approve</a>`,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Review created.' }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
