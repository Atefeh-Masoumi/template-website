import home from '../assets/img/home.png';
import article from '../assets/img/articles-sample-page1.png';
import articlesingle from '../assets/img/article-singlepage.png'
import contact from '../assets/img/contact-us.png';
import about from '../assets/img/about-us.png';
import service from '../assets/img/services-us.png';
import team from '../assets/img/team.png';
import dashboard from '../assets/img/dashboard.png';
import {ReactComponent as slider} from './slider.svg';
// import './product.css';
import './style.css';
import $ from 'jquery';

import React, { useEffect, useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTooltip,
} from 'mdb-react-ui-kit';


const jQuery = ()=>{
  $(function(){
    $('.modal1 ').on("click", function () {
    $('#change_iconarrow21').addClass("active");
    $('#change_iconarrow').addClass("icon-botton-arrow");
    $('#screen2').addClass("screen2");
        setTimeout(RemoveClass, 30000);
    });
    $('.modal2 ').on("click", function () {
    $('#change_iconarrow3').addClass("active");
    $('#change_iconarrow2').addClass("icon-botton-arrow");
    $('#screen3').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal3 ').on("click", function () {
    $('#change_iconarrow884').addClass("active");
    $('#change_iconarrow883').addClass("icon-botton-arrow");
    $('#screen4').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal4 ').on("click", function () {
    $('#change_iconarrow5').addClass("active");
    $('#change_iconarrow4').addClass("icon-botton-arrow");
    $('#screen5').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal5 ').on("click", function () {
    $('#change_iconarrow996').addClass("active");
    $('#change_iconarrow995').addClass("icon-botton-arrow");
    $('#screen6').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal6 ').on("click", function () {
    $('#change_iconarrow7').addClass("active");
    $('#change_iconarrow6').addClass("icon-botton-arrow");
    $('#screen7').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal7 ').on("click", function () {
    $('#change_iconarrow338').addClass("active");
    $('#change_iconarrow337').addClass("icon-botton-arrow");
    $('#screen8').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal8 ').on("click", function () {
    $('#change_iconarrow9').addClass("active");
    $('#change_iconarrow8').addClass("icon-botton-arrow");
    $('#screen9').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    $('.modal9 ').on("click", function () {
    $('#change_iconarrow6610').addClass("active");
    $('#change_iconarrow669').addClass("icon-botton-arrow");
    $('#screen10').addClass("screen2");
    setTimeout(RemoveClass, 30000);
    });
    

    function RemoveClass() {
        $('#change_iconarrow21').removeClass("active");
        $('#change_iconarrow').removeClass("icon-botton-arrow");
        $('#screen2').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow3').removeClass("active");
        $('#change_iconarrow2').removeClass("icon-botton-arrow");
        $('#screen3').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow884').removeClass("active");
        $('#change_iconarrow883').removeClass("icon-botton-arrow");
        $('#screen4').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow5').removeClass("active");
        $('#change_iconarrow4').removeClass("icon-botton-arrow");
        $('#screen5').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow996').removeClass("active");
        $('#change_iconarrow995').removeClass("icon-botton-arrow");
        $('#screen6').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow7').removeClass("active");
        $('#change_iconarrow6').removeClass("icon-botton-arrow");
        $('#screen7').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow338').removeClass("active");
        $('#change_iconarrow337').removeClass("icon-botton-arrow");
        $('#screen8').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow9').removeClass("active");
        $('#change_iconarrow8').removeClass("icon-botton-arrow");
        $('#screen9').addClass("screen2");
    }
    function RemoveClass() {
        $('#change_iconarrow6610').removeClass("active");
        $('#change_iconarrow669').removeClass("icon-botton-arrow");
        $('#screen10').addClass("screen2");
    }
});
}



const ProductImage=()=>{

  useEffect(()=>{
    jQuery(); 
   
  },[]);

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2]= useState(false);
  const [modal3,setModal3]= useState(false);
  const [modal4,setModal4]= useState(false);
  const [modal5,setModal5]= useState(false);
  const [modal6,setModal6]= useState(false);
  const [modal7,setModal7]= useState(false);
  const [modal8,setModal8]= useState(false);
    return(
        <>
          <section id="product_images" style={{backgoungColor:'#484848'}}>
            <div className="container" >
                <div className="row mb-3">
                    <div className="col-md-12 text-center">
                        <h2 className="text-title">
                            Product Images
                        </h2>
                        <span className="border_title"></span>
                    </div>
                </div>
            <div className="row gx-3">
                <div id="screen2" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal1(!modal1)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Home Page</h5>
                              </div>
                                <img src={home}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal1} setShow={setModal1} tabIndex='-1'className="modal fade" id="product_images1" staticBackdrop>
                        <MDBModalDialog scrollable className=" modal-lg">
                          <MDBModalContent className=" modal-custom">
                            <MDBModalHeader className=" modal-header-custom">
                              <MDBModalTitle>Home Page</MDBModalTitle>
                              <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setModal1(!modal1)}
                              ></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody  className="modal-body body-modal1 ">
                            
                            <div id="change_iconarrow" className="body-modal modal1">
                                <div id="change_iconarrow21" className="card-body text-center text-title-box2">
                                  <MDBTooltip tag='svg'  title="click down to view" >
                                    <svg className="arrows"  >
                                    <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                    <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                    <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                    </svg>
                                  </MDBTooltip>
                                </div>
                                
                                
                                <a target="_blank" href={home} >
                                    
                                    <img src={home}/>
                                </a>
                            </div>
                            </MDBModalBody>
                            <MDBModalFooter className="modal-footer-custom">
                              
                              <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal1(!setModal1)}>
                                Close
                              </MDBBtn>
                             
                            </MDBModalFooter>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                       {/* <!-- Modal --> */}
            
            
                
                </div> 

              <div id="screen3" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal2(!modal2)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Article page</h5>
                                </div>
                                <img src={article}/>
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                            <MDBModal show={modal2} setShow={setModal2} tabIndex='-1'className="modal fade" id="product_images2" staticBackdrop>
                            <MDBModalDialog scrollable className="modal-dialog modal-lg">
                              <MDBModalContent className="modal-content modal-custom">
                                <MDBModalHeader className="modal-header modal-header-custom">
                                  <MDBModalTitle>Article Page</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal2(!setModal2)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow2" className="body-modal modal2 ">
                                    <div id="change_iconarrow3" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view" >
                                        <svg className="arrows  "  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={article} >
                                        
                                        <img src={article}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal2(!modal2)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                         {/* <!-- Modal --> */}
                     
               </div> 
              <div id="screen4" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal3(!modal3)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Article single page</h5>
                              </div>
                                <img src={articlesingle}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
        <MDBModal show={modal3} setShow={setModal3} tabIndex='-1'className="modal fade" id="product_images4" staticBackdrop>
        <MDBModalDialog scrollable className=" modal-lg">
          <MDBModalContent className=" modal-custom">
            <MDBModalHeader className=" modal-header-custom">
              <MDBModalTitle>Article singlepage</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setModal3(!modal3)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody  className="modal-body body-modal1 ">
            
            <div id="change_iconarrow883" className="body-modal modal3">
                <div id="change_iconarrow884" className="card-body text-center text-title-box2">
                  <MDBTooltip tag='svg'  title="click down to view" >
                    <svg className="arrows"  >
                    <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                    </MDBTooltip>
                </div>
               
                
                <a target="_blank" href={articlesingle} >
                    
                    <img src={articlesingle}/>
                </a>
            </div>
            </MDBModalBody>
            <MDBModalFooter className="modal-footer-custom">
              <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal3(!setModal3)}>
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    {/* <!-- Modal --> */}
            
            
                
              </div>
               <div id="screen5" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal4(!modal4)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Contact us</h5>
                              </div>
                                <img src={contact}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal4} setShow={setModal4} tabIndex='-1'className="modal fade" id="product_images4" staticBackdrop>
                            <MDBModalDialog scrollable className=" modal-lg">
                              <MDBModalContent className=" modal-custom">
                                <MDBModalHeader className=" modal-header-custom">
                                  <MDBModalTitle>contact us</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal4(!modal4)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow4" className="body-modal modal4">
                                    <div id="change_iconarrow5" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view" >
                                        <svg className="arrows"  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={contact} >
                                        
                                        <img src={contact}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal4(!setModal4)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>  
                        {/* <!-- Modal --> */}
            
            
                
              </div>

              <div id="screen6" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal5(!modal5)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >About us</h5>
                              </div>
                                <img src={about}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal5} setShow={setModal5} tabIndex='-1'className="modal fade" id="product_images5" staticBackdrop>
                            <MDBModalDialog scrollable className=" modal-lg">
                              <MDBModalContent className=" modal-custom">
                                <MDBModalHeader className=" modal-header-custom">
                                  <MDBModalTitle>contact us</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal5(!modal5)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow995" className="body-modal modal5">
                                    <div id="change_iconarrow996" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view" >
                                        <svg className="arrows"  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={about} >
                                        
                                        <img src={about}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal5(!setModal5)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>  
                        {/* <!-- Modal --> */}
            
            
                
              </div>
              <div id="screen7" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal6(!modal6)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Services Us</h5>
                              </div>
                                <img src={service}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal6} setShow={setModal6} tabIndex='-1'className="modal fade" id="product_images5" staticBackdrop>
                            <MDBModalDialog scrollable className=" modal-lg">
                              <MDBModalContent className=" modal-custom">
                                <MDBModalHeader className=" modal-header-custom">
                                  <MDBModalTitle>services us</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal6(!modal6)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow6" className="body-modal modal6">
                                    <div id="change_iconarrow7" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view" >
                                        <svg className="arrows"  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={service} >
                                        
                                        <img src={service}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal6(!setModal6)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>  
                        {/* <!-- Modal --> */}
            
            
                
              </div>

              <div id="screen8" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal7(!modal7)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Team Us</h5>
                              </div>
                                <img src={team}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal7} setShow={setModal7} tabIndex='-1'className="modal fade" id="product_images5" staticBackdrop>
                            <MDBModalDialog scrollable className=" modal-lg">
                              <MDBModalContent className=" modal-custom">
                                <MDBModalHeader className=" modal-header-custom">
                                  <MDBModalTitle>Team us</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal7(!modal7)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow337" className="body-modal modal7">
                                    <div id="change_iconarrow338" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view">
                                        <svg className="arrows"  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={team} >
                                        
                                        <img src={team}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal7(!setModal7)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>  
                        {/* <!-- Modal --> */}
            
            
                
              </div>
              <div id="screen9" className="col-lg-3 col-md-6 mb-3 hover-item-box ">
                        <div className="card hover-item screen  box-shadow1">
                           <a  onClick={() => setModal8(!modal8)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Dashboard</h5>
                              </div>
                                <img src={dashboard}/>   
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
                        <MDBModal show={modal8} setShow={setModal8} tabIndex='-1'className="modal fade" id="product_images8" staticBackdrop>
                            <MDBModalDialog scrollable className=" modal-lg">
                              <MDBModalContent className=" modal-custom">
                                <MDBModalHeader className=" modal-header-custom">
                                  <MDBModalTitle>Dashboard</MDBModalTitle>
                                  <MDBBtn
                                    className='btn-close'
                                    color='none'
                                    onClick={() => setModal8(!modal8)}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody  className="modal-body body-modal1 ">
                                
                                <div id="change_iconarrow8" className="body-modal modal8">
                                    <div id="change_iconarrow9" className="card-body text-center text-title-box2">
                                      <MDBTooltip tag='svg'  title="click down to view">
                                        <svg className="arrows"  >
                                        <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                        </MDBTooltip>
                                    </div>
                                  
                                    
                                    <a target="_blank" href={dashboard} >
                                        
                                        <img src={dashboard}/>
                                    </a>
                                </div>
                                </MDBModalBody>
                                <MDBModalFooter className="modal-footer-custom">
                                  <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setModal8(!setModal8)}>
                                    Close
                                  </MDBBtn>
                                  
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>  
                        {/* <!-- Modal --> */}
            
            
                
              </div>
              <div id="screen10" className="col-lg-3 col-md-6 content mb-3 hover-item-box screen2">
                <div className="card hover-item screen box-shadow1">
                        <div className="card-body text-center text-title-box">
                            <svg style={{marginTop: "-69px"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" height="60px">
                                <path style={{fill: "#f7f2d3" }}d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"></path>
                            </svg>
                            <h5 className="card-title ">More demos coming soon...</h5>
                        </div>
                        
                </div>
            </div>      
       </div>
      </div>
                
            </section>
        </>
    )
}
export default ProductImage;