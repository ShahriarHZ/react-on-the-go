// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const CountriesPromise=fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json());



function App() {


  return (
    <>
  
<Suspense fallback={<p>Page is Loading...</p>}>
  <Countries CountriesPromise={CountriesPromise}>

  </Countries>
</Suspense>
    
    </>
  )
}

export default App
