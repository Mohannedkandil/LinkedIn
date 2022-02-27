import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Sidebar.css";

function Sidebar() {

    // Function for LinkedIn topics that returns a div with the input topic
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQF1cxa_sKbLaQ/profile-displaybackgroundimage-shrink_350_1400/0/1642750398853?e=1651708800&v=beta&t=BUV5XnEhznhoipA86djpRtKsjrE5MjeMB9QsDX0A9U0" alt="" />
                <Avatar className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQGQUVcsHbR6-g/profile-displayphoto-shrink_200_200/0/1642449491829?e=1651708800&v=beta&t=YATZhxnfHCigFlDOOrMFDqodBZhW-cyOg-ymXZqvOek" />
                <h2>Mohanad Kandil</h2>
                <h4>Mohanadmkandil@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,300
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('developer')}
                {recentItem('indiehacker')}
            </div>
        </div>
    );
}

export default Sidebar