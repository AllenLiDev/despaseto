import React from 'react'
import SubjectPageElement from './SubjectPageElement';
import SubjectPageElementAdmin from './SubjectPageElementAdmin';

class SubjectPage extends React.Component {

    moveElement = (direction, key) => {
        if(direction === "up"){
            if(key === 0){
                return null;
            }
            this.props.shiftData(1, key);
        } else if (direction === "down") {
            if(key === (this.props.data.subjectInfo.length - 1)){
                return null;
            }
            this.props.shiftData(2, key);
        }
    }

    render() {
        let count = 0;
        const { subjectName, subjectInfo } = this.props.data;
        if (this.props.admin === 1) {
            const SubjectContent = subjectInfo.map((content) => {
                return <SubjectPageElementAdmin key={count} id={count++} content={content} moveElement={this.moveElement}/>
            });
            return (
                <div className="container">
                    <h1 className="bg-primary rounded">{subjectName}</h1>
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