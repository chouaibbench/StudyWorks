import { useState } from "react";

export default  function  Counter() {

    const [count, setCount] = useState(0);

    console.log(count)

    function handleAdd(){

        setCount(count+1)
        setCount(prev=>prev+1)

    }
    return (

        <div>

            <h1  >count : {count}</h1>
            <button  onClick={handleAdd}>add to increase</button>
            

        </div>

    )


};