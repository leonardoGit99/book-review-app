import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const reviewId = params.id;

  try {
    const result = await pool.query(
      `DELETE FROM reviews WHERE id = $1 RETURNING *`,
      [reviewId]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Review deleted' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
