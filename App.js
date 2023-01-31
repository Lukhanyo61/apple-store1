
import './App.css';
import logo from './img/Capture-removebg-preview.png'
import home from './img/laptop.png'
import pc1 from './img/pc1.PNG'
import pc2 from './img/pc2.PNG'
import pc3 from './img/pc3.PNG'
import pc4 from './img/pc4.PNG'
import pc5 from './img/pc5.PNG'
import pc6 from './img/pc6.PNG'
import pc7 from './img/pc7.PNG'
import pc8 from './img/pc8.PNG'

function App() {
  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
  <img id='logo' src={logo} alt="harry potter" style={{ width: '19px '  , }}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        &&&&&&&&
        <a class="nav-link active" aria-current="page" href="/">Mac</a>
        
        <a class="nav-link active" href="/">ipad</a>
        &&
        <a class="nav-link active" href="/">iphone</a>
        &&
        <a class="nav-link active" href="/">Watch</a>
        &&
        <a class="nav-link active" href="/">Tv</a>
        &&
        <a class="nav-link active" href="/">Music</a>
        &&
        <a class="nav-link active" href="/">Support</a>
        &&
        <a class="nav-link active" href="/">Where to Buy</a>
        
      </div>
    </div>
  </div>
  <form action="">
  <input type="search" placeholder="Search here ..."/>
  <i class="fa fa-search"></i>
</form>
</nav>
<div id='belt'></div>
<img id='home' src={home} alt="harry potter" style={{ width: '900px '  , }}/>
<h1 id='new'>New</h1>
<h1 id='iphone'>MacBook Pro 13”</h1>
<h1 id='pro'>Pro everywhere.</h1>
<div id='whitebg'></div>

<p>Learn more</p>
  
<img id='pc1' src={pc1} alt="harry potter" style={{ width: '95px '  , }}/>

<img id='pc2' src={pc2} alt="harry potter" style={{ width: '95px '  , }}/>

<img id='pc3' src={pc3} alt="harry potter" style={{ width: '95px '  , }}/>

<img id='pc4' src={pc4} alt="harry potter" style={{ width: '95px '  , }}/>

<img id='pc5' src={pc5} alt="harry potter" style={{ width: '95px '  , }}/>
<img id='pc6' src={pc6} alt="harry potter" style={{ width: '95px '  , }}/>
<img id='pc7' src={pc7} alt="harry potter" style={{ width: '95px '  , }}/>
<img id='pc8' src={pc8} alt="harry potter" style={{ width: '95px '  , }}/>
<h1 id='word'>New
MacBook Pro 13”
Pro anywhere.</h1>
<button id='buy' type="button" class="btn btn-primary">Buy</button>
<p id='learn'>Learn More</p>
</div>


  );
}

export default App;
