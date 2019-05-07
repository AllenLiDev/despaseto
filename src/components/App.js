import React from 'react';
import Header from './Header';
import Subjects from './SubjectsSidebar/Subjects';
import SubjectPage from './ContentArea/SubjectPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subjectId: 0 };
    }

    testData = [
        {
            id: 0,
        },
        {
            id: 1,
            subjectName: 'GGL',
            subjectInfo: [
                {
                    content: {
                        type: 1,
                        text: 'This is section header'
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
            subjectName: 'NBA',
            subjectInfo: [
                { Title: 'NBA' },
                {
                    Link: [
                        { Text: 'Link' },
                        { URL: 'nba.com' }
                    ]
                },
                { Image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjh_vXakIjiAhUTCXwKHSETCNIQjRx6BAgBEAU&url=https%3A%2F%2Ficonscout.com%2Fsearch%3Fasset%3Dicon%26color%3D%2523FE7058%26product_type%3Ditem%26query%3DAvatar%26sort%3Dpopular&psig=AOvVaw1R17R6Gzloo6EzOhSBFkJ1&ust=1557274227323644' }
            ]
        }
    ];

    changeSubject = (id) => {
        console.log('change key to: ' + id);
        this.setState({ subjectId: id });
    }


    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Subjects data={this.testData} changeSubject={this.changeSubject} />
                <SubjectPage data={this.testData[this.state.subjectId]} />
            </div>
        );
    }
}

export default App;