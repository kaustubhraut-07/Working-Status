import React from 'react'

async function taketime(){
  await  new Promise((resolve, reject)=>
     setTimeout(resolve, 3000)
  
  )
}

async function page() {
  await taketime();
  return (
    <div>
      About Page
    </div>
  )
}

export default page
