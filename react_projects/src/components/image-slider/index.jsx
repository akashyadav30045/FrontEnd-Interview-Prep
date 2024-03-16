import React, { useState } from 'react'
const list=[
	{
		id:1,
		src:"https://images.unsplash.com/photo-1618042164219-62c820f10723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
		title:"first"
	},
	{
		id:2,
		src:"https://images.unsplash.com/photo-1560449606-4d10d5b87c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
		title:"second"
	},
	{
		id:3,
		src:"https://images.unsplash.com/photo-1633386008252-f2d3ee603dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
		title:"third"
	}]

const ImageSlider = () => {
  const[id,setid]=useState(0)
  const handlebutton = () => {
     
      if(id===list.length-1){
        setid(0)
      }else{
        setid(id+1)
      }
    }
    const handlePrevbutton = () => {
     
      if(id===0){
        setid(0)
      }else{
        setid(id-1)
      }
    }

    
  return (
    <div>

       
       }
        <img 
        src={list[id].src}
        alt="" 
        width={200}
        height={200}/>
        <button  onClick={handlebutton}>Next</button>
        <button onClick={handlePrevbutton}>Prev</button>
    </div>
  )
}

export default ImageSlider
