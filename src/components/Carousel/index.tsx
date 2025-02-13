import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "@/components/Card";

import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// import required modules
import {Keyboard, Navigation} from 'swiper/modules';
import {Col, Container, Row} from "react-bootstrap";
import HTMLReactParser from "html-react-parser";

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
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  spaceBetween={30}
                  navigation={true}
                  keyboard={true}
                  modules={[Navigation, Keyboard]}
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
