import React from 'react';
import Header from './Header/Header';
import Subjects from './SubjectsSidebar/Subjects';
import SubjectsAdmin from './SubjectsSidebar/SubjectsAdmin';
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
                            type: 'heading',
                            visibility: 1,
                            text: 'Loading Home Page...'
                        }
                    }
                ]
            }]
        };
    }


    componentDidMount() {
        this.loadData();
    }

    changeSubject = (id) => {
        this.setState({ subjectId: id });
    }

    addSubject = () => {
        let temp = this.state.testData;
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
        temp[this.state.subjectId].subjectInfo[key].content.visibility = temp[this.state.subjectId].subjectInfo[key].content.visibility === 1 ? 0 : 1;
        this.setState({ testData: temp });
    }

    removeData = (key) => {
        let temp = this.state.testData;
        temp[this.state.subjectId].subjectInfo.splice(key, 1);
        this.setState({ testData: temp });
    }

    accessAdmin = () => {
        this.setState({ admin: this.state.admin ? 0 : 1 });
    }

    addSubject = (name) => {

    }

    addData = (type) => {
        let temp = this.state.testData;
        let tempData = {
            content: {
                type: type,
                visibility: 1,
                text: '~ New ' + type + ' ~',
                url: ''
            }
        }
        temp[this.state.subjectId].subjectInfo.push(tempData);
        this.setState({ testData: temp });
    }

    loadData = () => {
        this.setState({ testData: JSON.parse(localStorage.getItem('myData')) });
    }

    saveData = () => {
        localStorage.setItem('myData', JSON.stringify(this.state.testData));
    }

    render() {
        return (
            <div className="container">
                <Header accessAdmin={this.accessAdmin} />
                <div className="row">
                    <div className="col-3">
                        {/* <Subjects data={this.state.testData} changeSubject={this.changeSubject} activeId={this.state.subjectId} /> */}
                        <SubjectsAdmin data={this.state.testData} changeSubject={this.changeSubject} activeId={this.state.subjectId} />
                    </div>
                    <div className="col-9">
                        <SubjectPage data={this.state.testData[this.state.subjectId]} admin={this.state.admin} updateVisibility={this.updateVisibility} addData={this.addData} shiftData={this.shiftData} removeData={this.removeData} loadData={this.loadData} saveData={this.saveData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;