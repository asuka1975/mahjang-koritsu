import { Link } from "react-router-dom";
import { useQuestion } from "../hooks/QuestionContext";
import { judgeAnswer } from "../../utils/answerUtils";
import Answer from "../molecules/Answer";

type Props = {
    index: number
}

export default function AnswerPage({ index }: Props) {
    const [question, _] = useQuestion();

    return (
        <div>
            <div>
                {judgeAnswer(index, question) ? "正解！！！" : "不正解・・・"}
            </div>
            <div>
                <Answer question={question} />
            </div>
            <div>
                <Link to="/question">次の問題</Link>
            </div>
        </div>
    )
}