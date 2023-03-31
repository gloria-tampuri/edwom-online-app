import React from 'react'
import classes from './Navigation.module.css'
import {MdOutlineDashboard, MdAddShoppingCart,MdOutlineCancelScheduleSend,MdPendingActions} from 'react-icons/md'
import {GiRaddish} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'

const Navigation = () => {
  return (
    <div>
        <header className={classes.header}>
            <h2>Edwom Online</h2>
            <hr/>
        </header>
        <div className={classes.nav} >
            <div className={classes.section}>
                <MdOutlineDashboard/>
                <span>Dashboard</span>
            </div>
            <div className={classes.section}>
                <MdAddShoppingCart/>
                <span>Total Orders</span>
            </div>
            <div className={classes.section}>
                <GiRaddish/>
                <span>Add Item </span>
            </div>
            <div className={classes.section}>
                <TbTruckDelivery/>
                <span>Delivered</span>
            </div>
            <div className={classes.section}>
                <MdPendingActions/>
                <span>Pending</span>
            </div>
            <div className={classes.section}>
                <MdOutlineCancelScheduleSend/>
                <span>Canceled</span>
            </div>
            
        </div>
    </div>
  )
}

export default Navigation