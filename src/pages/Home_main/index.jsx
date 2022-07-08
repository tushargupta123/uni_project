import React, { useEffect, useState } from "react";

function Home_main() {
  const [eFront, seteFront] = useState(false);
  const [clientStory, setClientStory] = useState(false);
  
const data = JSON.stringify({"Perm_ID": "test001",
  "Pool_trans_ID": "test001",
  "Demand": 1,
  "Post_timestamp": '2022-06-05T23:05:05Z'})


useEffect(() => {
  console.log(typeof data);
})


  const onTest = (e) => {
   fetch("http://127.0.0.1:8000/L_demand",{
     method:'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     },
     body:data
   }).then((result) => {
     console.log("result", result);
   }).catch((err) => {
     console.log("error", err);
   })
  }

  return (
    <div className="back shadow">
    <div className="container">
      <section className="row pt-5">
        <div className="col-sm-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center">
          <div className="pt-3"> ALADDIN BY BLACKROCK</div>
          <h1 className="pt-3">GET TO KNOW THE ALADDIN ADVANTAGE</h1>
          <div className="pt-3">
            See why BlackRock and hundreds of other investment professionals
            turn to the power of Aladdin to work smarter, not harder.
          </div>
          <div className="pt-3">
            <button type="button" className="btn btn-dark">
              Learn more about
            </button>
          </div>
        </div>
        <div className="spacer col-lg-1"></div>
        <div className="img-block col-sm-12 col-md-6 ">
          <img
            src="https://www.blackrock.com/blk-inst-assets/cache-1635526326000/images/media-bin/web/global/full-bleed-banners/ala-sit-action-ski-hero.webp"
            alt=""
            className="h-100 w-100"
          />
        </div>
      </section>
      <section className="my_50">
        <p className="h2">The clarity to act in a complex world</p>
        <p className="py-3">
          More than investment software, Aladdin technology brings clarity and
          connectivity to the world’s financial ecosystem.
        </p>
        <p className="">
          Everything we do is guided by the conviction that investors need this
          clarity at every point in the investment process in order to make more
          informed decisions, scale efficiently and achieve better investment
          outcomes. In pursuit of this goal, we are relentlessly innovating and
          constantly evolving Aladdin technology.
        </p>
      </section>
      <section className="my_50">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-10 col-sm-12">
                <div className="h4">Aladdin for institutional investors</div>
                <div className="">
                  Aladdin Enterprise is a flexible, end-to-end operating system
                  that brings clarity to investment professionals.
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-dark">
                    Learn more about
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-10 col-sm-12">
                <div className="h4">Aladdin for wealth managers</div>
                <div className="">
                  Aladdin Wealth is an industry-leading platform powering the
                  future of wealth management.
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-dark">
                    Learn about Aladdin Wealth
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my_50">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <iframe
              // width="727"
              height="350"
              className="w-100"
              src="https://www.youtube.com/embed/0f_hewSrAH4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <div className="pt-3">
              <p className="h3">THE POWER OF ALADDIN + EFRONT</p>
            </div>
            <div className="pt-3">
              <p>
                Bringing together the market leading capabilities of Aladdin for
                public markets and eFront for private markets sets a new
                standard in investment and risk management technology. Together,
                they enable investors to seamlessly manage portfolios across
                public and private asset classes on a single platform, providing
                a Whole Portfolio View.
              </p>
            </div>
            <div className="pt-3">
              <div
                className="p-2 cta_main"
                onMouseEnter={() => seteFront(true)}
                onMouseLeave={() => seteFront(false)}
              >
                <p>Learn more about eFront</p>
                <div
                  className={`${
                    eFront ? "cta_bottom_show" : "cta_bottom_hide"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <div className="h3">
              Client story | Microsoft Treasury and Aladdin: a twenty-year
              partnership forged on innovation and growth
            </div>
            <div className="">
              Microsoft Treasury’s implementation of the Aladdin® Enterprise
              platform has streamlined its operations, automated processes, and
              centralized investment data, allowing the team to efficiently
              manage multi-asset portfolios within one flexible end-to-end
              solution.
            </div>
            <div className="pt-3">
              <div
                className="p-2 cta_main"
                onMouseEnter={() => setClientStory(true)}
                onMouseLeave={() => setClientStory(false)}
              >
                <p>Read the client story</p>
                <div
                  className={`${
                    clientStory ? "cta_bottom_show" : "cta_bottom_hide"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 pb-5">
            <div className="img-block">
              <img
                src="https://www.blackrock.com/blk-inst-assets/cache-1640697450000/images/media-bin/web/institutional/casestudy.webp"
                alt=""
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home_main;