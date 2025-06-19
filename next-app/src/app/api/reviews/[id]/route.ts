import pool from '@/lib/db'
import { NextRequest } from 'next/server'

// Delete review
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const reviewId = params.id;
  try {
    const result = await pool.query(`
      DELETE 
      FROM reviews 
      WHERE id = $1 
      RETURNING *
      `,
      [reviewId]
    )

    if (result.rowCount === 0) {
      return new Response(JSON.stringify({ error: 'Review not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ message: 'Review deleted' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error deleting review:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

