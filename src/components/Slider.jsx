// import { useState } from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import testimage from '../assets/images/development.jpg';

// function Slider() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Container fluid>
//             <Row>
//                 <Col>
//                     <Carousel activeIndex={index} onSelect={handleSelect}>
//                         <Carousel.Item>
//                             <img
//                                 className="d-block w-100"
//                                 src={testimage}
//                                 alt="First slide"
//                             />
//                             <Carousel.Caption>
//                                 <h3>First slide label</h3>
//                                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         {/* Add more Carousel items */}
//                     </Carousel>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Slider;