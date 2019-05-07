import React from 'react';
import Header from './Header';
import Subjects from './SubjectsSidebar/Subjects';
import ContentArea from './ContentArea/SubjectPage';

class App extends React.Component {
    state = {subjectId: 1};

    testData = [
        {
            id: 1,
            subjectName: 'GGL',
            subjectInfo: [
                { Title: 'Google' },
                {
                    Link: [
                        { Text: 'Link' },
                        { URL: 'google.ca' }
                    ]
                },
                { Image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjh_vXakIjiAhUTCXwKHSETCNIQjRx6BAgBEAU&url=https%3A%2F%2Ficonscout.com%2Fsearch%3Fasset%3Dicon%26color%3D%2523FE7058%26product_type%3Ditem%26query%3DAvatar%26sort%3Dpopular&psig=AOvVaw1R17R6Gzloo6EzOhSBFkJ1&ust=1557274227323644' }
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

    changeSubject(key) {
        this.setState({subjectId: key})
    }


    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Subjects data={this.testData}/>
                <ContentArea subjectId={this.subjectId} />
            </div>
        );
    }
}

export default App;