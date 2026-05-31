import './App-3.css';
import styles from './App-3.module.css';
function App3() {
    const cars =['Ford','BMW','Audi','Porsche'];
    const newCars = [
        {id:1,brand:'Ford'},
        {id:2,brand:'BMW'},
        {id:3,brand:'Audi'}
    ];
    const styleSheet = {
        color:'red',
        backgroundColor:'#ccc'
    };
    return (
        <>
        <p className={styles.test} >test css module</p>
        <p style={styleSheet} >lorem</p>
        <p className='test' style={{ color:'red' ,backgroundColor:'#ccc' }} >lorem test</p>
        {cars.map((item,index) => <Child key={index} />)}
        {newCars.map(item => <Child key={item.id} brand={item.brand} />)}
        </>
    );
}
export default App3;
function Child(props) {
    return (
        <>
        <p>{props.brand ? props.brand : 'Child' }</p>
        </>
    );
}
