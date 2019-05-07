import React from 'react'
import Subject from './Subject';

const Subjects = (props) => {
    const subjects = props.data.map((subject) => {
        return <Subject key={subject.id} id={subject.id} title={subject.subjectName} changeSubject={props.changeSubject} />
    });
    return (
        <ul className="list-group">
            {subjects}
        </ul>
    );
}

export default Subjects;
