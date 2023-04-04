import React from 'react'
import classes from './DashHeader.module.css'
import {BsSearch} from 'react-icons/bs'

const DashHeader = () => {
  return (
    <div>
      <div className={classes.search}>
        <input type='text' placeholder='search here...'/>
        <BsSearch/>
      </div>
    </div>
  )
}

export default DashHeader