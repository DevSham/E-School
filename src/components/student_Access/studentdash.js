import React, {useState} from 'react';
import { Card, CardBody, Row, Col, Navbar } from 'reactstrap';
import img4 from './img4.jpg';
import img1 from './images/img1.jpg';
import './upperbar.css'
import Footer from '../footer';
import {Link} from "react-router-dom";



function studentdash () {

    
return(
    
       <div>
        <div className='upperbar'>
            
            <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                Assignment </Link>
                <Link  to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                Lessons </Link>
                <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                Exams </Link>
                <Link to={"/app-form/Form"} className="link font-medium" style={{cursor : 'pointer'}}>
                My Grade </Link>
                <Link to={"/teacher_Access/teacher_dash"} className="link font-medium" style={{cursor : 'pointer'}}>
                Upload Work </Link>
                <Link to={"/logout"} className="link font-medium" style={{cursor : 'pointer'}}>
                Logout </Link>
            </div>
        <div>
            <img src={img1} alt="" className='image4' />
            </div>
      <div>
                <Row className='Row-one'>
                    <Col lg="4">
                   <div className='col-one'>
                    <div className='rectangle'>
                    </div>
                    <div className='head1'>
                 <h5><strong>PRIMARY</strong></h5>
                 <h5><strong> LEVEL </strong></h5>
                 <h5><strong>CHANNELS</strong></h5>
                    </div>
                   </div>
                    </Col>
                    <Col lg="4">
                    <p className='des'>Primary Education is typically the first stage of <br/>
                    formal education coming after pre-school/kindergaten <br/> and before secondary 
                    school, this education level takes place in a primary school, elementary school,
                    first or middle <br/>school depending on location 
                    </p>
                    </Col>
                    
                </Row>
                
            </div>
            
            <Row className="first-row">
                <Col lg="3">

                    <Card>

                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary One
                                 </a> 
                           </div>
                      </div>      
                        </CardBody>
                    </Card>
                
                </Col>

                <Col lg="3">

                    <Card  >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                                                   
                            <div className="d-flex">
                                <div className="read">
                                 <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Two
                      </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Three
                                 </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
            
                           
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Four
                                 </a> 
                                </div>
                                
                                   </div>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>

            <Row className="first-row">
                <Col lg="3">

                    <Card>

                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Five
                                 </a> 
                           </div>
                      </div>      
                        </CardBody>
                    </Card>
                
                </Col>

                <Col lg="3">

                    <Card  >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                                                   
                            <div className="d-flex">
                                <div className="read">
                                 <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Six
                      </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
                        
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Primary Seven
                                 </a> 
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card >
                        <CardBody>
                            <div className="blog-image">
                                <img src={img4} alt="img" className="img-fluid" />
                            </div>
            
                           
                            <div className="d-flex">
                                <div className="read">
                                <a href="/app-form/Form" className="link font-medium" style={{cursor : 'pointer'}}>
                                        Tessts/Quizes
                                 </a> 
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

    
    export default studentdash;
    