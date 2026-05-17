import { redirect } from "next/navigation"

export const postData = async (v,t) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`,{
        method: "POST",
        headers: {
            'content-type':'application/json',
            authorization: `Bearer ${t?.token}`
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        redirect('/courses')
    }
    return data
}