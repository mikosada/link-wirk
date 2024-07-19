"use client";

import { useState } from "react";

const products = [
  {
    title: "Diesel Heater Kandang Ayam",
    image: "blower.jpg",
    specification: [
      [
        "Bahan Bakar:",
        "Daya Listrik:",
        "Blower:",
        "Pemantik:",
        "Total:",
        "Berat:",
        "Dimensi Packing Dus:",
      ],
      [
        "Solar",
        "1.5A",
        "0.08A",
        "1.60A x 220V = 352W",
        "37 kg",
        "99 x 41.5 x 51 cm (diluar peti kayu)",
      ],
    ],
  },
  {
    title: "Nipple Mangkok Ayam Broiler",
    image: "nipple.jpg",
    specification: [
      [
        "Bahan Berkualitas:",
        "Hemat Air:",
        "Mudah Dibersihkan:",
        "Mudah Digunakan:",
        "Ukuran:",
      ],
      [
        "Plastik ABS tahan lama dengan pin stainless steel dan ball valve otomatis 360° nipple.",
        "Desain yang memastikan air tidak terjatuh ke lantai, menjaga kandang tetap kering dan bersih.",
        "Potongan permukaan peralatan peternakan ini dipoles sehingga mudah dicuci.",
        "Cocok untuk peternak ayam, ayam pedaging, dan puyuh. Instalasi kedap air dan cepat.",
        "Tinggi sekitar 15 cm, lebar bola 6.8 cm.",
      ],
    ],
  },
  {
    title: "Nipple Drinker Kuning Tempat Minum Ayam",
    image: "drinker.png",
    specification: [
      ["Bahan:", "Warna:", "Ukuran:", "Fungsi:"],
      [
        "Plastik ABS dan Stainless Steel.",
        "Kuning.",
        "Tinggi: 15 cm / 5.91 inch, Lebar Bola: 6.8 cm / 2.68 inch",
        "Memberikan air minum secara otomatis",
      ],
    ],
  },
  {
    title: "Pengait Tali Pengikat Tali untuk TMO TMOA Tempat Minum Makan Ayam",
    image: "kait.png",
    specification: [
      ["Ukuran:", "Lubang Standar:", "Penggunaan:"],
      [
        "Panjang x Lebar x Tinggi - 70 x 35 x 6 mm.",
        "Ukuran 5 mm, dapat diperbesar jika diperlukan",
        "Cocok untuk tali tambang dengan diameter hingga 5 mm; jika tali tambang lebih besar, lubang dapat diperbesar dengan dibor.",
      ],
    ],
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };
  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };
  const { title, image, specification } = products[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold my-8 text-center">{title}</h2>
      <div className="flex items-center">
        <button
          onClick={prevProduct}
          className="mr-4 p-2 gray-200 rounded-full"
        >
          &larr;
        </button>
        <img
          src={image}
          alt={title}
          className="mr-4 rounded-3xl w-[200px] h-[200px]"
        />
        <button
          onClick={nextProduct}
          className="mr-4 p-2 gray-200 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};
export default ProductCarousel;
