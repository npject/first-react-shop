import { useState } from "react";
import Loading from "../share/loading";
function Home (){
    const [number,setNumber] = useState(0);
    const handleClick = ()=>{
        setNumber(prevNumber => prevNumber +1);
    };
    return (
        <>
        <h1>Home</h1>
        <button onClick={handleClick}>
            add to number
        </button>
        {number}
        {/* <Loading /> */}
        </>
    );
}
export default Home;