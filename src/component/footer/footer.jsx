import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col lg:!flex-row justify-center lg:!p-14 mx-3 py-5 space-y-5 lg:!space-y-0 bg-[#181724]">
      <div className="basis-3/6 ">
        <div className="flex flex-row items-center space-x-5">
          <img src="img/icon/logo.png" className="" alt="" />
          <h1 className="text-white text-sm lg:!text-lg">
            Unleash your gaming potential with Prime Gaming
          </h1>
        </div>
        <div className="my-5">
          <p className="text-gray-500 text-sm text-justify">
            Step into the future of gaming with Prime Gaming. Explore top-tier
            reviews, news, and in-depth analysis on the latest and greatest
            games. Join the gaming community now to get exclusive content and
            features.
          </p>
        </div>
        <div className="flex flex-row justify-around items-center space-x-7">
          <a href="https://t.me/IVIahdiar">
            <img src="img/logo/telegram-logo-36.png" className="scale-75" alt="" />
          </a>
          <a href="https://www.instagram.com/mahdiar.shahidi/">
            <img src="img/logo/Instagram.svg" alt="" />
          </a>
          <a href="https://x.com/IvIahdiar">
            <img src="img/logo/tweeter.svg" alt="" />
          </a>
          <a href="https://github.com/Mahdiar-Sh">
            <img src="img/logo/github-logo-24.png" className="w-[40px]" alt="" />
          </a>
        </div>
      </div>
      <div className="lg:!basis-1/6 space-y-3 lg:!space-y-5 flex flex-col">
        <h1 className="text-center text-lg text-[#FF5733] ">Explore</h1>
        <p className="text-center text-gray-500 text-sm">Trending games</p>
        <p className="text-center text-gray-500 text-sm">Upcoming releases</p>
        <p className="text-center text-gray-500 text-sm">Reviews</p>
        <p className="text-center text-gray-500 text-sm">News</p>
      </div>
      <div className="lg:!basis-1/6 space-y-3 lg:!space-y-5 flex flex-col">
        <h1 className="text-center text-lg text-[#FF5733] ">Resources</h1>
        <p className="text-center text-gray-500 text-sm">FAQ</p>
        <p className="text-center text-gray-500 text-sm">Tutorials</p>
        <p className="text-center text-gray-500 text-sm">Community Firum</p>
        <p className="text-center text-gray-500 text-sm">Membership</p>
      </div>
      <div className="lg:!basis-1/6 space-y-3 lg:!space-y-5 flex flex-col">
        <h1 className="text-center text-lg text-[#FF5733] ">Programs</h1>
        <p className="text-center text-gray-500 text-sm">Game Of The Month</p>
        <p className="text-center text-gray-500 text-sm">Game Of The Year</p>
        <p className="text-center text-gray-500 text-sm">Developer Spotlight</p>
        <p className="text-center text-gray-500 text-sm">Beta Access</p>
      </div>
      <div className="lg:!basis-3/12 text-center space-y-3 lg:!space-y-5 flex flex-col">
        <h1 className="text-center text-lg text-[#FF5733] ">Contact Us</h1>
        <p className="text-gray-500 text-sm">
          <span className="mr-2">
            <img src="img/icon/carbon_location.svg" className="inline" alt="" />
          </span>
          Iran - Mashhad
        </p>
        <p className="text-gray-500 text-sm">
          <span className="mr-2">
            <img src="img/icon/call.svg" className="inline" alt="" />
          </span>
          1234-56789
        </p>
        <p className="text-gray-500 text-sm">
          <span className="mr-2">
            <img src="img/icon/mail-24.svg" className="inline" alt="" />
          </span>
          mahdiarshahidi1982@gmail.com
        </p>
        <a className="text-gray-500 text-sm" href="https://www.figma.com/community/file/1423225773174472363">
        <img src="img/logo/figma-logo-36(2).png" alt="" className="inline scale-75" />
        Figma link</a>
      </div>
    </div>
  );
}
