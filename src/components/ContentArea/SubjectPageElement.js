import React from 'react';

class SubjectPageElement extends React.Component {
    render() {
        const { content } = this.props.content;
        switch (content.type) {
            case 'heading':
                return <h3>{content.text}</h3>
            case 'font':
                return <p>{content.text}</p>
            case 'image':
                return <img src={content.url} className="img-fluid" alt={content.text} />
            case 'link':
                return <a href={content.url} target="_blank" rel="noopener noreferrer">{content.text}</a>
            default:
                return <div>Error Has Occurred</div>
        }
        // if (content.type === 'Heading') { //header
        //     return (
        //         // if new headr already exists add end line then header
        //         <h3>{content.text}</h3>
        //     );
        // } else if (content.type === 'Font') { //Txt
        //     return (
        //         <a href={content.url} target="_blank" rel="noopener noreferrer">{content.text}</a>
        //     );
        // } else if (content.type === 'Image') { //Image
        //     return (
        //         <img src={content.url} className="img-fluid" alt="" />
        //     );
        // } else {
        //     return (
        //         <div>undefined</div>
        //     )
        // }
    }
}

export default SubjectPageElement;
