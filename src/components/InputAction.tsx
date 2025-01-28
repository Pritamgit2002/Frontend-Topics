import React, {useState} from 'react';
import { Button } from './ui/button';

export default function InputAction() {
    const [text, setText] = useState('');
    const [buttonData, setButtondata] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleClick = () =>{
        setButtondata(text)
    }
  return (
      <div >
              <h1>Hello</h1>
              <input
                      type = "text"
                      value ={text}
                      onChange = {handleChange}
                      placeholder='Type Something'
                />
              <span>Your text: {text}</span>
              <br/>
          <Button onClick={handleClick}>Click Here</Button>
          <br/>
          <span>Your text from button: {buttonData}</span>    
      </div>
  )
}
