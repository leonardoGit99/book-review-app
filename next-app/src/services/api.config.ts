export const baseLocalUrl: string =
    process.env.NEXT_PUBLIC_API_URL ??
    (typeof window === 'undefined'
        ? 'https://readsoulapp.vercel.app/api'
        : '/api');



export const headers: Record<string, string> = {
    "Content-Type": "application/json",
}