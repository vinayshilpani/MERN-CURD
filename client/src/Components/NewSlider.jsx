import React from "react";
import Slider from "react-slick";

const NewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="testimonial" class="testimonial-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center pb-10">
                <h4 class="title">Testimonial</h4>
                <p class="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="">
              <div class="row gx-0  testimonial-active px-2">
                <Slider {...settings}>
                  <div>
                    <div class="" style={{ padding: "0 10px" }}>
                      <div class="single-testimonial mt-30 mb-30 text-center">
                        <div class="testimonial-image">
                          <img src="img/author-3.jpg" alt="Author" />
                        </div>
                        <div class="testimonial-content">
                          <p class="text">
                            Stop wasting time and money designing and managing a
                            website that doesn’t get results. Happiness
                            guaranteed! Stop wasting time and money designing
                            and managing a website that doesn’t get results.
                            Happiness guaranteed!
                          </p>
                          <h6 class="author-name">Isabela Moreira</h6>
                          <span class="sub-title">CEO, GrayGrids</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="" style={{ padding: "0 10px" }}>
                      <div class="single-testimonial mt-30 mb-30 text-center">
                        <div class="testimonial-image">
                          <img src="img/author-3.jpg" alt="Author" />
                        </div>
                        <div class="testimonial-content">
                          <p class="text">
                            Stop wasting time and money designing and managing a
                            website that doesn’t get results. Happiness
                            guaranteed! Stop wasting time and money designing
                            and managing a website that doesn’t get results.
                            Happiness guaranteed!
                          </p>
                          <h6 class="author-name">Isabela Moreira</h6>
                          <span class="sub-title">CEO, GrayGrids</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="" style={{ padding: "0 10px" }}>
                      <div class="single-testimonial mt-30 mb-30 text-center">
                        <div class="testimonial-image">
                          <img src="img/author-3.jpg" alt="Author" />
                        </div>
                        <div class="testimonial-content">
                          <p class="text">
                            Stop wasting time and money designing and managing a
                            website that doesn’t get results. Happiness
                            guaranteed! Stop wasting time and money designing
                            and managing a website that doesn’t get results.
                            Happiness guaranteed!
                          </p>
                          <h6 class="author-name">Isabela Moreira</h6>
                          <span class="sub-title">CEO, GrayGrids</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="" style={{ padding: "0 10px" }}>
                      <div class="single-testimonial mt-30 mb-30 text-center">
                        <div class="testimonial-image">
                          <img src="img/author-3.jpg" alt="Author" />
                        </div>
                        <div class="testimonial-content">
                          <p class="text">
                            Stop wasting time and money designing and managing a
                            website that doesn’t get results. Happiness
                            guaranteed! Stop wasting time and money designing
                            and managing a website that doesn’t get results.
                            Happiness guaranteed!
                          </p>
                          <h6 class="author-name">Isabela Moreira</h6>
                          <span class="sub-title">CEO, GrayGrids</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSlider;
