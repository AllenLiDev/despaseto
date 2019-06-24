import React from 'react'
import Subject from './Subject';
import ElementIcon from '../BootstrapComponents/ElementIcon';

const Subjects = (props) => {
    const subjects = props.data.map((subject) => {
        if (subject.id === 0) {
            return null;
        }
        return <Subject key={subject.id} id={subject.id} activeId={props.activeId} title={subject.subjectName} changeSubject={props.changeSubject} />
    });
    const adminElement = (
        <>
            <li className="list-group-item list-group-item-dark d-flex align-items-center" >
                <div className="flex-grow-1">Subjects</div>
                <ElementIcon type="plus" params={null} returnFunction={props.addSubject} />
            </li>
        </>
    );
    const normalElement = (
        <li className="list-group-item list-group-item-dark" >Subjects </li>
    )
    return (
        <ul className="list-group">
            {props.admin ? adminElement : normalElement}
            {subjects}
        </ul>
    );
}

export default Subjects;
