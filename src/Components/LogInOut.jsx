import React from 'react';
import './style.css';

const LogInOut = () => {
    const loginwithgoogle = () => {
        window.open("https://rohans-portfolio-server.vercel.app/auth/google", "_self");
    }
    const onMouseOver = () => {
        document.getElementById('LogInGoogle').style.color='#094acd';
    }
    const onMouseOut = () => {
        document.getElementById('LogInGoogle').style.color='rgba(255, 255, 255, 0.697)';
    }

    return (
        <div id='LogInOut-sec'>
            <div id='LogInOut'>
                <div id='LogInOut-div'>
                    <img src="p-img.png" alt="Profile_Img" />
                    <span style={{ boxShadow: '0px 0px 15px 0px #094acd' }}></span>
                    <img src="GoogleLogo.png" alt="GoogleLogo" />
                </div>
                <span style={{ fontSize: '1.2vw' }}><i className="fa fa-sign-in"></i> Login To <span style={{color:'#094acd'}}>Rohan's Portfolio</span>  With</span>
                <span onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={loginwithgoogle} style={{ textAlign:'center', boxShadow: '0px 0px 15px 0px #094acd', borderRadius: '2vw', padding: '0.3vw', fontSize: '1.2vw', width:'15vw' }}><i className="fa fa-google"></i> <span id='LogInGoogle'>G</span>oogle</span>
            </div>
        </div>
    );
}

export default LogInOut;
