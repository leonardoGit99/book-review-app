import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    //Compare email existence in db
    const userExistence = await pool.query(`
      SELECT id, name, password
      FROM users
      WHERE email=$1
      `, [email]);
    if (userExistence.rows.length === 0) {
      return NextResponse.json({
        message: "Invalid Email"
      }, {
        status: 401
      });
    }

    const user = userExistence.rows[0];


    //Compare passwd (bd) with bcrypt
    const isPasswdValid = await bcrypt.compare(password, user.password);
    if (!isPasswdValid) {
      return NextResponse.json({
        message: "Invalid Password"
      }, {
        status: 401
      })
    }


    // Create jwt with the id and name
    const token = jwt.sign(
      {
        userId: user.id,
        name: user.name
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1h'
      }
    )


    // Create response with cookie httpOnly
    const response = NextResponse.json({
      message: "Login successfuly"
    }, {
      status: 200
    })

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
    });


    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({
      message: "Internal Server Error"
    }, {
      status: 500
    })
  }
}