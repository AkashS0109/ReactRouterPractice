import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
  
function Github() {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(res => res.json())
    //         .then(info => {
    //             console.log(info);
    //             setData(info)
    //         })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4 '>
            Github Followers:{data.followers}
            <div className='flex justify-center'>
                <img className='' src={data.avatar_url} alt='img' width={300} />
            </div>

        </div>
    )
}

export default Github
export const githubInfoLoader =async()=>{
 const response= await fetch('https://api.github.com/users/hiteshchoudhary')
 return response.json()

}