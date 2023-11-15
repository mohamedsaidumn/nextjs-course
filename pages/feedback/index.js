import { extractFeedback, buildFeedbackPath } from "../api/feedback";
function FeedbackPage({ data }) {
  return (
    <>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  console.log(data);
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
