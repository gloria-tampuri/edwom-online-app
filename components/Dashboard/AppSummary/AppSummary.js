import React from 'react'
import classes from './AppSummary.module.css'
import { useRouter } from 'next/router'

const AppSummary = () => {
  const router=useRouter()
  return (
    <div className={classes.summary}>

      <div onClick={()=>router.push('/dashboard/totalorders')} className={`${classes.totalOrders} ${classes.section}`}>
        <h3>Total Orders</h3>
        <p>$1000</p>
      </div>

      <div onClick={()=>router.push('/dashboard/pending')} className={`${classes.pending} ${classes.section}`}>
        <h3>Pending Orders</h3>
        <p>10</p>
      </div>

      <div onClick={()=>router.push('/dashboard/delivered')} className={`${classes.delivered} ${classes.section}`}>
        <h3>Delivered Orders</h3>
        <p>200</p>
      </div>

      <div className={`${classes.amount} ${classes.section}`}>
        <h3>Total Amount</h3>
        <p>200000.00</p>
      </div>


    </div>
  )
}

export default AppSummary