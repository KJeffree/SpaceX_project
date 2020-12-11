import React from 'react'
import PropTypes from 'prop-types'
import LaunchItem from './LaunchItem'

const LaunchesList = (props) => {

    const findRocket = (rocketID) => {
        for (let rocket of props.rockets){
            if (rocket.id === rocketID){
                return rocket
            }
        }
        return null
    }

    const launchNodes = props.launches.map((launch, index) => {
        return <LaunchItem key={launch.id} launch={props.launches[index]} rocket={findRocket(launch.rocket)}></LaunchItem>
    })
    return(
        <div className="launch-list">
            {launchNodes}
        </div>
    )
}

LaunchesList.propTypes = {
    rockets: PropTypes.array,
    launches: PropTypes.array
}

export default LaunchesList