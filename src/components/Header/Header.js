import React from 'react'
import "./Header.css";
import Modal from '../BootstrapComponents/Modal';

class Header extends React.Component {
    accessAdmin = () => {
        this.props.accessAdmin();
    }
    render() {

        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">MS. SETO</h1>
                    <p className="lead">Contact: aseto@sd40.bc.ca</p>
                    <i className="fas fa-user-shield admin" data-toggle="modal" data-target="#exampleModalCenter"></i>
                </div>

                <Modal returnFunction={this.accessAdmin} />
            </div>
        );
    }
}

export default Header;