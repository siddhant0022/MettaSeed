import React from 'react'
import Globe3D from '../components/mvpblocks/3dglobe'
import Feature3 from '../components/mvpblocks/feature-3'
import FooterGlow from '../components/mvpblocks/footer'
import Faq2 from '../components/mvpblocks/faq'

function Home() {
  return (
    <div>
      
    <div className='bg-[#0a0613]'>
        <Globe3D/>
        <Feature3/>
        <Faq2/>
        <FooterGlow/>
    
        </div>

    </div>
  )
}

export default Home