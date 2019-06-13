import React from 'react';
import ElementIcon from './ElementIcon';

class SubjectPageElementAdmin extends React.Component {

    render() {
        const { content } = this.props.content;
        return (
            // if new headr already exists add end line then header
            <li className="list-group-item d-flex align-items-center">
                <ElementIcon type={content.type} />
                <div className="flex-grow-1 p-2">{content.text}</div>
                <ElementIcon type={5} id={this.props.id} moveElement={this.props.moveElement} />
                <ElementIcon type={6} id={this.props.id} moveElement={this.props.moveElement} />
                <ElementIcon type={content.visibility ? 4 : 9} id={this.props.id} updateElement={this.props.updateElement} />
                <ElementIcon type={7} />
                <ElementIcon type={8} id={this.props.id} removeElement={this.props.removeElement} />
            </li>
        );
    }
}

export default SubjectPageElementAdmin;