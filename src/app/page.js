import React from "react";
import ProductCarousel from "/src/app/components/product";

const Home = () => {
  return (
    <main className="max-w-2xl mx-auto">
      <div>
        <img src="hero.jpg" alt="hero" className="w-full" />
      </div>
      <div className="my-[30px] flex flex-col justify-center">
        <div className="">
          <h2 className="flex justify-center text-2xl font-bold text-[#023566]">
            SELAMAT DATANG DI FARM PLUS
          </h2>
          <div className="p-[20px]"></div>
          <div className="flex flex-col justify-center gap-y-5">
            <div className="flex justify-center">
              <button className="flex w-[300px] h-[50px] bg-[#009418] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                <img src="whatsapp.svg" className="w-[30px] mr-3" />
                <h2 className="text-2xl text-white font-bold">Whatsapp</h2>
              </button>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[300px] h-[50px] bg-[#B200AB] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                <img src="insta.svg" className="w-[30px] mr-3" />
                <h2 className="text-2xl text-white font-bold">Instagram</h2>
              </button>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[300px] h-[50px] bg-[#414141] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                <img src="tiktok.svg" className="w-[25px] mr-3" />
                <h2 className="text-2xl text-white font-bold">Tiktok</h2>
              </button>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[300px] h-[50px] bg-[#DB4F00] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                <img src="shopee.svg" className="w-[30px] mr-3" />
                <h2 className="text-2xl text-white font-bold">Shopee</h2>
              </button>
            </div>
          </div>
          <div className="p-[30px]"></div>
        </div>
        <div className="mb-8">
          <h2 className="flex justify-center text-2xl font-bold text-[#023566] mb-8">
            BEBERAPA PRODUK KAMI
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-8 w-fit">
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img src="product1.png" />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img src="product2.png" />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img src="product3.png" />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img src="product4.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-[30px]"></div>
        <div className="w-full bg-[#F3F3C5]">
          <ProductCarousel />
        </div>
      </div>
    </main>
  );
};

export default Home;
