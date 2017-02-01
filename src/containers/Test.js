import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';


export default class Test extends React.Component {
    constructor(props) {
        super(props);  
        
    }

    componentDidMount(){
        console.log(this.props.user);
    }

    render() {
        console.log("RENDER:", this.props.user);
        return (                            
                <div className='row'>
                    <div className="col m12 center-align">
                        {this.props.user.uid}
                    </div>
                </div>            
        )
    }
}
