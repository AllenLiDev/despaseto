import React from 'react';

class SubjectPageElement extends React.Component {
    render() {
        const { content } = this.props.content;
        console.log(content);
        if (content.type === 1) { //header
            return (
                // if new headr already exists add end line then header
                <h3>{content.text}</h3>
            );
        } else if (content.type === 2) { //link
            return (
                <a href={content.url} target="_blank">{content.text}</a>
            );
        } else if (content.type === 3) { //Image
            return (
                <img src={content.url} className="img-fluid" alt="" />
            );
        } else {
            return (
                <div>undefined</div>
            )
        }
    }
}

export default SubjectPageElement;
