import React from "react";
import { AnswerObject } from '../App';// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {

    console.log(answers)
    return (
        <Wrapper>
            <p className="number">
                Questions: { questionNr } / { totalQuestions } 
            </p>
            <p className="question" dangerouslySetInnerHTML={{ __html: question}} />
            <div>
                { answers?.map( answer => (  
                    <ButtonWrapper  key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={ userAnswer?.answer === answer } >
                        <button disabled={!!userAnswer} value={answer} onClick={ callback } className=''>
                            <span className="" dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </ButtonWrapper>    
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard