import pool from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT r.id, r.book_title, r.rating, r.review, r.mood, r.created_at 
      FROM reviews r
      JOIN users u ON u.id=r.user_id
      ORDER BY r.created_at DESC;
      `);

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
