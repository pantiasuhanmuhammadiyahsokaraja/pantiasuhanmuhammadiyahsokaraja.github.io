import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
// data
const itemData = [
  {
    img: "/about/gambar 2.jpg",
  },
  {
    img: "/about/gambar 3.jpg",
  },
  {
    img: "/about/gambar 4.jpg",
  },
  {
    img: "/about/gambar 5.jpg",
  },
  {
    img: "/about/gambar 6.jpg",
  },
  {
    img: "/about/gambar 7.jpg",
  },
  {
    img: "/about/gambar 8.jpg",
  },
  {
    img: "/about/gambar 9.jpg",
  },
];

const WorkSlider = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100%" }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Image
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

export default WorkSlider;
