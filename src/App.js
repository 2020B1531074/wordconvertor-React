
import './App.css';
import Navbar from './Mycomponent/Navbar';
import Textform from './Mycomponent/Textform';
// import About from './Mycomponent/About';


function App() {
  return (
    <>
       {/* <Navbar title="TextUtils1" aboutText="About TextUtils" /> */}
       <Navbar />
       <div className="container">
        <Textform heading="Enter the text to analyze" />
        {/* <About /> */}
       </div>
      



    </>
  );
}

export default App;
