import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "@/components/Card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// import required modules
import { Navigation, Mousewheel, Keyboard  } from 'swiper/modules';
import Heading from "@/components/Atoms/Heading";
import {Container, Row, Col} from "react-bootstrap";
import HTMLReactParser from "html-react-parser";

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
  cardList: any;
};

const Carousel = ({cardList}: CarouselProps) => {
  return (
      <div className="carousel-container">
        <Container>
          <Row>
            <Col>
              <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  keyboard={true}
                  modules={[Navigation, Keyboard ]}
                  className="sky-swiper"
              >
                {
                  cardList.map((item: any, index: number) => (
                      <SwiperSlide key={"swipe_" + index}>
                        <Card
                            title={item?.card?.title}
                            imageAlt={item?.card?.image.alt}
                            imageSrc={item?.card?.image?.file.url}
                        >{HTMLReactParser(item?.card?.description)}</Card>
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
