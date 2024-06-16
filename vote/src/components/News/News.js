import React from 'react';

const News = () => {
  return (
    <div>
      <h2>Latest News</h2>
      <iframe
        title="FiveThirtyEight Polls"
        src="https://projects.fivethirtyeight.com/polls/president-general/2024/"
        width="100%"
        height="600px"
        frameBorder="0"
      />
    </div>
  );
};

export default News;
