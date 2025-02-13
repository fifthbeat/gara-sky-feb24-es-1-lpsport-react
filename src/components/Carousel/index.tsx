import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "@/components/Card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// import required modules
import { Navigation, Mousewheel, Keyboard  } from 'swiper/modules';
import Heading from "@/components/Atoms/Heading";
import {Container, Row, Col} from "react-bootstrap";

const slides = [
  'UEFA Champions League',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
  'Slide 6',
  'Slide 7',
  'Slide 8',
  'Slide 9',
  'Slide 10',
];

type CarouselProps = {
};

const Carousel = ({}: CarouselProps) => {
  return (
      <div className="carousel-container">
        <Container>
          <Row>
            <Col>
              <Heading
                  as="h2"
                  variant="display"
                  withGradient
                  className={"carousel-title"}
              >Un mondo di sport ti aspetta</Heading>
              <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  keyboard={true}
                  modules={[Navigation, Keyboard ]}
                  className="sky-swiper"
              >
                {
                  slides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Card
                            title={slide}
                        >{slide}</Card>
                      </SwiperSlide>
                  ))
                }
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
  )
};

export default Carousel;
