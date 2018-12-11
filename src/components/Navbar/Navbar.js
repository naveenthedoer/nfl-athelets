import React, {Component} from 'react';

import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar-Container">
                <div className="Logo-Container">
                    <div className="Logo-Name">BALLPRK</div>
                </div>
                <div className="Navbar-Content">
                    <div className="Search">
                        <i className="fas fa-search" />
                    </div>
                    <div className="Newsfeed">Newsfeed</div>
                    <div className="Explore">Explore</div>
                    <div className="Barcode">
                        <i className="fas fa-barcode" />
                    </div>
                    <div className="Vertical-Line" />
                    <div className="Bag">
                        <i className="fas fa-briefcase" />
                    </div>
                    <div className="Notification">
                        <i className="far fa-bell" />
                    </div>
                    <div className="User">
                        <i className="fas fa-user-circle" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;