import React from 'react'
import Subject from './Subject';

const Subjects = (props) => {
    const subjects = props.data.map((subject) => {
        if(subject.id === 0){
            return null;
        }
        return <Subject key={subject.id} id={subject.id} activeId={props.activeId} title={subject.subjectName} changeSubject={props.changeSubject} />
    });
    return (
        <ul className="list-group">
            <li className="list-group-item list-group-item-dark" >Subjects </li>
            {subjects}
        </ul>
    );
}

export default Subjects;
