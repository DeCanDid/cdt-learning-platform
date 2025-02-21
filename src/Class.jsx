import Mystyle from './Mystyle';
import './Style.css';

function Class(){

    let myName = 'Mr. Ola';
    

    return(
        <>
            <h1 style={{backgroundColor:'blue'}}>Hello {myName}</h1>
            <h2 style={Mystyle.headerStyle}>{2*5}</h2>
            <h3>{Math.random()}</h3>
            <h4 className='firstH4'>{myName.split('')}</h4>
            <h4>Anther h4 tag</h4>
            
        </>
    )
}
export default Class;