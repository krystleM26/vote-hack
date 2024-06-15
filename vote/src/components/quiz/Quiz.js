import React from 'react'
import './quiz.css'

const Quiz = () => {
  return (
    <div className='quiz-container'>
           <h1>Quiz</h1>
           <hr />
        
            <h2>1. What party does the US president belong to?</h2>
            <div className='answers'>
            <ul>
                <li>Democrat</li>
                <li>Republican</li>
                <li>Green Party</li>
                <li>Coachella</li>

            </ul>
        </div>
        <button> Next </button>

        <div className='index'> 1 of 5 questions</div>
    </div>
     
      
        

   
  )
}

export default Quiz