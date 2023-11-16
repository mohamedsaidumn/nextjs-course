import { Fragment, useState } from "react";
import { extractFeedback, buildFeedbackPath } from "../api/feedback";

function FeedbackPage({ data }) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    console.log("i am in loadFeedbackHandler");
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`data is ${data.feedback}`);
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={loadFeedbackHandler.bind(null, item.id)}>
                Show Details
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  // Pass data to the page component as props
  return {
    props: {
      data,
    },
    // Re-generate the page every 60 seconds (you can adjust this value)
    revalidate: 60,
  };
}
export default FeedbackPage;
