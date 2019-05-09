import React from 'react';

class Subject extends React.Component {
    changeSubject(id){
        this.props.changeSubject(id);
    }

    render() {
        const {id, title, activeId} = this.props;
        let classname = (id === activeId ? 'list-group-item active' : 'list-group-item');
        return(
            <div className={classname} onClick={() => this.changeSubject(id)}>{title}</div>
        );
    }
}

export default Subject;