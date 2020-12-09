import React from 'react'
import Moment from 'react-moment'

const LaunchItem = (props) => {
    return (
        <React.Fragment>
            <p>Launch name: {props.launch.name}</p>
            <p>Rocket name: {props.rocket.name}</p>
            <p>Launch date: <Moment format="DD MMM YYYY">{props.launch.date_utc}</Moment></p>
            <p>Flight number: #{props.launch.flight_number}</p>
        </React.Fragment>
        
    )
}

export default LaunchItem