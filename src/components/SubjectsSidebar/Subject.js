import React from 'react';

class Subject extends React.Component {
    changeSubject(id){
        this.props.changeSubject(id);
    }

    render() {
        const {id, title} = this.props;
        return(
            <div className='list-group-item' onClick={() => this.changeSubject(id)}>{title}</div>
        );
    }
}

export default Subject;