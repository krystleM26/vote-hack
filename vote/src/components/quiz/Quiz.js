import React, {useState, useEffect} from 'react'
import './quiz.css'

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuiz = () => {
            const url = 'https://www.britannica.com/quiz/voting-for-the-us-president';

            fetch(url)
             .then(response => response.text())
             .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const questions = doc.querySelectorAll('eb-16RLBn'); // Update selector as needed
                const quizData = [];

                questions.forEach(questionElement => {
                    const questionText = questionElement.querySelector('eb-16RLBn.text').textContent.trim()
                    const options = [...questionElement.querySelectorAll('eb-16RLBn.strong')].map(option => option.textContent.trim());
                    quizData.push({question: questionText, options });
                })
                setQuiz(quizData)
             })
             .catch(error => {
                console.error('Error fetching the quiz', error);
                setError('Failed to fetch quiz data.')
             })
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
        <button onClick={nextQuestion}>Next</button>

        <div className='index'> {currentQuestionIndex +1} of {quiz.length} questions</div>
    </div>
     
      
        

   
  )
}

export default Quiz