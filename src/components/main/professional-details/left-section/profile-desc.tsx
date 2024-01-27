import React from "react"
import RunningProfileDescription from "./running-profile-desc/running-profile-description"
import AboutDesc from "./about-desc/about-desc"

const ProfileDescription = () => {
    return(
        <React.Fragment>
            <RunningProfileDescription />
            <AboutDesc />
        </React.Fragment>
    )
}

export default ProfileDescription