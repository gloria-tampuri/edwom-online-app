import React from 'react'
import classes from './ItemsList.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ItemsList = () => {
  const listsOfItems=[
      {
        itemName:'tomatoes',
        id:1,
      },
      {
        itemName:'peper',
        id:2,
      }
      ,  {
        itemName:'rice',
        id:3,
      },
      {
        itemName:'corn',
        id:4,
      }
  ]
  
  return (
    <div className={classes.list}>
      <h3>List of Items</h3>

    {listsOfItems && listsOfItems.map((item)=>  <div key={item.id}>
        <div className={classes.item}>
        <h4>{item.itemName}</h4>
        <div className={classes.action}>
        <Link className={classes.edit} href={`/dashboard/additem/${item.id}`}> Edit</Link>
        <p className={classes.delete}>Delete</p>
        </div>
        </div>
      </div>)}
    </div>
  )
}

export default ItemsList