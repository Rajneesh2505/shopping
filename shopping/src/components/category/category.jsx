import React, { useState } from "react";
import Style from "./category.module.css";
import { useValue } from "../../itemContext";

const Category = () => {
  const { handleCategoryFilter,rangeValue,handleValue } = useValue();

  return (
    <>
      <div className={Style.container}>
        <h5>Filter</h5>
        <form>
          <div className={Style.price}>
            <label htmlFor="price">Price: <span>{rangeValue}</span></label>
          </div>
          <div>
            <input
              type="range"
              id="price"
              name="price"
              min="0"
              max="1000"
              onChange={(e) => handleValue(e)}
            />
          </div>
          <h5>Category</h5>
          <div className={Style.containerCategory} >
          <div className={Style.category}>
              <input
                type="radio"
                id="all"
                name="category"
                onClick={() => handleCategoryFilter("")}
              />
              <label htmlFor="">All</label>
            </div>
            <div>
              <input
                type="radio"
                id="men"
                name="category"
                onClick={() => handleCategoryFilter("men's clothing")}
              />
              <label htmlFor="men">Men's Clothing</label>
            </div>
            <div>
              <input
                type="radio"
                id="women"
                name="category"
                onClick={() => handleCategoryFilter("women's clothing")}
              />
              <label htmlFor="women">Women's Clothing</label>
            </div>
            <div>
              <input
                type="radio"
                id="jewelry"
                name="category"
                onClick={() => handleCategoryFilter("jewelery")}
              />
              <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div>
              <input
                type="radio"
                id="electronics"
                name="category"
                onClick={() => handleCategoryFilter("electronics")}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;
