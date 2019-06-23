import React from 'react'
import Subject from './Subject';
import ElementIcon from '../BootstrapComponents/ElementIcon';

const SubjectsAdmin = (props) => {
    const subjects = props.data.map((subject) => {
        if (subject.id === 0) {
            return null;
        }
        return <Subject key={subject.id} id={subject.id} activeId={props.activeId} title={subject.subjectName} changeSubject={props.changeSubject} />
    });
    return (
        <ul className="list-group">
            <li className="list-group-item list-group-item-dark d-flex align-items-center" >
                <div className="flex-grow-1">Subjects</div>
                <ElementIcon type='plus' params={subjects.count} returnFunction={null}/>
            </li>
            {subjects}
        </ul>
    );
}

export default SubjectsAdmin;
