import logo from './logo.svg';
import './App.css';
import imgsrc from "./imgsrc.jpg"

function App() {
  return (
    <>
  
      <div className='main' style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 class="title red">wael khaldi</h1>
        <br/>
        <img src={imgsrc} className='profile'/>
        <br/>
        <img src="./img public.jpg"/>
      </div>

       <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
  
    </>
  );
}

export default App;
