import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (                            
                <div className='row'>
                    <div className="col m12 center-align">
                        HOME COMPONENT
                    </div>
                </div>
            
        )
    }
}
