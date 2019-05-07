import React from 'react'
import SubjectPageElememt from './SubjectPageElement';

class SubjectPage extends React.Component {

    render() {
        const { id } = this.props.data;
        if (id === 0) {
            return (
                <div>Home Page no subject selected</div>
            );
        } else {
            let count = 0;
            const { subjectName, subjectInfo } = this.props.data;
            const SubjectContent = subjectInfo.map((content) => {
                return <SubjectPageElememt key={count++} content={content} />
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