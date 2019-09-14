import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    componentDidMount() {
        const { handleModalCloseClick } = this.props;
        $(this.modal).modal('show');
        $(this.modal).on('hidden.bs.modal', handleModalCloseClick);
    }
    handleCloseClick() {
        const { handleModalCloseClick } = this.props;
        $(this.modal).modal('hide');
        handleModalCloseClick();
    }
    render() {
        return (
           <div>
            <div className="modal fade" ref={modal => this.modal = modal} id="Modal" tabIndex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
        }        <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="ModalTitle">Intrested..!! Grab a deal by contacting us..</h5>
                                <button type="button" className="close" data-dismiss="Modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                 <form>
                                    <div className="form-group">
                                         <label htmlFor="name">Your Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter Name" required />
                                    </div>
                                     <div className="form-group">
                                         <label htmlFor="mobile">Your Mobile Number</label>
                                         <input type="tel" className="form-control" id="mobile" placeholder="Mobile Number" required />
                                     </div>
                                   <div className="form-group">
                                         <label htmlFor="email1">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
                                     </div>

                                 </form>
                             </div>
                               <div className="modal-footer">
                                 <button type="button" className="btn btn-light" data-dismiss="modal" onClick={this.handleCloseClick}>Close</button>
                                 <button type="submit" className="btn btn-light">Submit Details</button>
                             </div>
                         </div>
                    </div>
                </div> 
                
                
            </div>
        );
    }
}

export default Modal;
