import React from 'react';
import './SeasonDisplay.css'
const getSeason=(lat, month)=> {
    if (month>2 && month <9) {
    return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat>0 ? 'winter': 'summer';
    }
}

const SeasonDisplay=(props)=>{
    const season=getSeason(props.lat, new Date().getMonth);
    const currentSeason=season==='winter'?`it's Chilly`: `Let's hit the beach`;
    const seasonIcon=season==='winter'? 'snowflake' : 'sun';


    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${seasonIcon} icon`} />
        <h1>{currentSeason}</h1>
        <i className={`icon-right massive ${seasonIcon} icon`} />
        </div>
}
export default SeasonDisplay; 