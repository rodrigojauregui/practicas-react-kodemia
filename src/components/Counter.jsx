
import React,{ useState, useEffect } from "react"

function Counter(){

    const [counter, setCounter] = useState(0)
    

    useEffect( ()=>{
        console.log('did mount')
    },[])
    useEffect( ()=>{
        console.log('did update all')
    })
    
    useEffect( ()=>{
        console.log('dis update counter')
    },[counter])



    const modifyCounter = (action) => {
        if (action === 'increment'){
            const newCounter = counter +1
            setCounter(newCounter)
            return
        } const newCounter = counter -1
            setCounter(newCounter)
            return
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>{counter}</p>
                    <button onClick={() => modifyCounter("increment")} className="btn btn-primary">+</button>
                    <button onClick={() => modifyCounter("decrement")} className="btn btn-danger">-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;