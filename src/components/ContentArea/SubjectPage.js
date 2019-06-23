import React from 'react'
import SubjectPageElement from './SubjectPageElement';
import SubjectPageElementAdmin from './SubjectPageElementAdmin';
import Dropdown from '../BootstrapComponents/Dropdown';
import ElementIcon from '../BootstrapComponents/ElementIcon';

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

    addElement = (type) => {
        this.props.addData(type);
    }

    saveData = () => {
        this.props.saveData();
    }

    loadData = () => {
        this.props.loadData();
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
                        <Dropdown returnFunction={this.addElement} />
                    </div>
                    <ul className="list-group">
                        {SubjectContent}
                    </ul>
                    <div className="float-right">
                        <ElementIcon type="save" params={null} returnFunction={this.saveData} /> Save
                        <ElementIcon type="undo" params={null} returnFunction={this.loadData} /> Discard Changes
                    </div>
                </div>
            );
        } else {
            const SubjectContent = subjectInfo.map((content) => {
                if(content.content.visibility === 0) {
                    return null;
                }
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