import React, { useEffect, useState } from 'react';
import data from '../database/data';

export default function Questoins() {

    const [checked,setChecked]=useState(undefined);

    const question = data[0]

    useEffect(()=>{
        console.log(question)
    });


    const onSelect = () =>{
        // setChecked(true)
        console.log('radio button change')
    };


  return (
    <div className='questions'>
        <h2 className="text-light"> Simple Question 1</h2>
        <ul key={question.id}>
            <li>
                <input
                type="radio"
                value={false}
                name="options"
                id="q1-option"
                onChange={onSelect()}
                />
                <label htmlFor="q1-option" className="text-primary">options</label>
                <div className="check checked"></div>
            </li>
        </ul>
    </div>
  )
}
