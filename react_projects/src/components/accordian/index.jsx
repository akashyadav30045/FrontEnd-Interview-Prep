import React, { useState } from 'react';
import data from './data';

const Accordian = () => {
  const[selected,setSelected]=useState("");
  const handleSingleCollection = (getid) => {
    // console.log(getid);
    setSelected(getid===selected?null:getid)
  }
  return (
    <div className='wrapper'>
      <button >EnableMulti</button>
      <div className="accordian">
        {
          data && data.length > 0 ? (
            data.map((dataitem, index) => { // Added index as a parameter to the map function
              return (
                <div className="item" key={index}> {/* Added key prop to each dynamically generated element */}
                  <div className="title">
                    <h3>{dataitem.question}</h3>
                    <span onClick={()=>handleSingleCollection(dataitem.id)}>+</span>
                    {
                      selected === dataitem.id ?
                      (
                        <div>{dataitem.answer}</div>
                      ): null
                    }
                  </div>
                </div>
              );
            })
          ) : 
          (
            <div>No Data Found</div>
          )
        }
      </div>
    </div>
  );
}

export default Accordian;
