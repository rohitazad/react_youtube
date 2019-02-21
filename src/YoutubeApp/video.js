import React, {Component} from 'react';
export default class VideoSec extends Component{
    // constructor(props){
    //     super(props);
    //     //console.log('VideoSec-----', props);
    // }
    render(){
        return(
            <div className="">
                <iframe width="100%" title={this.props.currentVideo.title} height="350" frameBorder="0" src={`https://www.youtube.com/embed/${this.props.currentVideo.id}`} />
                <h1>Channel Name:- {this.props.currentVideo.channelTitle}</h1>
                <h2>Title:- {this.props.currentVideo.title}</h2>
                <p>Description:- {this.props.currentVideo.description}</p>
                <div><small>Published At :- {this.props.currentVideo.publishedAt}</small></div>
            </div>
        );
    }
}
