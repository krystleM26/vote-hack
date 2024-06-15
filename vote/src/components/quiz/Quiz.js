import React, {useState, useEffect} from 'react'
import './quiz.css'

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch('http://localhost:4000/quiz', {
                    headers: {
                        'Content-Type': 'text/html',
                    }
                });
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text()
                console.log('html', html);

                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html')
            
            


            

                const questions = doc.querySelectorAll('.quiz-question'); // Update selector as needed
                const quizData = [];

                questions.forEach(questionElement => {
                    const questionText = questionElement.querySelector('h2').textContent.trim()
                    const options = [...questionElement.querySelectorAll('li')].map(option => option.textContent.trim());
                    quizData.push({question: questionText, options });
                })
                setQuiz(quizData)
             }
              catch(error) {
                console.error('Error fetching the quiz', error);
                setError('Failed to fetch quiz data.')
             }
        };
        fetchQuiz();
    }, []);

    const nextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quiz.length);
    };

    if (error) {
        return <div className='quiz-container'><p>{error}</p></div>
    }
    const currentQuestion = quiz[currentQuestionIndex];
    
    if(!currentQuestion) {
        return <div className='quiz-container'><p>{error}</p></div>
    }
    if(quiz.length === 0) {
        return <div className='quiz-container'><p>Loading quiz...</p></div>
    }

  return (
    <div className='quiz-container'>
        <div className='quiz-question'>

           <h1>Quiz</h1>
           <hr />
        
            <h2>{currentQuestionIndex + 1}, {currentQuestion.question}</h2>
            <div className='answers'>
            <ul>
              {currentQuestion.options.map((option, index) => (
                <li key={index}>{option}</li>
                
                ))}
            </ul>
            </div>

           
        </div>
        <button onClick={nextQuestion}>Next</button>

        <div className='index'> {currentQuestionIndex +1} of {quiz.length} questions</div>
    </div>
     
      
        

   
  )
}

export default Quiz