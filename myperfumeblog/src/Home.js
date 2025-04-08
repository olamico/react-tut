import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState ('Olaleye');
    const [age, setAge] = useState (10);
    const handleClick = () => {
        setName ('Micheal');
        setAge (33);
    }   
    


    const handleClickAgain = (name) => {
        console.log( 'hello '  + name);
    }
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => 
            handleClickAgain('Olusola')
            } >Click me again</button>
            
        </div>
     );
}
 
export default Home;