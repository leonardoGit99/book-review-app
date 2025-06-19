import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { id } from 'zod/v4/locales';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  try {
    // Verify if the user exist in db
    const userExistence = await pool.query(`
      SELECT id 
      FROM users 
      WHERE email=$1;
      `,
      [email]
    )
    if (userExistence.rows.length > 0) {
      return NextResponse.json({
        error: 'User already exists'
      }, {
        status: 400
      })
    }

    // Hashing the passwd
    const hashedPasswd = await bcrypt.hash(password, 10);

    // Add user to db
    const result = await pool.query(`
      INSERT INTO users (name, email, password) 
      VALUES ($1, $2, $3) 
      RETURNING id, name;
      `,
      [name, email, hashedPasswd]
    )

    const user = result.rows[0];

    // Create jwt
    const token = jwt.sign({
      id: user.id
    },
      process.env.JWT_SECRET!,
      {
        expiresIn: 60000
      }
    );

    console.log(token);


    return NextResponse.json({
      message: "User created",
      data: {
        id: result.rows[0].id,
        name: result.rows[0].name
      }
    }, {
      status: 201
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error"
    }, {
      status: 500
    })
  }
}