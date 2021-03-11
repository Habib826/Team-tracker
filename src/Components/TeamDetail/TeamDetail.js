import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router';
import malePhoto from '../../Photo/male.png';
import femalePhoto from '../../Photo/female.png';
import FacebookLogo from '../../Photo/Facebook.png';
import TwitterLogo from '../../Photo/Twitter.png';
import YouTubeLogo from '../../Photo/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faMarsStroke, faMapMarkerAlt, faFlag } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './TeamDetail.css'

const TeamDetail = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
        console.log(detail.strTwitter)
    }, []);
    const styles = {
        header: {
            backgroundImage: `url(${detail.strTeamBanner})`,
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },

        logo: {
            height: '200px',
            width: 'auto',
            textAlign: 'center',
        }
    }
    return (
        <div>

            <div className="team-header " style={styles.header}>
                <div className="logo" style={styles.logo}>
                    <img className="img-fluid" src={detail.strTeamLogo} alt="" />
                </div>
            </div>

            <Container>
                <div className="detail mt-5 p-3">
                    <Row>
                        <Col sm={6}>
                            <h2>{detail.strTeam}</h2>
                            <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Year: {detail.intFormedYear} </h3>
                            <h3><FontAwesomeIcon icon={faFlag} /> Country: {detail.strCountry}</h3>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {detail.strSport}</p>
                            <h3> <FontAwesomeIcon icon={faMarsStroke} /> Gender: {detail.strGender}</h3>
                        </Col>
                        <Col sm={6}>

                            {
                                detail.strGender === 'Male' ?
                                    <img className="img-fluid" src={malePhoto} alt="" /> : <img src={femalePhoto} alt="" />
                            }
                        </Col>
                    </Row>
                </div>
            </Container>


            <div className="description">
                <p className="detail-paragraph">{detail.strDescriptionEN}</p>
            </div>
            <div className="social-link">
                <a href={`https://${detail.strFacebook}`} target="_blank" rel="noreferrer">
                    <img className="social-image" src={FacebookLogo} alt="" />

                </a>
                <a href={`https://${detail.strTwitter}`} target="_blank" rel="noreferrer">
                    <img className="social-image" src={TwitterLogo} alt="" />
                </a>
                <a href={`https://${detail.strYoutube}`} target="_blank" rel="noreferrer">
                    <img className="social-image" src={YouTubeLogo} alt="" />
                </a>
            </div>


        </div>
    );
};

export default TeamDetail;