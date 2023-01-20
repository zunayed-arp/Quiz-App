import React from 'react'
import '../styles/Main.css';
import Questoins from './Questoins';

export default function Quiz() {

  
  const onNext = () =>{
    console.log('On next click')
  }

  const onPrev = () =>{
    console.log('on Previous')
  }


  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    {/**display questions */}

    <Questoins></Questoins>


    <div className="grid">
      <button className="btn prev" onClick={onPrev}>Prev</button>
      <button className="btn next" onClick={onNext}>Next</button>
    </div>

    </div>
  )
}
