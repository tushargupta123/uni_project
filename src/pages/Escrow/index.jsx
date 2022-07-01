import React from 'react'

const Escrow = () => {
    return (
        <div className='back shadow'>
            <div className="container">
                <div className="row">
                    <div className="card back mt-5 mb-5 p-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col col-md-12 col-lg-4 text-center">
                                    <h4><u><b>Status</b></u></h4>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-dark mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            CANCEL
                                        </button>
                                        <div className="modal fade shadow" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered dialog">
                                                <div className="modal-content back shadow">
                                                    <div className="modal-body">
                                                        <b>Are you sure you want to cancel?</b><br/><br/>
                                                        <button type="button" className="btn btn-light me-4" data-bs-dismiss="modal">No</button>
                                                        <button type="button" className="btn btn-dark">Yes</button>
                                                    </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-0 col-lg-1">
                                    <div className="vl"></div>
                                </div>
                                <div className="col col-md-12 col-lg-3 text-center">
                                    <h4><u><b>Recieved Asset</b></u></h4>
                                </div>
                                <div className="col col-md-0 col-lg-1">
                                    <div className="vl"></div>
                                </div>
                                <div className="col col-md-12 col-lg-3 text-center">
                                    <h4><u><b>Recieved Fund</b></u></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Escrow