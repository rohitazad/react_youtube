import React, {Component} from 'react';
import {  Container } from 'reactstrap';
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookShareCount,
    TwitterShareButton,
    TwitterIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    GooglePlusShareCount,
    LinkedinShareButton,
    LinkedinIcon,
    LinkedinShareCount,
    WhatsappShareButton,
    WhatsappIcon

  } from 'react-share';
  export default class ShareIcon extends Component{
      // https://www.npmjs.com/package/react-share
    render(){
        const shareUrl = "https://rohitazad.github.io/react_youtube/";
        return(
            <Container>
                <ul className="shareItem">
                    <li className="share-text">Share Us</li>
                    <li>
                        <FacebookShareButton  url={shareUrl}>
                            <FacebookIcon  size={42} round={true} />
                        </FacebookShareButton>
                        <FacebookShareCount url={shareUrl}>
                            {shareCount => (
                                <span className="myShareCountWrapper">{shareCount}</span>
                            )}
                        </FacebookShareCount>
                    </li>
                    <li>
                        <TwitterShareButton  url={shareUrl}>
                            <TwitterIcon  size={42} round={true} />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <GooglePlusShareButton  url={shareUrl}>
                            <GooglePlusIcon  size={42} round={true} />
                        </GooglePlusShareButton>
                        <GooglePlusShareCount url={shareUrl}>
                            {shareCount => (
                                <span className="myShareCountWrapper">{shareCount}</span>
                            )}
                        </GooglePlusShareCount>
                    </li>
                    <li>
                        <LinkedinShareButton  url={shareUrl}>
                            <LinkedinIcon  size={42} round={true} />
                        </LinkedinShareButton>
                        <LinkedinShareCount url={shareUrl}>
                            {shareCount => (
                                <span className="myShareCountWrapper">{shareCount}</span>
                            )}
                        </LinkedinShareCount>
                    </li>
                    <li>
                        <WhatsappShareButton  url={shareUrl}>
                            <WhatsappIcon  size={42} round={true} />
                        </WhatsappShareButton>
                    </li>
                </ul>
                        
            </Container>
        );
    }
  }