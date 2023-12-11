import React from 'react';
import "./style/footer.css"
import { Container } from 'react-bootstrap';
import { img1 } from "./images/insta.png";
import { img2 } from "./images/face.png";
import { img3 } from "./images/twi.png";
import { img4 } from "./images/link.png";
export function Footer() {
    return (
        <Container className='mt-5'>
            <footer className="site-footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>About</h6>
                            <p className="text-justify">
                                Unlock the power of InvestigatePro, a cutting-edge <b>Detective Services App</b> that redefines investigation. From intelligent case management to seamless collaboration and advanced surveillance tools, elevate your detective capabilities with efficiency and precision. Join us in the relentless pursuit of truth, where technology meets expertise.
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>               
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-6 col-xs-12">
                            <p className="copyright-text text-center" >
                                Copyright &copy; 2023 All Rights Reserved by
                                <a href="#">Detective Service App</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </Container>

    );
}