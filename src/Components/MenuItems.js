import React from 'react'
import logo from '../public/assets/spacex-logo.png'
import refreshIcon from '../public/assets/icon/refresh.png'
import sortIcon from '../public/assets/icon/sort.png'



const MenuItems = ({launches, selectedYear, onSortButtonClick, onYearSelected, resetSelectedYear, fetchLaunchData, sortAscending}) => {

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

    return (
        <>
        <div className="header">
            <div className="logo-title">
                <img className="logo" alt="SpaceX logo" src={logo}></img>
                <span className="page-name">LAUNCHES</span>
            </div>
            <button onClick={fetchLaunchData} className="button" id="reload-data-button">Reload Data<img alt="reload icon" className="icon" src={refreshIcon}></img></button>
        </div>
        <div className="filtering">
            <p className="filter-clear" hidden={selectedYear === "All Years"} onClick={resetSelectedYear}>Clear Filter x</p>
            <select className="button" onChange={onYearSelected} value={selectedYear}>
                <option value="All Years" disabled>Fliter by Year</option>
                {optionNodes()}
            </select>
            <button className="button" onClick={onSortButtonClick}>Sort {sortAscending ? "Descending" : "Ascending"}<img alt="sort icon" className="icon" src={sortIcon}></img></button>
        </div>
        </>
    )
}

export default MenuItems