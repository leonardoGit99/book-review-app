import pool from '@/lib/db'

// Get all reviews
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

// Create a review
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, bookTitle, rating, review, mood } = body;

    const result = await pool.query(`
      INSERT INTO reviews (user_id, book_title, rating, review, mood) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
      `,
      [userId, bookTitle, rating, review, mood]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'DB error' }), { status: 500 })
  }
}
