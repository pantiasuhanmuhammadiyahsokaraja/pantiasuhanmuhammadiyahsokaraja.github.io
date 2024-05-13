import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
// data
const itemData = [
  {
    img: "/donasi/foto sebelum renovasi 1.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 2.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 3.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 4.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 5.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 6.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 7.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 8.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 9.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 10.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 11.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 12.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 13.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 14.jpg",
  },
  {
    img: "/donasi/foto sebelum renovasi 15.jpg",
  },
];

const DonasiSlider = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100%" }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Image
              className="rounded-md"
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              width={100}
              height={100}
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default DonasiSlider;
