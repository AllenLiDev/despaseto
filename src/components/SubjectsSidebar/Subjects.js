import React from 'react'
import Subject from './Subject';

const Subjects = (props) => {
    const subjects = props.data.map((subject) => {
        return <Subject key={subject.id} title={subject.subjectName} />
    });
    return (
        <ul className="list-group">
            {subjects}
        </ul>
    );
}

export default Subjects;
