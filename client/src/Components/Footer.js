import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333333',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        borderTop: '2px solid #ffcc00',
 
    };

    const linkStyle = {
        color: 'white',
        cursor: 'pointer',
        margin: '0 10px',
        fontSize: '16px',
        transition: 'color 0.3s',
    };

    const socialStyle = {
        marginTop: '10px',
    };

    const handleLinkClick = (section) => {
        alert(`Vous avez cliqué sur ${section}`);
    };

    return (
        <div style={footerStyle}>
            <div>
                <span style={linkStyle} onClick={() => handleLinkClick('À propos')}>À propos</span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Offres d\'emploi')}>Offres d'emploi</span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Candidats')}>Candidats</span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Employeurs')}>Employeurs</span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Ressources')}>Ressources</span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Contact')}>Contact</span>
            </div>
            <div style={socialStyle}>
                <span style={linkStyle} onClick={() => handleLinkClick('Facebook')}>
                    <i className="fab fa-facebook"></i> Facebook
                </span> |
                <span style={linkStyle} onClick={() => handleLinkClick('LinkedIn')}>
                    <i className="fab fa-linkedin"></i> LinkedIn
                </span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Twitter')}>
                    <i className="fab fa-twitter"></i> Twitter
                </span> |
                <span style={linkStyle} onClick={() => handleLinkClick('Instagram')}>
                    <i className="fab fa-instagram"></i> Instagram
                </span>
            </div>
        </div>
    );
};

export default Footer;
