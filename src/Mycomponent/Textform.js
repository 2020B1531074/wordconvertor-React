import React,{useState} from 'react'

const Textform = (props) => {
  const handleUpClick =()=>{
    console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick =()=>{
    console.log("uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick =()=>{
   
    let newText='';
    setText(newText)
  }
  const handleOnChange =(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const[text,setText]=useState('Enter text here');
 
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div class="mb-3">
  <label for="myBox" class="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="15"></textarea>
</div>
<button type="button" class="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
<button type="button" class="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
<button type="button" class="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.08*text.split(" ").length}MinutesRead</p>
      <h2>preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

export default Textform
