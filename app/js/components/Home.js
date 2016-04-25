import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>RE03 Example</h2>

                <div className="row">
                    <div className="col-md-4">
                        Uses React for presentation
                    </div>
                    <div className="col-md-4">
                        Uses Redux for data management
                    </div>
                    <div className="col-md-4">
                        Uses Node backend, with NEDB as proxy database
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;