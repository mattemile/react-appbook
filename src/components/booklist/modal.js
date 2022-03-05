import React, { Component } from 'react'
import '../../css/bookList/modal.scss'

class modal extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.show && (
                        <div className='modal-main' id="modal">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.descr ? this.props.descr.slice(0, 250) + '...' : 'Descrizione non disponibile!'}</p>
                            {this.props.page ? <p>Pag: {this.props.page}</p> : ''}
                            <div className="actions">
                                <button className='btn btn-danger' onClick={this.props.onHide}>
                                    Close
                                </button>
                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default modal