import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const location = [
  {
    icon: icon01,
    title: "Find a Doctor",
    desc: "World-class care for everyone. Our healthy System offers unmatched, expert healthy care. From the lab the clinic  ",
  },
  {
    icon: icon02,
    title: "Find a Location",
    desc: "World-class care for everyone. Our healthy System offers unmatched, expert healthy care. From the lab the clinic  ",
  },
  {
    icon: icon03,
    title: "Book Appointment",
    desc: "World-class care for everyone. Our healthy System offers unmatched, expert healthy care. From the lab the clinic  ",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className=" hero__content flex lg-flex-row gap-[90px] items-center justify-between">
            {/*============ hero content ===========*/}

            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md-text-[60px] md:leading-[70px]">
                  We help patients live a healthy, long life
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit explicabo maxime similique minus veniam sunt. Fugit
                  minima illum, excepturi, id adipisci delectus error tempora
                  beatae ex perferendis nemo rerum earum.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
            </div>

            {/*============ hero content ===========*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>

          {/*============ hero counter ===========*/}
          <div className="mt-[30px] lg:mt-[70px] flex lg:items-center gap-5 lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                30+
              </h2>
              <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
              <p className="text_para">Years of Experience</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                15+
              </h2>
              <span className="w-[100px] h-2  bg-purpleColor rounded-full block mt-[-14px]"></span>
              <p className="text_para">Clinic Location</p>
            </div>

            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                100%
              </h2>
              <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
              <p className="text_para">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our healthy system offers unmatched
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[30px] mt-[30px] lg:mt-[55px] px-[70px]">
          {location.map((item, index) => (
            <div className="py-[30p] px-5" key={index}>
              <div className="flex items-center justify-center">
                <img src={item.icon} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  {item.title}
                </h2>
                <p className="text__para text-[16px] leading-7 text-headingColor font-[400] text-center">
                  {item.desc}
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <About />

      {/*=========== services section =============*/}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className=" heading text-center">Our medical services</h2>
            <p className="text__para text-center mt-4">
              World-class care for everyone. Our healthy System offers
              unmatched, expect heathy care
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/*=========== services section end =============*/}

      {/*=========== feature section =============*/}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*============ feature content ===========*/}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>

              <ul className="pl-4 mt-5">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para mt-3">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para mt-3">
                  3.View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <button className="btn">Learn More</button>
            </div>

            {/*============ feature img ===========*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[500]">
                      10:00AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultations
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <div className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== feature section end =============*/}

      {/*=========== oir great doctors =============*/}

      <section>
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our healthy System offers unmatched,
            expect healthy care
          </p>
        </div>

        <DoctorList />
      </section>
      {/*=========== oir great doctors end =============*/}

      {/*=========== faq section =============*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[100px] ">
            <div className="w-3/4 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w:1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*=========== faq section end =============*/}

      {/*=========== testimonial =============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="txt__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/*=========== testimonial end =============*/}
    </>
  );
};

export default Home;
