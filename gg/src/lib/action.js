export const postData = async (v) => {
    const res = await fetch(`${process.env.SERVER_URL}/courses`,{
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    console.log(data)
    return data
}