import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const LaunchItem = (props) => {
    return (
        <React.Fragment>
            <div className="launch-information">
                <h3 className="flight-number">#{props.launch.flight_number}</h3>
                <h3 className="launch-name">{props.launch.name}</h3>
                <div>
                    <p className="launch-date"><Moment format="DD MMM YYYY">{props.launch.date_utc}</Moment></p>
                    <h4 className="rocket-name">{props.rocket.name}</h4>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}

LaunchItem.propTypes = {
    rocket: PropTypes.object,
    launch: PropTypes.object
}

export default LaunchItem