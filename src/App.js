import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderDate } from './components/SliderDate';

function App() {
  return (
    <div className="App">
      
        <ImageSlider slides ={SliderDate}/>
    </div>
  );
}

export default App;
