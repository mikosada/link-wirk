"use client";

import { useState, useEffect } from "react";

const testi = [
  {
    name: "Yohanes1230",
    rating: 5,
    desc: "Kualitas: Sangat Bagus, barang sampai dengan baik",
    image: "testi1.png",
  },
  {
    name: "idrisbalegede",
    rating: 5,
    desc: "",
    image: "",
  },
  {
    name: "y*****n",
    rating: 5,
    desc: "Kualitas: Sangat Bagus",
    image: "testi2.png",
  },
  {
    name: "alberalx98",
    rating: 5,
    desc: "Kualitas: sangat bagus, barang yang dikirim sangat berkualitas bagus, pengantaran cepat, ini kedua kalinya saya beli barang disini.👍👍👍",
    image: "testi3.png",
  },
  {
    name: "dutasena",
    rating: 5,
    desc: "",
    image: "",
  },
  {
    name: "ivanmaikel321",
    rating: 5,
    desc: "Kualitas: sangat bagus, Kegunaan: sangat berguna, Material: baguss, barang bagus, di packing dengan baik sehingga sampai di rumah tidak pecah atau retak, barang komplit,admin fast respon, bintang 5 lah, next belanja disini lagi kalo ada rezeki",
    image: "testi4.png",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("slide-out-left");
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testi.length - 1 ? 0 : prevIndex + 1
        );
        setAnimation("slide-in-right");
      }, 1000); // Sama dengan durasi animasi
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { name, rating, desc, image } = testi[currentIndex];

  return (
    <div
      className={`flex gap-8 items-center bg-[#BACBDA] p-5 m-8 rounded-2xl justify-between ${animation}`}
    >
      <div className={`flex flex-col flex-1 items-center mb-4 ${animation}`}>
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-bold mr-2 text-[#023566]">{name}</h2>
          <span className="text-yellow-500">{Array(rating).fill("⭐")}</span>
        </div>
        <p className="text-center text-[#023566]">{desc}</p>
      </div>
      <div className={`flex flex-2 items-center justify-center ${animation}`}>
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-[200px] h-[200px] object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
