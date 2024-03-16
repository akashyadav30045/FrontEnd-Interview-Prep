import React, { useState } from 'react'

const GenerateRandomColor = () => {
  const[typeofColor,setTypeofColor]=useState('');
  const[color,setcolor]=useState("#000000");
  return (
    <div
    style={{
      width:"100vw",
      height:"100vh",
      background:color,
    }
    } 
    >
      <button>Create Hex COlor</button>
      <button>Generate RGB</button>
      <button>Genearte Random</button>
    </div>
  )
}

export default GenerateRandomColor