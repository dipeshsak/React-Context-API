import React from 'react'
import {firstName,lastName} from './App'
const CompC =()=>{
    return(
        <firstName.Consumer>
             {(fname)=>{
                return (
                <lastName.Consumer>{(lname)=>{
                    return(<p>My name is : {fname} {lname} from Comp C</p>)
                }}</lastName.Consumer>
                
                
                
                )
            }}

        </firstName.Consumer>
    )
}

export default CompC