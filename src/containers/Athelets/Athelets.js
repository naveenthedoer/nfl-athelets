import React, { Component } from 'react';

import './Athelets.scss';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import AthletesList from "../../components/AthletesList/AthletesList";

class Athelets extends Component {
    render() {
        return (
            <div className="Athelets-Container">
                <Navbar />
                <div className="Main-Container">
                    <div className="Sidebar-Component">
                        <Sidebar />
                    </div>
                    <div className="Display-Container">
                        <SecondNavbar />
                        <AthletesList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Athelets;