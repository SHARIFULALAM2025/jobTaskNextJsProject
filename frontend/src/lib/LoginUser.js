import axios from "axios"

export const loginUser = async (credentials) => {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/login`,
            credentials
        )
        return res.data
    } catch (err) {
        console.error('Login error:', err.response?.data || err.message)
        return null
    }
}
