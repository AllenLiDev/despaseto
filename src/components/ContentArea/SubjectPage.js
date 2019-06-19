import React from 'react'
import SubjectPageElement from './SubjectPageElement';
import SubjectPageElementAdmin from './SubjectPageElementAdmin';
import ElementIcon from './ElementIcon';

class SubjectPage extends React.Component {

    moveUpElement = (key) => {
        if (key === 0) {
            return null;
        }
        this.props.shiftData(1, key);
    }
    moveDownElement = (key) => {
        if (key === (this.props.data.subjectInfo.length - 1)) {
            return null;
        }
        this.props.shiftData(2, key);
    }

    updateElement = (key) => {
        this.props.updateVisibility(key);
    }

    removeElement = (key) => {
        this.props.removeData(key);
    }

    addElement = (key) => {
        this.props.addData(key);
    }

    render() {
        let count = 0;
        const { subjectName, subjectInfo } = this.props.data;
        if (this.props.admin === 1) {
            const SubjectContent = subjectInfo.map((content) => {
                return <SubjectPageElementAdmin key={count} id={count++} content={content} updateElement={this.updateElement} moveUpElement={this.moveUpElement} moveDownElement={this.moveDownElement} removeElement={this.removeElement} />
            });
            return (
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h2 className="flex-grow-1">{subjectName}</h2>
                        <ElementIcon type={'plus'} />
                    </div>
                    <ul className="list-group">
                        {SubjectContent}
                    </ul>
                </div>
            );
        } else {
            const SubjectContent = subjectInfo.map((content) => {
                return <SubjectPageElement key={count++} content={content} />
            });
            return (
                <div className="container">
                    <h1>{subjectName}</h1>
                    {SubjectContent}
                </div>
            );
        }
    }
}

export default SubjectPage;