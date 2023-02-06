import { data } from "../data";
import SingleFaq from "./SingleFaq";
import { useState } from 'react';

function Faq() {
  const [isQuestion, isSetQuestion] = useState<number | null>(null);
  const posts = data.map((post, index) => {
    return (
      <SingleFaq
        key={index}
        question={post.question}
        answer={post.answer}
        isShow={isQuestion === index}
        onClick={() => {
          isSetQuestion((prevQuestion) =>
            prevQuestion === index ? null : index
          );
        }}
      />
    );
  });
  return (
    <>
      <h1>FAQ</h1>
      {posts}
    </>
  );
}
export default Faq;
