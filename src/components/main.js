import React, { Component } from 'react';
import Navigator from './navigator';

  class Main extends Component {

    render() {
        return (
            <React.Fragment>
            <div   className="hero-wrap">
            <div   className="overlay"></div>
            <div   className="circle-bg"></div>
            <div   className="circle-bg-2"></div>
            <div   className="container-fluid">
              <div   className="slider-text d-md-flex align-items-center" data-scrollax-parent="true">
      
                <div   className="one-forth pr-md-4   align-self-md-center" >
                  <p   className="mb-md-5 mb-sm-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Buying a car? Wait! Let's check if there is any risk attached to it....</p>
                </div>
                <div   className="one-half align-self-md-end align-self-sm-center">
                    <div   className="slider-carousel owl-carousel">
                        <div   className="item">
                            <img src="images/car.jpg"   className="img-fluid img"alt=""/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
    
          <section   className="ftco-section bg-light">
              <div   className="container">
              <Navigator></Navigator>
                  <div   className="row justify-content-center">
                      <div   className="col-md-8   ">
                <form action="#"   className="domain-form">
                    <div   className="form-group d-md-flex">
                      <input type="text"   className="form-control px-4" placeholder="Enter Vehicle Registration Number ..."/>
                      <input type="submit"   className="search-domain btn btn-primary px-5" value="Search Car"/>
                    </div>
                  </form>
                  <p   className="domain-price text-center"><span><small>.com</small>9.75</span> <span><small>.net</small>9.90</span> <span><small>.biz</small>$8.95</span> <span><small>.me</small>$7.95</span></p>
                      </div>
                  </div>
              </div>
          </section>  
            </React.Fragment>
        );
    }
}

export default Main;