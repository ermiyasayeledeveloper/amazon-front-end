import React from 'react'

import Header from '../Header/Header'
import Lowerheader from '../Header/Lowerheader'

function Layout({children}) {
  return (
    <div>
      <Header />
      <Lowerheader />
      {children}
    </div>
  )
}

export default Layout
