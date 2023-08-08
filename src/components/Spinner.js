import React from 'react'
import loading from './loading.gif'
// import loading from './ezgif-1-d7b8812c00.gif'
const Spinner = ()=>{
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" />
      </div>
    )
}
export default Spinner