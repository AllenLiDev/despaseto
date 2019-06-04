import React from 'react'
import SubjectPageElement from './SubjectPageElement';
import SubjectPageElementAdmin from './SubjectPageElementAdmin.js';

class SubjectPage extends React.Component {

    render() {
        let count = 0;
        const { subjectName, subjectInfo } = this.props.data;
        if (this.props.admin == 1) {
            const SubjectContent = subjectInfo.map((content) => {
                return <SubjectPageElementAdmin key={count++} content={content} />
            });
            return (
                <div className="container">
                    <h1>{subjectName}</h1>
                    {SubjectContent}
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