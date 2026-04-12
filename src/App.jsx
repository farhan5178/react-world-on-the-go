
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
import Country from './Components/Country/Country'
// for fetch data 
const countriesPromise=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())





function App() {

  return (
    <>
     <h1>React world On the go </h1>
     <Suspense fallback={<p> Nadir vai loding .......</p>}> 
           <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense>
     
    </>
  )
}

export default App
