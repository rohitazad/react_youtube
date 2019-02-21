import React, {Component} from 'react';
import {ListGroupItem } from 'reactstrap';
import { Media } from 'reactstrap';

export default class VideoListItem extends Component{
    constructor(props){
        super(props);
        //console.log('videolistitem props', props);
        this.onVideoSelectFun = this.onVideoSelectFun.bind(this);
    }
    onVideoSelectFun(){
        //console.log('this.props', this.props);
        this.props.onVideoSelect(this.props.video);
    }
    render(){
        return (
            <ListGroupItem onClick={this.onVideoSelectFun} className="video-list">
                <Media>
                    <Media left top>
                        <img src={this.props.video.thumbnails.default.url} alt="G" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {this.props.video.channelTitle}
                        </Media>
                        {this.props.video.title}
                    </Media>
                </Media>
            </ListGroupItem>
        );
    }
}