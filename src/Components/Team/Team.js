import { useHistory } from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Team.css'

const Team = (props) => {
    const { strTeam, strTeamLogo, idTeam , strSport} = props.team
    const history = useHistory()
    const teamId = (idTeam) => {
        const url = `/teamDetail/${idTeam}`
        history?.push(url)
    }
    return (
        
                        <div className="col-md-3 d-flex justify-content-between container team-container">
                            <div className="bg-light mt-3 pb-3 main">
                            <img className="card-img-top" src={strTeamLogo} alt="Card" />
                            <h5 className="card-title">{strTeam}</h5>
                            <p>Sport Type: {strSport}</p>
                            <button className="btn btn-danger" onClick={() => teamId(idTeam)}>Explore</button>
                        </div>

                      </div>

    )
};

export default Team;