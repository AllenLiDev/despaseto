import React from 'react'
import "./Header.css";

class Header extends React.Component {
    accessAdmin() {
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

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" onClick={() => this.accessAdmin()} className="btn btn-primary" data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;