import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {searchedPlayerTerm, fetchPlayers} from '../../actions';
import AthleteCard from '../../components/AthleteCard/AthleteCard';
import './AthletesList.scss';

class AthletesList extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    renderList = () => {
        if (this.props.players.data.length === 0) {
            return 'No Data Found';
        }
        return this.props.players.data.map((player, index) => {
            return <AthleteCard player={player} key={player.id}/>
        });
    }

    render() {
        return (
            <div className="AthletesList-Container">
                <div className="Recommend-Share-Mention">
                    <div className="Recommend">
                        <i className="far fa-thumbs-up" /> Recommend
                    </div>
                    <div className="Share">
                        <i className="far fa-paper-plane" /> Share
                    </div>
                    <div className="Empty-Space" />
                    <div className="Mention">
                        <span>@</span> Mention
                    </div>
                </div>
                <div className="Search-Container">
                    <input type="text" onChange={(e) => this.props.searchedPlayerTerm(e.target.value)} />
                    <i className="fas fa-search" />
                </div>
                <div className="All-Cards">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        players: state.players
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchedPlayerTerm, fetchPlayers}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AthletesList);
