import React,{useContext} from 'react'
import CompC from './CompC'
import {firstName,lastName} from './App'

const CompB =()=>{
    const fname = useContext(firstName)
    const lname = useContext(lastName)
    return(
        <div>
            <h4>I am Comp B</h4>
            <p>My name is {fname} {lname} From Comp B </p>
            <CompC/>

        </div>
    )
}

export default CompB