import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPlayers = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/players.json');
        dispatch({type: 'FETCH_PLAYERS', payload: response.data})
    }
}

//Action Creator
export const searchedPlayerTerm = (term) =>{
    //return action
    return {
        type: 'SEARCHED_TERM',
        payload: term
    };
}
