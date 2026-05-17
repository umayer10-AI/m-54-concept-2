export const userData = async(search) => {
    const res = await fetch(`${process.env.MY_URL}/courses?search=${search.search}`)
    console.log(search)
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
export const getbookingData = async () => {
    const res = await fetch(`http://localhost:5000/booking`)
    return res.json()
}