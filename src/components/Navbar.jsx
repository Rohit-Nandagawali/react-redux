import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import {BiHomeAlt2,BiHeart,BiCartAlt} from "react-icons/bi"

function Navbar() {
                    // subscribe to store.item
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);
    return (
        <nav className="bg-indigo-500 shadow-lg ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 gap-2">

                <Link to="/" className='text-white font-semibold text-3xl hover:underline mr-6'>
                   <BiHomeAlt2/>
                </Link>
                <Link to="/wishlist"  className='text-white font-semibold flex relative items-center text-3xl hover:underline mr-6'>
                    <BiHeart/><div className="text-xs absolute -top-3 right-0 ml-4">100</div></Link>
                <Link to="/cart"  className='text-white font-semibold text-3xl hover:underline'><BiCartAlt/></Link>
                <h1 className='text-white font-semibold text-xl ml-14'>Items : {cartItems.length}</h1>

            </div>
        </nav>

    )
}

export default Navbar