import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const NewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setData] = useState({});
  const getDataFun = async () => {
    try {
      axios
        .get("/getDataForHome")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFun();
  }, []);

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
              {data.length > 0 && (
                <>
                  <Slider {...settings}>
                {data.map((dbData)=>(
                  <div key={dbData._id} className="h-100">
                    <div class="" style={{ padding: "0 10px" }}>
                      <div class="single-testimonial mt-30 mb-30 text-center">
                        <div class="testimonial-image">
                          <img src={"upload/" + dbData.img} alt="Author" />
                        </div>
                        <div class="testimonial-content">
                          <p class="text">
                            {dbData.disc}
                          </p>
                          <h6 class="author-name">{dbData.name}</h6>
                          <span class="sub-title">{dbData.post}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
                </>
              )}
                {/* <div>
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
                   */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSlider;
