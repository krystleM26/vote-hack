import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify';
//


const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

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

                setQuiz(sanitizedHtml)
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

   

  

  return (
    <div className='quiz-container'>
          <div  dangerouslySetInnerHTML={{ __html: quiz }} />
         
    </div>
  )
}

export default Quiz