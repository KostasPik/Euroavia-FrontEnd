import React from 'react'
import "@google/model-viewer/dist/model-viewer";
import './Atlas.css'
import { Helmet } from "react-helmet-async"


export default function Atlas() {
  return (

<>
<Helmet>
      <meta property="description" content={'EUROAVIA Athens - ATLAS'} data-rh="true"/>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={'EUROAVIA Athens - ATLAS'} data-rh="true"/>
      <meta property="og:description" data-rh="true" content={'EUROAVIA Athens - ATLAS'} />
      <meta property="og:image" content="https://euroavia.netlify.app/euroavia_ath_logo.png" data-rh="true"/>
      <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
      <meta property="og:image:alt" content="Euroavia Photo"data-rh="true"/>
      <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
      <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
      <meta name="twitter:title" content={'EUROAVIA Athens - ATLAS'} data-rh="true"/>
      <meta name="twitter:description" data-rh="true"  content={'EUROAVIA Athens - ATLAS'} />
      <meta name="twitter:image" content="https://euroavia.netlify.app/euroavia_ath_logo.png" data-rh="true"/>
      <title>{'EUROAVIA Athens - ATLAS'}</title>
</Helmet>

    
    <div className='model-page-3d'>
        <div id="model-3d">
        <model-viewer
            src="/atlas.glb"
            ios-src=""
            // poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
            alt="EUROAVIA Athens ATLAS 3d model"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            auto-rotate-delay="1000"
            ar
        ></model-viewer>
        </div>
    </div>

    </>
  )
}
