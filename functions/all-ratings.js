const faunadb = require('faunadb'),
  q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async event => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 410,
      body: JSON.stringify({ message: 'Unsupported Request Method' }),
    }
  }

  try {
    const { data: ratings } = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('approved_ratings'), true)),
        q.Lambda('X', q.Get(q.Var('X')))
      )
    )

    return {
      statusCode: 200,
      body: JSON.stringify(ratings.map(r => r.data)),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
