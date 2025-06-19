import pool from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM reviews;')

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('DB error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
