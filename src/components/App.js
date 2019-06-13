import React from 'react';
import Header from './Header';
import Subjects from './SubjectsSidebar/Subjects';
import SubjectPage from './ContentArea/SubjectPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: 0,
            subjectId: 0,
            testData: [{
                id: 0,
                subjectName: 'HomePage',
                subjectInfo: [
                    {
                        content: {
                            type: 1,
                            visibility: 1,
                            text: 'This is where homepage content loads'
                        }
                    }
                ]
            },
            {
                id: 1,
                subjectName: 'FMP 10',
                subjectInfo: [
                    {
                        content: {
                            type: 1,
                            visibility: 1,
                            text: 'This a section header'
                        }
                    },
                    {
                        content: {
                            type: 2,
                            visibility: 1,
                            text: 'Apr 18 - Polynomials',
                            url: 'www.google.ca'
                        }
                    },
                    {
                        content: {
                            type: 3,
                            visibility: 1,
                            url: 'images/avatar.png'
                        }
                    }
                ]
            },
            {
                id: 2,
                subjectName: 'SCI 9',
                subjectInfo: [
                    {
                        content: {
                            type: 2,
                            visibility: 1,
                            text: 'May 1 - Biometric analysis'
                        }
                    }
                ]
            }]
        };
    }

    componentDidMount() {
        // this.setState({testData: JSON.parse(localStorage.getItem('myData'))});
        // console.log(JSON.parse(localStorage.getItem('myData')));
    }

    changeSubject = (id) => {
        this.setState({ subjectId: id });
    }

    shiftData = (direction, key) => {
        let temp = this.state.testData;
        if (direction === 1) {
            let tempData = temp[this.state.subjectId].subjectInfo[key];
            temp[this.state.subjectId].subjectInfo[key] = temp[this.state.subjectId].subjectInfo[key - 1];
            temp[this.state.subjectId].subjectInfo[key - 1] = tempData;
        } else {
            let tempData = temp[this.state.subjectId].subjectInfo[key];
            temp[this.state.subjectId].subjectInfo[key] = temp[this.state.subjectId].subjectInfo[key + 1];
            temp[this.state.subjectId].subjectInfo[key + 1] = tempData;
        }
        this.setState({ testData: temp })
    }

    updateVisibility = (key) => {
        let temp = this.state.testData;
        temp[this.state.subjectId].subjectInfo[key].content.visibility = temp[this.state.subjectId].subjectInfo[key].content.visibility == 1 ? 0 : 1;
        this.setState({ testData: temp });
    }

    removeData = (key) => {
        let temp = this.state.testData;
        temp[this.state.subjectId].subjectInfo.splice(key, 1);
        this.setState({ testData: temp });
    }

    accessAdmin = () => {
        this.setState({ admin: 1 });
    }

    render() {
        return (
            <div className="container">
                <Header accessAdmin={this.accessAdmin} />
                <div className="row">
                    <div className="col-3">
                        <Subjects data={this.state.testData} changeSubject={this.changeSubject} activeId={this.state.subjectId} />
                    </div>
                    <div className="col-9">
                        <SubjectPage data={this.state.testData[this.state.subjectId]} admin={this.state.admin} updateVisibility={this.updateVisibility} shiftData={this.shiftData} removeData={this.removeData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;