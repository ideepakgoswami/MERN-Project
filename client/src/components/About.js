import React from 'react'
// import userImg from '../../src/userImg.jfif'

const About = () => {
    return (
        <>
            <div class="card">
                {/* <img src={userImg} class="card-img-top" alt="User" /> */}
                <div class="card-body">
                    <h5 class="card-title">User Name</h5>
                    <p class="card-text">User Bio</p>
                    <a href="/" class="btn btn-primary">View Profile</a>
                </div>
            </div>

        </>
    )
}

export default About