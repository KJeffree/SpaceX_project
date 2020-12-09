import React from 'react'
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
        <React.Fragment>
            {launchNodes}
        </React.Fragment>
    )
}

export default LaunchesList