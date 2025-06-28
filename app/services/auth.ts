// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const BASE_URL = "http://localhost:4000/api";

export const register = async(data: {
    name : string,
    email: string,
    password: string,
    role? : "ADMIN" | "TEACHER" | "PARENT"
}) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
    })
    return res.json()
}

export const login = async(data: {
    email: string,
    password: string
}) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data),
    });
    return res.json()
}