import React from 'react';

class Subject extends React.Component {
    render() {
        return(
            <div className='list-group-item'>{this.props.title}</div>
        );
    }
}

export default Subject;