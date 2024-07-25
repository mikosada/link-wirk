import React from "react";
import ProductCarousel from "/src/app/components/product";
import TestimonialCarousel from "./components/testimonial";

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
          <div
            className="flex flex-col justify-center gap-y-5"
            id="social-media"
          >
            <div className="flex justify-center">
              <a href="https://wa.me/085186668382?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda.">
                <button className="flex w-[300px] h-[50px] bg-[#009418] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                  <img src="whatsapp.svg" className="w-[30px] mr-3" />
                  <h2 className="text-2xl text-white font-bold">Whatsapp</h2>
                </button>
              </a>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[300px] h-[50px] bg-[#B200AB] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                <img src="insta.svg" className="w-[30px] mr-3" />
                <h2 className="text-2xl text-white font-bold">Instagram</h2>
              </button>
            </div>
            <div className="flex justify-center">
              <a href="https://vt.tiktok.com/ZSYv4tUdX/?page=Mall">
                <button className="flex w-[300px] h-[50px] bg-[#414141] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                  <img src="tiktok.svg" className="w-[25px] mr-3" />
                  <h2 className="text-2xl text-white font-bold">Tiktok</h2>
                </button>
              </a>
            </div>
            <div className="flex justify-center" id="online-shop">
              <a href="https://shopee.co.id/farm_plus?entryPoint=ShopByPDP">
                <button className="flex w-[300px] h-[50px] bg-[#DB4F00] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                  <img src="shopee.svg" className="w-[30px] mr-3" />
                  <h2 className="text-2xl text-white font-bold">Shopee</h2>
                </button>
              </a>
            </div>
          </div>
          <div className="p-[30px]"></div>
        </div>
        <div className="mb-8">
          <h2
            className="flex justify-center text-2xl font-bold text-[#023566] mb-8"
            id="produk"
          >
            BEBERAPA PRODUK KAMI
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-8 w-fit">
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img src="product1.png" />
              </div>
              <a href="https://shopee.co.id/Nipple-Nipel-Niple-drinker-kuning-tempat-minum-ayam-A5-i.1268737948.25132258534?sp_atk=ba0e1127-9b52-4787-a70c-df3f315939a2&xptdk=ba0e1127-9b52-4787-a70c-df3f315939a2">
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <img src="product2.png" />
                </div>
              </a>
              <a href="https://shopee.co.id/Nipple-Nippel-Nepel-Nipel-A9-Mangkok-Ayam-Broiler-Puyuh-A9-Mangkok-multifungsi-ayam-broiler-i.1268737948.27552901929?sp_atk=9293133f-e9cd-4f69-8667-aadb3fcdd9a1&xptdk=9293133f-e9cd-4f69-8667-aadb3fcdd9a1">
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <img src="product3.png" />
                </div>
              </a>
              <a href="https://shopee.co.id/Pengait-Tali-Pengikat-Tali-Ikat-Tali-untuk-TMO-TMOA-tempat-minum-makan-ayam-i.1268737948.28852928743?sp_atk=79deb979-d4e0-42c2-b4b2-c6c7a684f8d1&xptdk=79deb979-d4e0-42c2-b4b2-c6c7a684f8d1">
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <img src="product4.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="p-[30px]"></div>
        <div className="w-full bg-[#F3F3C5] py-[24px]">
          <ProductCarousel />
        </div>
        <div className="py-8">
          <div className="">
            <h2
              className="flex justify-center text-center text-2xl font-bold text-[#023566] mb-3"
              id="grosir"
            >
              BELANJA GROSIR DI <br />
              FARM PLUS
            </h2>
            <h3 className="flex justify-center text-center text-l font-bold text-[#023566] mb-6">
              Dapatkan Harga Terbaik untuk Pembelian <br /> dalam Jumlah Banyak
            </h3>
            <div className="flex justify-center">
              <a href="https://wa.me/085186668382?text=Hai%2C%20saya%20mau%20harga%20grosir.">
                <button className="flex w-[300px] h-[50px] bg-[#009418] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                  <img src="whatsapp.svg" className="w-[30px] mr-3" />
                  <h2 className="text-2xl text-white font-bold">Whatsapp</h2>
                </button>
              </a>
            </div>
          </div>
          <h2 className="flex justify-center text-center text-l font-bold text-[#023566] my-12">
            Atau
          </h2>
          <div className="">
            <h2
              className="flex justify-center text-center text-2xl font-bold text-[#023566] mb-3"
              id="reseller"
            >
              TERTARIK BERGABUNG <br /> MENJADI RESELLER?
            </h2>
            <h3 className="flex justify-center text-center text-l font-bold text-[#023566] mb-6">
              HUBUNGI KAMI
            </h3>
            <div className="flex justify-center">
              <a href="https://wa.me/085186668382?text=Halo%2C%20saya%20mau%20gabung%20jadi%20reseller.">
                <button className="flex w-[300px] h-[50px] bg-[#009418] justify-center items-center rounded-full transform transition-transform duration-300 hover:scale-105">
                  <img src="whatsapp.svg" className="w-[30px] mr-3" />
                  <h2 className="text-2xl text-white font-bold">Whatsapp</h2>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="my-12" id="testimoni">
          <TestimonialCarousel />
          <div className="flex justify-center">
            <a href="https://shopee.co.id/buyer/1269217484/rating?shop_id=1268737948">
              <button className="p-2 border bg-[#023566] text-white rounded-xl">
                Testimoni lainnya
              </button>
            </a>
          </div>
        </div>
        <footer className="bg-[#023566] grid grid-cols-4 grid-rows-1 py-12">
          <div className="flex justify-center items-center">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="flex flex-col text-white font-bold">
            <a href="#social-media">Social Media</a>
            <a href="#online-shop">Online Shop</a>
            <a>Gallery</a>
            <a href="#produk">Produk</a>
            <a href="#reseller">Join Reseller</a>
          </div>
          <div className="flex flex-col  text-white font-bold">
            <a href="#grosir">Grosir</a>
            <a href="#testimoni">Testimoni</a>
          </div>
          <div className="flex  items-center text-white font-bold gap-2">
            <svg
              width="30"
              height="34"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6875 3.06252C14.0313 5.40627 14.0312 9.15627 11.7187 11.4688L7.5 15.6875L3.28125 11.4688C0.96875 9.15627 0.96875 5.40627 3.28125 3.09377L3.3125 3.06252C5.625 0.75002 9.34375 0.71877 11.6875 3.06252ZM11.6875 3.06252C11.6563 3.03127 11.6563 3.03127 11.6875 3.06252Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M7.5 8.8125C8.36294 8.8125 9.0625 8.11294 9.0625 7.25C9.0625 6.38706 8.36294 5.6875 7.5 5.6875C6.63706 5.6875 5.9375 6.38706 5.9375 7.25C5.9375 8.11294 6.63706 8.8125 7.5 8.8125Z"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>
            Jakarta Barat
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
