import React from 'react'

const LaunchItem = (props) => {
    return (
        <React.Fragment>
            <p>Launch name: {props.launch.name}</p>
            <p>Rocket name: {props.rocket.name}</p>
            <p>Launch date: {props.launch.date_utc}</p>
            <p>Flight number: #{props.launch.flight_number}</p>
        </React.Fragment>
        
    )
}

export default LaunchItem