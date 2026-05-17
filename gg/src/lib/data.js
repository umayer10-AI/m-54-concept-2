export const userData = async() => {
    const res = await fetch(`${process.env.MY_URL}/courses`)
    return res.json()
}

export const userIdData = async(id) => {
    const res = await fetch(`${process.env.MY_URL}/courses/${id}`)
    return res.json()
}

export const featureData = async () => {
    const res = await fetch(`${process.env.MY_URL}/feature`)
    return res.json()
}