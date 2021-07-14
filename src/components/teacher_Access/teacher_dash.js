

import { Card, Row, Col } from 'reactstrap';
import {CardBody } from 'reactstrap';
import './teacher_das.css';
import img1 from './images/images/img7.jpg';
import img2 from './images/images/SD.jpg';
import img3 from './images/images/lit.jpg';
import img4 from './images/images/lg.jpg';
import img7 from './images/images/math.jpg';
import img8 from './images/images/sst.jpg';
import img9 from './images/images/eng.jpg';
import img10 from './images/images/s5.jpg';
import img11 from './images/images/s6.jpg';
import img13 from './images/images/mocks.jpg';
import img15 from './images/images/biology.jpg';
import img16 from './images/images/physics.jpg';
import img14 from './images/images/experiment.jpg';
import img12 from './images/images/science.jpg';
import img17 from './images/images/chemistry.jpg';
import img18 from './images/images/history.jpg';
import Navbar from './Navbar';
import Searchbar from './searchbar';
import Footer from '../footer'

const TechCards = () => {

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1                                                        */
        /*--------------------------------------------------------------------------------*/

        

        <>
        
        <Searchbar/> 
        <div className="main-row">
         
        <Navbar/>  
        <h2 className="titl">SITE HOME</h2>

        <Row >
            <h3>Pre-School</h3>
            <Row className="Eng">
            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img4} alt="img" className="img-fluid" />
                        </div>
                        
                        <p className="mt-1 mb-1">
                            Language Development
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Add content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img1} alt="img" className="img-fluid" />
                        </div>
                       
                        <p className="mt-1 mb-1">
                            Numeracy and Counting
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Add content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img2} alt="img" className="img-fluid" />
                        </div>
                        
                        <p className="mt-1 mb-1">
                             Social  <br/>Development
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Add content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
                        
            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img3} alt="img" className="img-fluid" />
                        </div>
                        
                        
                        <p className="mt-1 mb-1"> 
                        Learn<br/>Literacy I and Literacy II
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Add Content
                  </a>
                            </div>
                            
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>
            
            <h3>Post-Primary</h3>
            <Row >
            
            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img12} alt="img" className="img-fluid" />
                        </div>
                        <div className="badge badge-rounded badge-danger text-white">
                            Science
              </div>
                        <p className="mt-1 mb-1">
                            study of nature and life
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Add Content 
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="/" className="link mr-2" id="TooltipExample3">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img9} alt="img" className="img-fluid" />
                        </div>
                        <div className="badge badge-rounded badge-success text-white">
                            English
              </div>
                        <p className="mt-1 mb-1">
                            Language Development
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Add content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img8} alt="img" className="img-fluid" />
                        </div>
                        <div className="badge badge-rounded badge-success text-white">
                            Social Studies
              </div>
                        <p className="mt-1 mb-1">
                            Study of Environment
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Add content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img7} alt="img" className="img-fluid" />
                        </div>
                        
                        <div className="badge badge-rounded badge-info text-white">
                            Mathematics
              </div>
                        <p className="mt-1 mb-1">
                            Numeracy and counting
              </p>
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Add Content
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>
             
            <h3>Ordinary Level</h3>
            <Row className="">
            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img15} alt="img" className="img-fluid" />
                        </div>
                        
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Senior One
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="/" className="link mr-2" id="TooltipExample3">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img16} alt="img" className="img-fluid" />
                        </div>
                       
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Senior Two
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img17} alt="img" className="img-fluid" />
                        </div>
                        
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Senior Three
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img18} alt="img" className="img-fluid" />
                        </div>
                        
                     
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Senior Four
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>

            <h3>Advanced Level</h3>
            <Row className="">
            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img10} alt="img" className="img-fluid" />
                        </div>
                        
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Senior Five
                  </a>
                            </div>
                            <div className="ml-auto">
                                <a href="/" className="link mr-2" id="TooltipExample3">
                                    <i className="mdi mdi-heart-outline" />
                                </a>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img11} alt="img" className="img-fluid" />
                        </div>
                       
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Senior Six
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card >
                    <CardBody>
                        <div className="blog-image">
                            <img src={img14} alt="img" className="img-fluid" />
                        </div>
                        
                        <div className="d-flex">
                            <div className="read">
                                <a href="{undefined}" className="link font-medium">
                                    Experiments
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg='3'>
                <Card>
                    <CardBody>
                        <div className="blog-image">
                            <img src={img13} alt="img" className="img-fluid" />
                        </div>
                        
                     
                        <div className="d-flex">
                            <div className="read">
                                <a href="/" className="link font-medium">
                                    Mocks
                  </a>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>
            
            
        </Row>
        </div>
        <Footer/>
        </>
    );
}

export default TechCards;



