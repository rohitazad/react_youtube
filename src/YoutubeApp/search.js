import React, {Component} from 'react';
import { Form, FormGroup,  Input } from 'reactstrap';

export default class SearchSec extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
        //console.log('onSearchText', props);
    }
    render(){
        return (
            <Form>
                {/* {console.log('onSearchText--', this.props)} */}
                <FormGroup>
                    <Input
                        value={this.state.term} 
                        onChange={event => this.onInputChange(event.target.value)}
                        type="text" 
                        name="search" 
                        id="searchText" 
                        placeholder="write any text" />
                </FormGroup>
            </Form>
        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchText(term);
    }
}