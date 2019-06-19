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
                <ElementIcon type={'caret-up'} params={this.props.id} returnFunction={this.props.moveUpElement} />
                <ElementIcon type={'caret-down'} params={this.props.id} returnFunction={this.props.moveDownElement} />
                <ElementIcon type={content.visibility ? 'eye' : 'eye-slash'} params={this.props.id} returnFunction={this.props.updateElement} />
                <ElementIcon type={'edit'} />
                <ElementIcon type={'trash'} params={this.props.id} returnFunction={this.props.removeElement} />
            </li>
        );
    }
}

export default SubjectPageElementAdmin;