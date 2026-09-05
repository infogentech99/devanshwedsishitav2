"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function CoupleIntro() {
  const events = [
    // {
    //   title_ceremony: "Haldi",
    //   image: "/assets/haldi.webp",
    //   date: "Wednesday, November 25th 2026",
    //   time: "at 11:30 AM",
    //   food: "Followed by Lunch",
    //   venue: "Bel-La Monde",
    //   venue_address: (
    //     <>
    //       NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
    //     </>
    //   ),
    //   link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    // },

    // {
    //   title_ceremony: "Sagai & Ring Ceremony",
    //   image: "/assets/sagai.webp",
    //   date: "Wednesday, November 25th 2026",
    //   time: "at 4:00 PM",
    //   venue: "Bel-La Monde",
    //   venue_address: (
    //     <>
    //       NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
    //     </>
    //   ),
    //   link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    // },

    // {
    //   title_ceremony: "Sangeet",
    //   image: "/assets/sangeet.webp",
    //   date: "Wednesday, November 25th 2026",
    //   time: "at 6:00 PM",
    //   food: "Followed by Dinner",
    //   venue: "Bel-La Monde",
    //   venue_address: (
    //     <>
    //       NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
    //     </>
    //   ),
    //   link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    // },

    {
      title_ceremony: "Tika & Ghudchadi",
      image: "/assets/tika.webp",
      date: "Thursday, November 26th 2026",
      time: "at 10:00 AM",
      venue: "Bel-La Monde",
      venue_address: (
        <>
          NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
        </>
      ),
      link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    },

    {
      title_ceremony: "Jai Mala",
      image: "/assets/jai.webp",
      date: "Thursday, November 26th 2026",
      time: "at 1:00 PM",
      food: "Followed by Lunch",
      venue: "Bel-La Monde",
      venue_address: (
        <>
          NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
        </>
      ),
      link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    },

    {
      title_ceremony: "Phere",
      image: "/assets/phere.webp",
      date: "Thursday, November 26th 2026",
      time: "at 5:00 PM",
      food: "Followed by Dinner",
      venue: "Bel-La Monde",
      venue_address: (
        <>
          NH309, Ramnagar, Dhikuli, Garjiya, <br /> Uttarakhand 244715
        </>
      ),
      link: "https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6",
    },
  ];

  return (
    <>
      <div
        className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-cover
                            md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden md:min-h-screen"
      >
        <RoseHeroTemp />
        <div className="relative pt-5 md:pt-30 3xl:pt-34 pb-20 z-10">
          <h2
            className="flex flex-col items-center text-center leading-tight text-3xl md:text-5xl lg:text-7xl
                               pb-20 md:pb-260 lg:pb-200 3xl:pb-240 text-[#834000]"
          >
            
             <h2 className="font-eb-garamond font-semibold text-base md:text-xl lg:text-2xl text-center text-[#834000]">
              ॐ श्री गणेशाय नम:
            </h2>
             <img
              src="/assets/aum.png"
              alt="ganesh"
              className="w-18 h-20 md:w-25 md:h-24 lg:w-49 lg:h-58 mt-2 lg:mt-4"
            />
          </h2>
          <div className="flex flex-col items-center text-center md:gap-6 mt-0 pt-80 lg:pt-150">
            <h2 className="font-eb-garamond font-semibold text-[14px] md:text-xl lg:text-xl text-center text-[#B35800]">
              विघ्न हरण मंगल करण, श्री गणपति महाराज। <br/>
प्रथम निमंत्रण आपको, पूरण करिये काज।।
            </h2>
            {/* <img
              src="/assets/aum.webp"
              alt="ganesh"
              className="w-16 h-16 md:w-25 md:h-24 lg:w-49 lg:h-47 mt-2 lg:mt-4"
            /> */}
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-4 md:mt-3 text-[#B35800]">
              With the heavenly blessings of <br /> Late Smt Kamla Devi & Late
              Shri Gainda Lal Agarwal
            </h2>
            {/* <hr className="w-20 lg:w-26 lg:border-2 my-3 lg:my-4 border-[#B35800]" /> */}
            {/* <h2 className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-[42px] text-[#B35800]">
              Late Smt Kamla Devi & Late Shri Gainda Lal Agarwal
            </h2> */}
          </div>
          <div className="text-center mt-8">
            {/* <h2 className="font-playfair-display font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider text-[#B35800] italic">
              Invite
            </h2> */}
            <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 text-[#B35800] px-6 md:px-0">
              We cordially invite you and your family to join us for the wedding
              celebrations of
            </p>
            <h2 className="font-eb-garamond font-medium text-center text-5xl md:text-6xl lg:text-[100px] mt-6 leading-8 md:leading-tight text-[#B35800]">
              Devansh
            </h2>
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 md:mt-0 text-[#B35800]">
              (S/o Dr. Preeti Agarwal & Dr. T.C. Agarwal)
            </h2>
            <h2 className="font-playfair-display font-medium text-5xl md:text-6xl lg:text-[100px] text-center mt-4 leading-tight text-[#B35800]">
              <span className="text-center mt-4 lg:mt-10 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#B35800] font-playfair-display">
                &
              </span>
              <br />
              Ishita
            </h2>
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 md:mt-0 text-[#B35800]">
              (D/o Mrs. Shalini Agarwal & Mr. Vivek Agarwal)
            </h2>

            {/* <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-12 text-[#B35800]">
              At the Marriott Jim Corbett
              <br/>
               <a
                    href="https://maps.app.goo.gl/6wAY9hsmkpHv2gLd7"
                    className="font-eb-garamond font-medium underline md:text-lg text-[13px] md:mt-2 text-[#B35800]"
                    target="_blank"
                  >
                    View Directions
                  </a>
            </p> */}

            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-12 text-[#B35800]">
              for the following events
            </p>
          </div>

          <div className="flex justify-center mt-15 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-x-26 lg:gap-x-30">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="w-80 h-auto md:w-76 lg:w-80"
                  />

                  <h2 className="font-playfair-display font-medium text-[36px] md:text-3xl lg:text-[42px] mt-2 md:mt-4 text-[#B35800]">
                    {event.title_ceremony}
                  </h2>
                  <p className="font-eb-garamond font-medium md:mt-2 text-[#B35800] text-lg">
                    <span className="text-base">{event.date}</span> <br />
                    <span className="text-base"> {event.time} </span> <br />
                    <span className="text-base"> {event.food} </span> <br />
                    {/* <span className="text-base uppercase"> {event.venue_address} </span> <br/>
                     <a
                    href={event.link}
                    className="font-eb-garamond font-medium text-[#B35800] underline text-lg md:text-sm mt-2"
                    target="_blank">
                    View Directions
                  </a> */}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="font-eb-garamond font-medium md:mt-10 text-[#B35800] text-lg text-center mt-10">
              <h2 className="font-playfair-display font-medium text-[36px] md:text-3xl lg:text-[42px] mt-2 md:mt-4 text-[#B35800]">
                Venue
              </h2>
              <span className="text-base uppercase">Bel-La Monde </span> <br />
              <span className="text-base uppercase">
                NH309, Jim Corbett, Dhikuli, Garjiya, <br /> Uttarakhand
                244715{" "}
              </span>{" "}
              <br />
              <a
                href="https://maps.app.goo.gl/HRMYY5gNt4RnpmKn6"
                className="font-eb-garamond font-medium text-[#B35800] underline text-lg md:text-sm mt-2"
                target="_blank"
              >
                View Directions
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
