import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Teams = () => {
    const [teams, setTeams]= useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=> res.json())
        .then(data =>setTeams(data.teams))
    },[]);
    return (
        <div>
            <Banner> </Banner>
            <div className="home">
            <div className='row team-container'>
            {
                teams.map(team =><Team team={team}></Team>)
            }
            </div>
            </div>
        </div>
    );
};

export default Teams;