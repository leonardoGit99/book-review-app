import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: reviewId } = await context.params;

  try {
    const result = await pool.query(
      `DELETE FROM reviews WHERE id = $1 RETURNING *`,
      [reviewId]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Review deleted' });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
