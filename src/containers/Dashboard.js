import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (                            
                <div className='row'>
                    <div className="col m12 center-align">
                        DASHBOARD COMPONENT
                    </div>
                </div>
            
        )
    }
}
