import React, {useState} from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import './homepage.css'
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import'./dash_head.css';
import Searchbar from './teacher_Access/searchbar';
import Footer from './footer';
import {Link} from "react-router-dom";

function Homepage () {

    
return(  
        <div>
           
            <div className='land_page'>

                <Link to={"/logout"} className="link font-medium" style={{cursor : 'pointer'}}>
                    Logout </Link>
                <Link to={"/app-form/login"} className="link font-medium" style={{cursor : 'pointer'}}>
                Help </Link>
                <Link to={"/app-form/Form"}className="link font-medium" style={{cursor : 'pointer'}}>
                Settings </Link>
                <Searchbar className='pagehomesearch'/>
             
            </div>
            <img src={img2} alt="img" className="image" />
      <div>
                <Row className='Row-one'>
                    <Col lg="4">
                   <div className='col-one'>
                    <div className='rectangle'>
                    </div>
                    <div className='head1'>
                 <h5><strong>EDUCATION</strong></h5>
                 <h5><strong> LEVEL </strong></h5>
                 <h5><strong>CHANNELS</strong></h5>
                    </div>
                   </div>
                    </Col>
                    <Col lg="4">
                    <p className='des'>The channel contains Learning resources to Support the <br/>
                    learning on all the curriculums. The content <br/> is categorized for 
                    pre-primary, post-primary,<br/> ordinary and Advanced levels
                    </p>
                    </Col>
                    
                </Row>
                
            </div>
            
            <Row className="first-row">
                <Col lg="3">

                    <Card>

                        <CardBody>
                            <div className="blog-image">
                                <img src={img1} alt="img" className="img-fluid" />
                            </div>
                            <h5>Pre-Primary</h5>
                            
                            <div className="d-flex">
                                <div className="read">
                                <Link to={"/student_Access/studentdash"} className="link font-medium" style={{cursor : 'pointer'}}>
                                        Access Content
                                 </Link>
                </div>
                      </div>      
                        </CardBody>
                    </Card>
                
                </Col>

                <Col lg="3">

                    <Card  >
                        <CardBody>
                            <div className="">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                            <h5>Post-Primary</h5>
                           
                            <div className="d-flex">
                                <div className="read">
                                 <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                                        Access Content
                      </Link>
                                </div>
                                <div className="ml-auto" >
                                    <Link to={"/"} className="link mr-2" id="TooltipExample5">
                                        <i className="mdi mdi-heart-outline" />
                                    </Link>
                                   
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <CardBody>
                            <div className="blog-image">
                                <img src={img3} alt="img" className="img-fluid" />
                            </div>
                            <h5>Ordinary - Level</h5>
                  
                            <div className="d-flex">
                                <div className="read">
                                <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                                        Access Content
                                 </Link>
                                </div>
                                <div className="ml-auto">
                                    <Link to={"/"} className="link mr-2" id="TooltipExample3">
                                        <i className="mdi mdi-heart-outline" />
                                    </Link>
                            
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img5} alt="img" className="img-fluid" />
                            </div>
                            <h5>Advanced Level</h5>
                           
                            <div className="d-flex">
                                <div className="read">
                                <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                                        Access Content
                                 </Link>
                                </div>
                                <div className="ml-auto">
                                    <Link to={"/"} className="link mr-2" id="TooltipExample3">
                                        <i className="mdi mdi-heart-outline" />
                                    </Link>
                                   </div>
                                   </div>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
    
            <Footer/>
    
            </div>
         
            
        );
    
        
    }

    
    export default Homepage;
    