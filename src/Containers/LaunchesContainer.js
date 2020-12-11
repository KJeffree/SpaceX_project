import React, {useEffect, useState} from 'react'
import LaunchesList from '../Components/LaunchesList'

const LaunchesContainer = (props) => {

    const [launches, setLaunches] = useState([])
    const [rockets, setRockets] = useState([])
    // const [selectedYear, setSelectedYear] = useState(null)
    // const [sortAscending, setSortAscending] = useState(true)

    useEffect(() => {
        fetchLaunchData()
        fetchRocketData()
    }, [])

    const fetchLaunchData = () => {
        fetch("https://api.spacexdata.com/v4/launches")
            .then(response => response.json())
            .then(launches => setLaunches(launches))
    }

    const fetchRocketData = () => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(response => response.json())
            .then(rockets => setRockets(rockets))
    }
    
    return(
        <LaunchesList launches={launches} rockets={rockets}></LaunchesList>
    )
}

export default LaunchesContainer