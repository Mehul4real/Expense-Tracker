import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    //console.log(context) 
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(item =>(
                    <Transaction key={item.id} data={item}/>
                ))}                
            </ul>
        </div>
    )
}
