export const userData = async() => {
    const res = await fetch(`${process.env.MY_URL}/courses`)
    return res.json()
}

export const userIdData = async(id,token) => {
    const res = await fetch(`${process.env.MY_URL}/courses/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}

export const featureData = async () => {
    const res = await fetch(`${process.env.MY_URL}/feature`)
    return res.json()
}