export const baseLocalUrl: string =
    process.env.NEXT_PUBLIC_API_URL ??
    (typeof window === 'undefined'
        ? 'http://localhost:3000/api'
        : '/api');



export const headers: Record<string, string> = {
    "Content-Type": "application/json",
}