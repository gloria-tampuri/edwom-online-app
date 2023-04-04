import React, {useState} from 'react'
import classes from './ItemEdit.module.css'

const ItemEdit = () => {
    const [itemName, setItemName] = useState('')
    const [aisle, setAisle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [pricePer, setPricePer] = useState('')
    const [photo,setPhoto]=useState('')
    const[inSeason,setInSeason]=useState('')
    const[inStock,setInStock]=useState('')
    const[onSale,setOnSale]=useState('')


    const formSubmitHandler=(e)=>{
        e.preventDefault()

      const formData={
            itemName:itemName,
            aisle:aisle,
            category:category,
            price:price,
            pricePer:pricePer,
            photo:photo,
            inStock:inStock,
            inSeason:inSeason,
            onSale:onSale
        }

        console.log(formData);
    }



    console.log(itemName);
    return (
        <div className={classes.form}>
            <h3>UPDATE ITEM</h3>

            <form onSubmit={formSubmitHandler} className={classes.forms}>
                <div className={classes.section}>
                    <label>Item name</label>
                    <input
                        placeholder='item name'
                        type='text'
                        value={itemName}
                        onChange={(e) => { setItemName(e.target.value) }}
                    />
                </div>

                <div className={classes.section}>
                    <label>Aisle Name</label>
                    <input
                        placeholder='item aisle'
                        type='text'
                        value={aisle}
                        onChange={(e) => { setAisle(e.target.value) }}
                    />
                </div>

                <div className={classes.section}>
                    <label>Item Category</label>
                    <input
                        placeholder='item category'
                        type='text'
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }}
                    />
                </div>

                <div className={classes.section}>
                    <label>Price</label>
                    <input
                        placeholder='price'
                        type='number'
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>

                <div className={classes.section}>
                    <label>Price Per(1/lb/kg)</label>
                    <input
                        placeholder='price per'
                        type='text'
                        value={pricePer}
                        onChange={(e) => { setPricePer(e.target.value) }}
                    />
                </div>

                <div className={classes.section}>
                    <label htmlFor='photo'>Add Item Photo</label>
                    <input type="file"
                        id="photo" name="photo"
                        accept="image/png, image/jpeg"
                        onChange={(e)=>{setPhoto(e.target.value)}}
                        value={photo}
                        />
                </div>
                <div className={classes.section}>
                    <label>In Season?</label>
                    <select  onChange={(e)=>{setInSeason(e.target.value)}}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                    </select>
                </div>
                

                <div className={classes.section}>
                <label>In Stock?</label>
                    <select  onChange={(e)=>{setInStock(e.target.value)}}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                    </select>
                </div>

                <div className={classes.section}>
                <label>On Sale?</label>
                    <select onChange={(e)=>{setOnSale(e.target.value)}}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>
                <button>Update Item</button>
            </form>
        </div>
    )
}

export default ItemEdit