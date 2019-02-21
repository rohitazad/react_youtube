import React, {Component} from 'react';
import {
    Container } from 'reactstrap';
export default class FooterSec extends Component{
    render(){
        return(
            <footer className="footer">
                <Container>
                    <div className="follow-us">
                        <h5 className="heading5">Follow us</h5>
                        <ul className="socialIcon">
                            <li tooltip="Find Us on Google Plus"><a href="https://plus.google.com/111154228660835588284/posts" target="_blank" rel="noopener noreferrer"><span className="fa fa-google"></span></a></li>
                            <li tooltip="Find Us on Facebook"><a href="https://www.facebook.com/IamRohitAzad" target="_blank" rel="noopener noreferrer"><span className="fa fa-facebook"></span></a></li>
                            <li tooltip="Find Us on Twitter"><a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/iamrohitazad"><span className="fa fa-twitter"></span></a></li>
                            <li tooltip="Find Us on Linkedin"><a target="_blank"  rel="noopener noreferrer" href="http://in.linkedin.com/in/rohitazad"><span className="fa fa-linkedin"></span></a></li>
                            <li tooltip="Find Us on StackOverflow"><a target="_blank"  rel="noopener noreferrer" href="http://stackoverflow.com/users/1365428/rohit-azad"><span className="fa fa-stack-overflow"></span></a></li>
                            <li tooltip="Find Us on GitHub"><a target="_blank" rel="noopener noreferrer" href="https://github.com/rohitazad"><span className="fa fa-github-square"></span></a></li>
                        </ul>
                    </div>
                     <div className="row">
                        <div className="col-lg-12">
                            <p className="foText">Copyright © 2019. All right reserved. Disclaimer

                            Design & Develop By : <a tooltip="Check Rohit Azad Site" href="http://www.rohitazad.com/" target="_blank" rel="noopener noreferrer">Rohit Azad Malik</a>

                            </p>
                        </div>
                    </div>
                </Container> 
            </footer>
        );
    }
}