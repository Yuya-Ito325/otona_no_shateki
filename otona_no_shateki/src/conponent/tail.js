import React, {useState,} from 'react';

const Tail = () =>{

  const [contentChild, setContentChild ]= useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);



  const doAction = (index) =>{
    let copyContentChild = [...contentChild]
    
  }

  return(
    <React.Fragment>
      <div className='content_palent'>
        {contentChild.map((i) => (
          <button key={i} className={contentChild.includes('i') ? 'on' : 'off'} onClick={doAction(i)}></button>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tail;
