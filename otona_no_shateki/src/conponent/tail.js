import React, {useState, useEffect} from 'react';

const Tail = () =>{

  const child = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  
  const [array , setArray] = useState([]);

  const doChange = (i) => {
      let copyArray = [...array]
      copyArray.push(i)
      setArray(copyArray)
  }


  
  

  return(
    <React.Fragment>
      <div className='content_palent' id='target'>
        {child.map((i) => (
          <button key={i}　  className={array.includes(i) ? 'off':'on'} onClick={() =>doChange(i)}></button>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tail;