import {combineReducers} from 'redux';

let playersData = [];
const players = (players = {data: []}, action) =>{
    switch (action.type) {
        case 'FETCH_PLAYERS':
            playersData = action.payload;
            return {...players, data: action.payload};
        case 'SEARCHED_TERM':
            const term = action.payload;
            if (!term) return {...players, data: playersData};
            const filteredPlayers = players.data.filter((player) => player.name.trim().toLowerCase().includes(term));
            return {...players, data: filteredPlayers};
        default:
            return players;
    }

}

const allReducers = combineReducers({
    players: players
});

export default allReducers;
