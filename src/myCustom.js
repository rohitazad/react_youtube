import React, {Component} from 'react';
// import { Button } from 'reactstrap';
import HeaderSec from './CommonSec/Header';
import FooterSec from './CommonSec/Footer';
import ContainerSec from './YoutubeApp/container';

class Mycustomeclass extends Component{
    render(){
        return (
            <div className="">
                {/* Here is my custome Component
                https://reactstrap.github.io/components/alerts/
                <Button color="danger">Danger!</Button> */}
                <HeaderSec />
               <ContainerSec />
               <FooterSec />
            </div>
        );
    }
}

export default Mycustomeclass;