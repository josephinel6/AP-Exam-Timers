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
            <div className="exam-title">{Exams.map(exam => (
                <div onClick={() => setExam(exam)}> {exam.title} </div>
            ))}</div>
            {exam != null &&
                exam.sections.map(section => (
                    <div onClick={() => update(section)}>  {section.name}</div>
                ))
            }
        </div>
    )

}

export const Exams = [
    {
        "title": "CSA",
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
    }, {
        "title": "CSP",
        "sections": [
            {
                "name": "MCQ",
                "duration": 70
            }
        ]
    }
];