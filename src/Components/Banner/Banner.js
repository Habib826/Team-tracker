import React from 'react';
import './Banner.css'
import BannerImage from '../../Photo/stadium.jpeg'
const Banner = (props) => {
    console.log(props.team)

    const styles = {
        header: {
          backgroundImage: `url(${BannerImage})`,
          width:'100%',
          height: '50vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      }
    return (
        <header className="banner-header" style={styles.header}>
            {/* <img className="banner" src={BannerImage} alt="Five developers at work."/> */}
            {/* <section class='hero-header-text'>
                
            </section> */}
            <h1>Team tracker</h1>
         </header>
    );
};

export default Banner;