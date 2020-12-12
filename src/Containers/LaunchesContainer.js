import React, {useEffect, useState} from 'react'
import logo from '../public/assets/spacex-logo.png'
import launchImage from '../public/assets/img/launch-home.png'
import refreshIcon from '../public/assets/icon/refresh.png'
import sortIcon from '../public/assets/icon/sort.png'
import LaunchesList from '../Components/LaunchesList'

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
        if (selectedYear != "All Years"){
            launchesArray = launchesArray.filter(launch => launch.date_utc.substring(0, 4) === selectedYear)
        }
        if (sortAscending){
            launchesArray = launchesArray.sort((a, b) => new Date(a.date_utc) - new Date(b.date_utc))
        } else {
            launchesArray = launchesArray.sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc))
        }
        return launchesArray
    }

    const getUniqueYears = () => {
        let uniqueYears = []
        let launchYears = launches.map(launch => launch.date_utc.substring(0, 4))
        launchYears.forEach(year => uniqueYears.includes(year) ? null : uniqueYears.push(year))
        return uniqueYears
    }

    const optionNodes = () => {
        const uniqueYears = getUniqueYears()
        return uniqueYears.map(year => <option value={year} key={year} >{year}</option>)
    }

    const onYearSelected = (event) => {
        setSelectedYear(event.target.value)
    }

    const resetSelectedYear = () => {
        setSelectedYear("All Years")
    }

    return(
        <>
        <div className="header">
            <div className="logo-title">
                <img className="logo" alt="SpaceX logo" src={logo}></img>
                <span className="page-name">LAUNCHES</span>
            </div>
            <button onClick={getUniqueYears} className="button" id="reload-data-button">Reload Data<img alt="reload icon" className="icon" src={refreshIcon}></img></button>
        </div>
        <div className="filtering">
            <p className="filter-clear" hidden={selectedYear === "All Years"} onClick={resetSelectedYear}>Clear Filter x</p>
            <select className="button" onChange={onYearSelected} value={selectedYear}>
                <option value="All Years" disabled>Fliter by Year</option>
                {optionNodes()}
            </select>
            <button className="button" onClick={onSortButtonClick}>Sort {sortAscending ? "Descending" : "Ascending"}<img alt="sort icon" className="icon" src={sortIcon}></img></button>
        </div>
        <div className="main-section">
            <img src={launchImage} alt="rocket launch" className="launch-image"></img>
            <LaunchesList launches={getLaunchesToDisplay()} rockets={rockets}></LaunchesList>
        </div>
            
        </>
    )
}

export default LaunchesContainer