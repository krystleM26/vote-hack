// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import './quiz.css';

// const Quiz = () => {
//   const [quiz, setQuiz] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [userAnswer, setUserAnswer] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/quiz', {
//           headers: {
//             'Content-Type': 'text/html',
//           },
//           responseType: 'text',
//         });

//         const html = response.data;
//         const sanitizedHtml = DOMPurify.sanitize(html);

//         const parser = new DOMParser();
//         const doc = parser.parseFromString(sanitizedHtml, 'text/html');

//         const dls = doc.querySelectorAll('.ui-hidden dl');

//         const qaArray = [];

//         dls.forEach((dl) => {
//           const dt = dl.querySelector('dt');
//           const dd = dl.querySelector('dd');

//           const question = dt.textContent.replace('Question: ', '').trim();
//           const answer = dd.textContent.replace('Answer: ', '').trim();

//           const choices = [answer, 'Option 2', 'Option 3', 'Option 4'].sort(() => Math.random() - 0.5);

//           qaArray.push({ question, answer, choices });
//         });

//         setQuiz(qaArray);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching the quiz', error);
//         setError('Failed to fetch quiz data.');
//         setLoading(false);
//       }
//     };

//     fetchQuiz();
//   }, []);

//   const handleChoiceSelection = (choice) => {
//     if (isAnswered) return;

//     setUserAnswer(choice);
//     setIsAnswered(true);
//     if (choice === quiz[activeQuestion].answer) {
//       setScore(score + 1);
//     }
//   };

//   const handleNextQuestion = () => {
//     setActiveQuestion((prev) => (prev + 1 < quiz.length ? prev + 1 : prev));
//     setUserAnswer(null);
//     setIsAnswered(false);
//   };

//   const handlePrevQuestion = () => {
//     setActiveQuestion((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//     setUserAnswer(null);
//     setIsAnswered(false);
//   };

//   if (loading) {
//     return (
//       <div className="">
//         <p>Loading Quiz...</p>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="quiz-container">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-container">
//       <h1>Quiz</h1>
//       <div className="navigation-buttons">
//         <button onClick={handlePrevQuestion} disabled={activeQuestion === 0}>
//           Prev Question
//         </button>
//         <button onClick={handleNextQuestion} disabled={activeQuestion === quiz.length - 1}>
//           Next Question
//         </button>
//       </div>
//       <div className={`question ${isAnswered ? 'answered' : ''}`}>
//         <span>Question: {quiz[activeQuestion].question}</span>
//         <div className="choices">
//           {quiz[activeQuestion].choices.map((choice, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleChoiceSelection(choice)}
//               disabled={isAnswered}
//             >
//               {choice}
//             </button>
//           ))}
//         </div>
//         {isAnswered && (
//           <div className="answer">
//             <span>
//               {userAnswer === quiz[activeQuestion].answer ? 'Correct!' : `Incorrect! The correct answer is ${quiz[activeQuestion].answer}.`}
//             </span>
//           </div>
//         )}
//       </div>
//       <div className="score">
//         <span>Score: {score}/{quiz.length}</span>
//       </div>
//     </div>
//   );
// };

// export default Quiz;
import React from 'react';

const Quiz = () => {
  return (
    <div>
      <h2>Take the Quiz</h2>
      <iframe
        title="Quiz"
        src="https://www.britannica.com/quiz/voting-for-the-us-president"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Quiz;
