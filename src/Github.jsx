import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setdata] = useState(null)
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(  response => response.json() )
      .then(data=>setdata(data))
      .catch(error => console.error('Error fetching GitHub data:', error))
      }, [])

  if (!data) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-xl">
        Loading GitHub data...
      </div>
      )
  }
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Follower : {data.followers}
      <img src={data.avatar_url} alt='Git Picture' width={200}   />
    </div>
  )
}

export default Github
