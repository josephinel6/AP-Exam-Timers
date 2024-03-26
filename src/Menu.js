import { useEffect, useState, useContext, setContext } from "react";
import TimerContext from "./TimerContext";

export default function Home() {
    const timerContext = useContext(TimerContext);

    const [exam, setExam] = useState(null);
    const [section, setSection] = useState(null);

    const update = (section) => {
        setSection(section);
        timerContext.setMinutes(section.duration);
    }

    return (
        <div>
            <div className="menu" id="exams-menu">
                {Exams.map(exam => (
                    <button onClick={() => setExam(exam)} className="option"> {exam.title} </button>
                ))}
            </div>
            <div className="menu">
                {
                    exam != null &&
                    exam.sections.map(section => (
                        <button onClick={() => update(section)} className="option">  {section.name}</button>
                    ))
                }
                {/* </div> */}
            </div></div>
    )

}

export const Exams = [
    {
        "title": "Computer Science Principles",
        "sections": [
            {
                "name": "MCQ",
                "duration": 70
            }
        ]
    }, {
        "title": "Computer Science A",
        "sections": [
            {
                "name": "MCQ",
                "duration": 90
            },
            {
                "name": "FRQ",
                "duration": 90
            }
        ]
    }, {
        "title": "Calculus",
        "sections": [
            {
                "name": "MCQ",
                "duration": 105
            },
            {
                "name": "FRQ",
                "duration": 90
            }
        ]
    }, {
        "title": "Physics C",
        "sections": [
            {
                "name": "MCQ",
                "duration": 45
            },
            {
                "name": "FRQ",
                "duration": 45
            }
        ]
    }
];