import React from 'react';
import Header from './Header';
import Subjects from './SubjectsSidebar/Subjects';
import SubjectPage from './ContentArea/SubjectPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: 0, subjectId: 0, testData: [
                {
                    id: 0,
                    subjectName: 'HomePage',
                    subjectInfo: [
                        {
                            content: {
                                type: 1,
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
                                text: 'This a section header'
                            }
                        },
                        {
                            content: {
                                type: 2,
                                text: 'Apr 18 - Polynomials',
                                url: 'www.google.ca'
                            }
                        },
                        {
                            content:
                            {
                                type: 3,
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
                                text: 'May 1 - Biometric analysis'
                            }
                        }
                    ]
                }
            ]
        };
    }

    changeSubject = (id) => {
        this.setState({ subjectId: id });
    }

    updateData = (input) => {

    }

    accessAdmin = () => {
        console.log('Admin ACCESSED!');
        this.setState({ admin: 1 });
    }

    render() {
        return (
            <div className="container">
                <Header accessAdmin={this.accessAdmin} />
                <div className="row">
                    <div className="col-3">
                        <Subjects data={this.state.testData} changeSubject={this.changeSubject} activeId={this.state.subjectId}  />
                    </div>
                    <div className="col-9">
                        <SubjectPage data={this.state.testData[this.state.subjectId]} admin={this.state.admin} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;