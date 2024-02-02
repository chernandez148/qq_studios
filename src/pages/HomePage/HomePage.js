import React from 'react';
import QQS from '../../assets/QQS.png';
import earth from '../../assets/earth-sphere.png';
import location from '../../assets/location.png'
import './styles.css';

function HomePage({ fadeIn }) {
    return (
        <div className='HomePage'>
            <div className='logo-text'>
                <h1>QQS</h1>
            </div>
            <div className='location'>
                <div className='location-wrapper'>
                    <img
                        className='location-name'
                        src={location}
                        width={200}
                    />
                    <div className="stack" style={{ '--stacks': 3 }}>
                        <span style={{ '--index': 0 }}><img src={earth} width={600} alt='earth' /></span>
                        <span style={{ '--index': 1 }}><img src={earth} width={600} alt='earth' /></span>
                        <span style={{ '--index': 2 }}><img src={earth} width={600} alt='earth' /></span>
                        <span style={{ '--index': 0 }}><img className='offset-glitch' src={earth} width={600} alt='earth' /></span>
                        <span style={{ '--index': 1 }}><img className='offset-glitch' src={earth} width={600} alt='earth' /></span>
                        <span style={{ '--index': 2 }}><img className='offset-glitch' src={earth} width={600} alt='earth' /></span>
                    </div>
                </div>
            </div>
            <div className='learn-more'>
                <p>
                    We are a digital marketing and website design agency. Based in Southern California, dedicated to turning your online aspirations into realities.
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default HomePage;
