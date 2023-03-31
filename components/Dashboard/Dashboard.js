import React from 'react'
import classes from './Dashboard.module.css'
import DashHeader from './DashHeader/DashHeader'
import Navigation from './Navigation/Navigation'

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
        <div className={classes.nav}>
            <Navigation/>
        </div>
        <div className={classes.other}>
            <header><DashHeader/></header>
            <div className={classes.main}>

            </div>
        </div>
    </div>
  )
}

export default Dashboard