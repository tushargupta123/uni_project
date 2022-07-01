import React from "react";

function About() {
  return (
    <div className="back shadow">
    <div className="container">
      <section className="row pt-5">
        <div className="col-sm-12 col-md-12 col-lg-5 d-flex flex-column justify-content-center">
          <h1 className="pt-3">POWER CUSTOM SOLUTIONS WITH OUR API SURFACE</h1>
          <div className="pt-3">
            Aladdin Studio APIs enable you to build your own solutions with
            access to the breadth and depth of Aladdin data and capabilities.
            Retrieve, write, and modify data from across the Aladdin ecosystem
            to power proprietary applications and create custom tools that meet
            your needs.
          </div>
          <div className="pt-3">
            <button type="button" className="btn btn-dark">
              Contact us to Learn more
            </button>
          </div>
        </div>
        <div className="spacer col-lg-1"></div>
        <div className="img-block col-sm-12 col-md-12 col-lg-6">
          <img
            src="https://www.blackrock.com/blk-inst-assets/cache-1635526326000/images/media-bin/web/global/full-bleed-banners/ala-sit-action-skate-hero.webp"
            alt=""
            className="h-100 w-100"
          />
        </div>
      </section>
      <section className="mt-5 pb-5">
        <p className="h2">
          What are APIs? How can I use them in Aladdin Studio?
        </p>
        <p className="py-3">
          An API, or Application Programming Interface, is a clearly defined set
          of methods used to access data. APIs allow applications to communicate
          with one another and offer flexible solutions to complex needs. A good
          API makes it easy to retrieve and manipulate data, and it provides you
          with building blocks to help construct programs.
        </p>
        <p className="">
          Aladdin REST APIs allow you to take control of your data, granting
          read and write access to Aladdin data to drive proprietary
          applications built by your development teams. Our APIs let you call
          Aladdin databases directly, empowering you to create tools and
          workflows that expand beyond native Aladdin functionality.
        </p>
      </section>
    </div>
    </div>
  );
}

export default About;
