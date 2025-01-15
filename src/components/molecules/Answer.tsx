import "./Answer.css";

import { Question } from "../../types/types"
import { judgeAnswer } from "../../utils/answerUtils"
import KatachiCard from "./KatachiCard"

type Props = {
    question: Question
}

export default function Answer({ question }: Props) {
    return (
        <div className="AnswerContainer">
            <KatachiCard hais={question.katachi1.hais} />
            {judgeAnswer(0, question) ? ">" : "<"}
            <KatachiCard hais={question.katachi2.hais} />
        </div>
    )
}