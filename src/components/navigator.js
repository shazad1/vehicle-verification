import React, { Component } from 'react';
import './navigator.css';

class Navigator extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="area">
                    <div>
                        <p>
                            Enter car rego number
                        </p>
                        <i class="fas fa-car-side"></i>
                    </div>
                    <div>
                        <p>
                            Enter your email
                        </p>
                        
                        <i class="fas fa-at"></i>
                    </div>
                    <div>
                        <p>
                            Make a small payment
                        </p>
                      
                        <i class="fas fa-money-check"></i>
                    </div>
                    <div>
                        <p>
                            Get your report
                        </p>
                        <i class="fas fa-print"></i>
                    </div>
                </div>
            </React.Fragment>
        );
    }    
}
export default Navigator;