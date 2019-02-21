import React, {Component} from 'react';
import { ListGroup } from 'reactstrap';
import VideoListItem from './videolistItem';
export default class VideoList extends Component {
    // constructor(props){
    //     super(props);
    //     //console.log('videolist', props);
    // }
    videoItemFetchDetails(item){
        return item.map( (video)=>{
            return <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.id} 
                        video={video} />
        });
    }
    render(){
        return (
            <ListGroup>
                { this.videoItemFetchDetails(this.props.videos) }
            </ListGroup>
        )
    }
}