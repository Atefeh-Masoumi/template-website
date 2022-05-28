import {ReactComponent as Svgbotom} from './SvgBot.svg';
import Particles from "react-tsparticles";
import './header.css';
// import'./style.css';


import { loadFull } from "tsparticles";
import img1 from '../assets/img/home-home-top.png';
import img2 from '../assets/img/contact-us-home-top.png';
import img3 from "../assets/img/article-singlepage-home-top.png";
import img4 from "../assets/img/about-us-home-top.png";
import img5 from "../assets/img/dashboard-home-top.png";
import particleConfig from './particleConfig';

const Header = ()=>{
  const particlesInit = async (main) => {
    
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return(
      <>
      <a class="goclick smooth" href="#">
        <button type="button" className="btn bubbly-button wow fadeIn ripple-surface-dark" id="btn-back-top" data-ripple-color="dark" style={{display: "block"}}><i class="fas fa-chevron-up"></i></button>
    </a>
      
        <div className="" >
        <div className="tkds" >
              <Particles
              
              height='60vh'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </div> 
           
        <div className="container position-absolute">
          <div className="row justify-content-center ">
          <div className="col-md-4 text-center" style={{marginTop:'-300px'}}> 
              <h1 className="mb-3 title-tophome">Aban Template</h1>
            </div>
          </div>

        </div>
        
        <div classNmae="top-slide">
                <p className="title-top-slide">
                  Aban
                  <br/>
                  Template
                </p>
                <div className="body-slide">
                  <div className="circle-1 "></div>
                  <div className="circle-2"></div>
                  <div className="circle-3"></div>
                </div>
        </div>


        

        <ul class="main-nav">
          <li class="item">   
            <img class="bg" data-flip-id="img1" src={img1}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img2" src={img2}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img3" src={img3}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img4" src={img4}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img5" src={img5}/>
          </li>
        </ul>
        
        
        </div>
        <div className="">
            <Svgbotom className="svgtop position-absolute "/>
        </div>
        </>  
    )
}

export default Header;
