import React from 'react';

class SubjectPageElementAdmin extends React.Component {
    state = { text: this.props.content.text, url: this.props.content.url }
    render() {
        const { content } = this.props.content;
        if (content.type === 1) { //header
            return (
                // if new headr already exists add end line then header
                <div className="list-group-item">
                    <li className="list-group-item d-flex align-items-center">
                        <i className="fas fa-font p-2"></i>
                        <div className="flex-grow-1 p-2">{content.text}</div>
                        <i className="far fa-edit p-2"></i>
                        <i class="fas fa-caret-up p-2"></i>
                        <i class="fas fa-caret-down p-2"></i>
                        <i class="far fa-trash-alt p-2"></i>
                        
                    </li>
                </div>
            );
        } else if (content.type === 2) { //link
            return (
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body">
                        <div className="card-title">
                            Link
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder={content.text} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}>
                            </input>
                        </div>
                    </div>
                </div>
            );
        } else if (content.type === 3) { //Image
            return (
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body">
                        <div className="card-title">
                            Image
                        </div>
                        <img src={content.url} className="img-fluid" alt="" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body">
                        <div>undefined</div>
                    </div>
                </div>
            )
        }
    }
}

export default SubjectPageElementAdmin;