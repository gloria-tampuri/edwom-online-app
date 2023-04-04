import React from 'react'
import classes from './Dashboard.module.css'
import DashHeader from './DashHeader/DashHeader'
import Navigation from './Navigation/Navigation'
import AppSummary from './AppSummary/AppSummary'
import AddItem from './AddItem/AddItem'


const Dashboard = ({children}) => {
  return (
    <div className={classes.dashboard}>
        <div className={classes.nav}>
            <Navigation/>
        </div>
        <div className={classes.other}>
            <header><DashHeader/></header>
            <div className={classes.main}>
            {children}
            </div>
        </div>
    </div>
  )
}

export default Dashboard