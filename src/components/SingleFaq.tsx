import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface Props {
  question: string;
  answer: string;
  isShow: boolean;
  onClick: () => void;
}

export default function SingleFaq({question, answer, isShow, onClick}: Props) {
  return (
    <div>
      <div className="faq__question" onClick={() => onClick()}>
        <h2 className={`heading ${isShow && "active"}`}>
          {question}
        </h2>
        {isShow ? (
          <FaChevronUp className="soft-green" />
        ) : (
          <FaChevronDown className="soft-green" />
        )}
      </div>
      {isShow && <p>{answer}</p>}
      <div className="divider"></div>
    </div>
  );
}
