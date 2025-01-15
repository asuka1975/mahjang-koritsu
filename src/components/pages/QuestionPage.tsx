import "./QuestionPage.css";

import { useEffect } from "react";
import { useQuestion } from "../hooks/QuestionContext";
import Choice from "../organisms/Choice";
import { katachis } from "../constants/constants";


export default function QuestionPage() {
    const [question, setQuestion] = useQuestion();

    useEffect(() => {
        setQuestion(choiceKatachi())
    }, []);

    return (
        <div className="QuestionContainer">
            <div className="QuestionMessage">
                どちらが価値の高い浮き牌？
            </div>
            <Choice katachi={question.katachi1} index={0} />
            <Choice katachi={question.katachi2} index={1} />
        </div>
    )
}

function choiceKatachi() {
    const index1 = 2 + Math.floor(Math.random() * (katachis.length - 4));
    const index2 = Math.floor(index1 + Math.sign(Math.random() - 0.5) * (Math.random() * 2 + 1))
    if(index1 === index2) {
        return choiceKatachi();
    }
    return {
        katachi1: katachis[index1],
        katachi2: katachis[index2],
    };
}