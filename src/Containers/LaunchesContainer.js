import React, {useEffect, useState} from 'react'
import launchImage from '../public/assets/img/launch-home.png'
import LaunchesList from '../Components/LaunchesList'
import MenuItems from '../Components/MenuItems'

const LaunchesContainer = (props) => {

    const [launches, setLaunches] = useState([])
    const [rockets, setRockets] = useState([])
    const [selectedYear, setSelectedYear] = useState("All Years")
    const [sortAscending, setSortAscending] = useState(true)

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

    const onSortButtonClick = () => {
        setSortAscending(!sortAscending)
    }

    const getLaunchesToDisplay = () => {
        let launchesArray = launches
        if (selectedYear !== "All Years"){
            launchesArray = launchesArray.filter(launch => launch.date_utc.substring(0, 4) === selectedYear)
        }
        if (sortAscending){
            launchesArray = launchesArray.sort((a, b) => new Date(a.date_utc) - new Date(b.date_utc))
        } else {
            launchesArray = launchesArray.sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc))
        }
        return launchesArray
    }

    const onYearSelected = (event) => {
        setSelectedYear(event.target.value)
    }

    const resetSelectedYear = () => {
        setSelectedYear("All Years")
    }

    return(
        <>
        <MenuItems 
            fetchLaunchData={fetchLaunchData}
            resetSelectedYear={resetSelectedYear}
            onYearSelected={onYearSelected}
            onSortButtonClick={onSortButtonClick}
            launches={launches}
            selectedYear={selectedYear}
            sortAscending={sortAscending}
        ></MenuItems>
        <div className="main-section">
            <img src={launchImage} alt="rocket launch" className="launch-image"></img>
            <LaunchesList launches={getLaunchesToDisplay()} rockets={rockets}></LaunchesList>
        </div>
            
        </>
    )
}

export default LaunchesContainer