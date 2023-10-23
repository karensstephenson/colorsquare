import Square from './Square';
import InputBox from './InputBox';
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('')
  
  return (
    <main>
      <Square 
        bgColor={bgColor}
      />
      <InputBox
        bgColor={bgColor}
        setBgColor={setBgColor}
        
      
      />
    </main>
    
  );
}

export default App;
