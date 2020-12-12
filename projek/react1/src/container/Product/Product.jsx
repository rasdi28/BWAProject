import React, { Component, Fragment } from 'react'

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="../../../public/logo192.png"/>
                    </div>

                    
                </div>

            <div className="card">
                <div className="img-thumb-prod">
                    <img src="../../../public/logo192.png" alt=""/>
                        
                </div>
                <p className = "product-title">Makanan Lezat dan Halal</p>
                <p className = "product-price">Rp.40.0000</p>
                <div className="counter">
                    <button className= "minus">-</button>
                    <input type= "text" value
                    = {3}/>
                    <button className="plus">+</button>
                </div>
                
            </div>


            </Fragment>


            
        );
    }
}
