import React from 'react';

class SubjectPageElementAdmin extends React.Component {
    state = { text: this.props.content.text, url: this.props.content.url }
    render() {
        const { content } = this.props.content;
        if (content.type === 1) { //header
            return (
                // if new headr already exists add end line then header
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body input-group">
                        <input className="form-control" type="text" placeholder={content.text} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}>
                        </input>
                    </div>
                </div>
            );
        } else if (content.type === 2) { //link
            return (
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body">
                        <a href={content.url} target="_blank" rel="noopener noreferrer">{content.text}</a>
                    </div>
                </div>
            );
        } else if (content.type === 3) { //Image
            return (
                <div className="card">
                    <i className="fas fa-times-circle" />
                    <div className="card-body">
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