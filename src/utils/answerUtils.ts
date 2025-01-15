import { Question } from "../types/types";

export function judgeAnswer(choiceIndex: number, question: Question): boolean {
    return [question.katachi1, question.katachi2][choiceIndex].order > [question.katachi1, question.katachi2][1 - choiceIndex].order;
}