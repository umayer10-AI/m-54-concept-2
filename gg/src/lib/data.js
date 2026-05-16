export const userData = async() => {
    const res = await fetch(`http://localhost:5000/courses`)
    return res.json()
}

export const userIdData = async(id) => {
    const res = await fetch(`http://localhost:5000/courses/${id}`)
    return res.json()
}