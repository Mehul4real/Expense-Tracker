import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const Transaction = ({data}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = data.amount<0 ?'-':'+';
    return (
        <li className={data.amount<0 ? "minus" : "plus"} >
            {data.text} <span>{sign}₹{Math.abs(data.amount)}</span>
            <button onClick={()=>deleteTransaction(data.id)} className="delete-btn">x</button>
        </li>
    )
}
