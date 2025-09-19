import React from 'react'
import {FadeLoader} from 'react-spinners'

function Loader() {
  return (
    <div style={{display: "flex", alignItems:'center', justifyContent:'center', height:'50vh'}}>
      <FadeLoader color="rgba(59, 163, 189, 1)" />
    </div>
  )
}

export default Loader

