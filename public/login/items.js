"use strict";

const productsData = {
  products: [
    {
      item_name: "Product A",
      item_price_one: 29.99,
      item_price_two: 27.59,
      item_description: `A high-quality product with various features.`,
      item_inStock: true,
      item_onOffer: false,
      item_images: [
        {
          image_name: "product_a_image1.jpg",
          image_path: "/images/product_a_image1.jpg",
          is_thumbnail: true,
          alt: "Product A Thumbnail 1",
        },
        {
          image_name: "product_a_image2.jpg",
          image_path: "/images/product_a_image2.jpg",
          is_thumbnail: false,
          alt: "Product A Image 2",
        },
        {
          image_name: "product_a_image3.jpg",
          image_path: "/images/product_a_image3.jpg",
          is_thumbnail: false,
          alt: "Product A Image 3",
        },
      ],
    },
    // Add more products here...
  ],
};

export default productsData;
