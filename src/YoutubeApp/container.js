import _ from 'lodash';
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchSec from './search';
import VideoList from './videolist';
import VideoSec from './video';
import * as youtubeSearch from "youtube-search";
let opts: youtubeSearch.YouTubeSearchOptions = {
    maxResults: 6,
    key: "AIzaSyAiYOaHP9yz7wznAeOQdzAEXxU__tw1ptg"
  };
//const API_KEY = "AIzaSyAiYOaHP9yz7wznAeOQdzAEXxU__tw1ptg";
class ContainerSec extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            currentVideo:[],
            onSeachText : ''
        };
        this.videoSearchFn('India News')
    }
    videoSearchFn(term){
        youtubeSearch(term, opts, (err, results) => {
            if(err) return console.log(err);
                this.setState({
                    videos:results,
                    currentVideo:results[0]
                });
                //console.dir(results);
          });
    }
    render(){
        const videoSearch = _.debounce((term)=> {this.videoSearchFn(term)}, 300);
        return (
            <Container>
                <Row>
                    <Col xs="12"> 
                        <SearchSec  onSearchText={videoSearch}/> 
                    </Col>
                </Row>
                <Row className="video-section">
                    <Col xs="12" lg="8" className="left-side">
                       <VideoSec currentVideo={this.state.currentVideo} />
                    </Col>
                    <Col xs="12" lg="4">
                        <VideoList 
                            onVideoSelect={currentVideo => this.setState({currentVideo})}
                            videos={this.state.videos} />
                    </Col>
                </Row>
            </Container>
        );
    }
    // componentDidMount(){
    //     console.log('componentDidMount call');
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate');
    // }
}
export default ContainerSec;