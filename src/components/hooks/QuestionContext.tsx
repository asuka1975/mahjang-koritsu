import { createContext, ReactNode, useContext, useState } from "react";
import { Question } from "../../types/types";

export const QuestionContext = createContext<[Question, React.Dispatch<React.SetStateAction<Question>>]>([{ 
        katachi1: { hais: [], order: 0 },
        katachi2: { hais: [], order: 0 },
    }, () => {}]);

export const useQuestion = () => useContext(QuestionContext);

type Props = {
    children: ReactNode
}

export function QuestionContextProvider({ children }: Props) {
    const state = useState<Question>({ 
        katachi1: { hais: [], order: 0 },
        katachi2: { hais: [], order: 0 },
    })

    return (
        <QuestionContext.Provider value={state}>
            {children}
        </QuestionContext.Provider>
    )
}