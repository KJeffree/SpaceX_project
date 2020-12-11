import React, {useEffect, useState} from 'react'
import logo from '../public/assets/spacex-logo.png'
import launchImage from '../public/assets/img/launch-home.png'
import refreshIcon from '../public/assets/icon/refresh.png'
import selectIcon from '../public/assets/icon/select.png'
import sortIcon from '../public/assets/icon/sort.png'
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
        <>
        <div className="header">
            <div className="logo-title">
                <img className="logo" alt="SpaceX logo" src={logo}></img>
                <span className="page-name">LAUNCHES</span>
            </div>
            <button className="reload-data-button"><b>Reload Data</b><img alt="reload icon" className="icon" src={refreshIcon}></img></button>
        </div>
        <div className="filtering">
            <button><b>Filter by Year</b><img alt="select icon" className="icon" src={selectIcon}></img></button>
            <button><b>Sort Descending</b><img alt="sort icon" className="icon" src={sortIcon}></img></button>
        </div>
        <div className="main-section">
            <img src={launchImage} alt="rocket launch" className="launch-image"></img>
            <LaunchesList launches={launches} rockets={rockets}></LaunchesList>
        </div>
            
        </>
    )
}

export default LaunchesContainer