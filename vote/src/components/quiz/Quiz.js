import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify';
import style from './quiz.css'


const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeQuestion, setActiveQuestion] = useState(0);
    

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get('http://localhost:4000/quiz', {
                    headers: {
                        'Content-Type': 'text/html',
                    },
                    responseType: 'text'
                });

                const html = response.data
                const sanitizedHtml = DOMPurify.sanitize(html)

                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // // Select the specific element
                const specificElement = doc.querySelector('#content .ui-hidden dl');
                // console.log(specificElement)

                // Select all <dl> elements
                const dls = doc.querySelectorAll('#content .ui-hidden dl');
                console.log('dls',dls)

                // // Initialize an empty array to hold the questions and answers
                const qaArray = [];

                // Loop through each <dl> element
                dls.forEach(dl => {
                // Get the <dt> and <dd> elements
                const dt = dl.querySelector('dt');
                const dd = dl.querySelector('dd');

                // Extract the text content and remove the "Question: " and "Answer: " prefixes
                const question = dt.textContent.replace('Question: ', '').trim();
                const answer = dd.textContent.replace('Answer: ', '').trim();

                // Add the question and answer to the array as an object
                qaArray.push({ question, answer });
                });
                setQuiz(qaArray)


                setLoading(false)

            } catch (error) {
                console.error('Error fetching the quiz', error);
                setError('Failed to fetch quiz data.');
                setLoading(false);
            }
        };
            


               

               
        fetchQuiz();
       
    }, []);      

    if (loading) {
        return <div className=''><p>Loading Quiz...</p></div>
    }
    if(error){
        return <div className='quiz-container'><p>{error}</p></div>
    }

   

  console.log('quizState',quiz)

  return (
    <div className='quiz-container'>
        <button onClick={() => setActiveQuestion(prev => prev - 1 < 0 ? 0 : prev - 1)}>Prev Question</button>
         {quiz && quiz.map((quiz,index) => {
            return <div className={`question ${activeQuestion === index ? 'activeQuestion' : null}`}>
                <span>Question: {quiz.question}</span>  
                <div> <span>Answer: {quiz.answer}</span></div> 
            </div>
            
         })}
         
        <button onClick={() => setActiveQuestion(prev => prev + 1 > quiz.length - 1 ? prev : prev + 1)} >Next Question</button>
    </div>
  )
}

export default Quiz