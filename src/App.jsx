import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import QuoteBox from './components/QuoteBox';
import quote from './quote.json';

function App() {
  const indexRandom= Math.floor(Math.random() * quote.length);
  const [phrase,setPhrase]=useState(quote[indexRandom]);
  const arrayColors=['#CEECF5','#585858', '#04B404', '#F6CED8', '#FF4000', '#FF4000'];
  const indexRandomColor= Math.floor(Math.random() * arrayColors.length);
  const [color,setColor]= useState(arrayColors[indexRandomColor]);

  const aleatorio = () =>{
   setPhrase(quote[Math.floor(Math.random() * quote.length)]);
   setColor(arrayColors[Math.floor(Math.random() * arrayColors.length)]);
  }

  document.body.style=`background:${color}`;

  return (
    <div className="App" >
      <div className='quoteBox' style={{color:color}}>
        <QuoteBox phrase={phrase.quote} author={phrase.author} color={color} />
        <Button color={color} aleatorio={aleatorio} /> 
        {/* <button onClick={aleatorio} >holaaa</button> */}
      </div>
      
    </div>
  )
}

export default App
