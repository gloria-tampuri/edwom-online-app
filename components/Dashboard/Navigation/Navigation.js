import React from 'react'
import classes from './Navigation.module.css'
import {MdOutlineDashboard, MdAddShoppingCart,MdOutlineCancelScheduleSend,MdPendingActions} from 'react-icons/md'
import {GiRaddish} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'
import Link from 'next/link'
import Dashboard from '../Dashboard'

const Navigation = () => {
  return (
    <div>
        <header className={classes.header}>
            <h2>Edwom Online</h2>
            <hr/>
        </header>
        <div className={classes.nav} >
           <Link  className={classes.link} href='/dashboard'>
           <div className={classes.section}>
                <MdOutlineDashboard/>
                <span>Dashboard</span>
            </div>
           </Link>
            <Link  className={classes.link} href='/dashboard/totalorders'>
            <div className={classes.section}>
                <MdAddShoppingCart/>
                <span>Total Orders</span>
            </div>
            </Link>
            <Link  className={classes.link} href='/dashboard/additem'>
            <div className={classes.section}>
                <GiRaddish/>
                <span>Add Item </span>
            </div>
            </Link>
            <Link  className={classes.link} href='/dashboard/delivered'>
            <div className={classes.section}>
                <TbTruckDelivery/>
                <span>Delivered</span>
            </div>
            </Link>
            <Link  className={classes.link} href='/dashboard/pending'>
            <div className={classes.section}>
                <MdPendingActions/>
                <span>Pending</span>
            </div>
            </Link>
            <Link  className={classes.link} href='/dashboard/canceled'>
            <div className={classes.section}>
                <MdOutlineCancelScheduleSend/>
                <span>Canceled</span>
            </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Navigation