import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {

    const navigate = useNavigate();

    return (
        <div className='back shadow'>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col col-xs-12 col-lg-8">
                        <button type="button" className="btn btn-dark dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                    <ul className="dropdown-menu drop">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <h3 className='mb-4 mt-4'>Other USER</h3>
                    <input type="text" placeholder='Network' className="inp w-100 p-3 mb-3" />
                    <input type="text" placeholder='Wallet address of ours' className="inp w-100 p-3 mb-3" />
                    <input type="text" placeholder='Wallet address of user' className="inp w-100 p-3 mb-3" />
                    <input type="text" placeholder='memo if available' className="inp w-100 p-3 mb-3" />
                    <input type="text" placeholder='transaction ID' className="inp w-100 p-3 mb-3" />
                </div>
                <div className="col col-xs-12 col-lg-4 back shadow mt-5">
                    <h3 className='mb-4 mt-3'>Binance USER</h3>
                    <input type="text" name='payId' className="inp p-3 mb-3 w-100" placeholder="PAY ID"/>
                    <input type="text" name='binanceId' className="inp p-3 mb-3 w-100" placeholder="BINANCE ID"/>
                    <input type="email" name='emailId' className="inp p-3 mb-3 w-100" placeholder="EMAIL ID"/>
                    <input type="text" name='phone' className="inp p-3 mb-3 w-100" placeholder="PHONE NO."/>
                </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-dark mt-4 ps-5 pe-5" onClick={() =>navigate("/escrow")}>NEXT</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Order