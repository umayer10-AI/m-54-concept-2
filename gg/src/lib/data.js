export const userData = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/courses`)
    return res.json()
}

export const userIdData = async(id) => {
    const res = await fetch(`${process.env.SERVER_URL}/courses/${id}`)
    return res.json()
}