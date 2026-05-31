import { useState } from 'react';
function App4 (){
    //let text ='rose';
    const [text,setText] = useState('rose');
    const showText = ()=>{
        //text = 'Abigail';
        setText('Abigail');
        console.log(text);
    };
    // const [username,setUsername] = useState("");
    // const handleSubmit = (ev)=>{
    //     ev.preventDefault();
    //     alert(`hi ${username}`);
    // };
    const [inputs,setInputs] = useState({});
    const handleSubmit = (ev)=>{
        ev.preventDefault();
    };
    const handleChange = (ev)=>{debugger
        const name = ev.target.name;
        const value = ev.target.value;
        setInputs(values=> ({...values, [name]:value}));
        console.log(inputs);
    };
    return (
     <>
     <button onClick={showText}>click me</button>
     <p>{text}</p>
     {/* <form onSubmit={handleSubmit} >
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
        <input type="submit" value="ارسال"  />
     </form> */}
     <form onSubmit={handleSubmit} >
        <input type='text' placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
        <input type='email' placeholder='email' name='email' value={inputs.email} onChange={handleChange} />
        <input type="submit" value="ارسال"  />
     </form>
     </>   
    );
}
export default App4;
