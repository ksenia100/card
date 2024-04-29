import React from 'react';
import Rating from '@mui/material/Rating';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from '../ui/button';
import styles from './ProductCardShadcn.module.css'

export interface ProductProps2 {
  name: string;
  price: string;
  colorOptions: string[];
  sizeOptions: string[];
  capacityOptions: string[];
}

const ProductCardShadcn: React.FC<ProductProps2> = ({ name, price, colorOptions, sizeOptions, capacityOptions }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.imageContainer} >
        <img src="https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SL1500_.jpg" alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <a href="#" className={styles.visit}>Visit the HP Store</a>
        <div className={styles.rating}>
          <p className={styles.txtSmall}>3.9</p>
          <Rating
            name="customized-empty"
            defaultValue={4.5}
            precision={0.5} />
          <a href="#" className={styles.rate}>1,272 ratings</a>
          <p className={styles.line}>|</p>
          <a href="#" className={styles.search}>Search this page</a>
        </div>
        <p className={styles.txtSmall}>1K+ bought in past month</p>
        <div className={styles.totalPrice}>
          <p className={styles.discount}>-11%</p>
          <p className={styles.price}>{price}</p>
        </div>
        <p className={styles.list}> List Price: $209.99 </p>
        <p className={styles.aviable}>Available at a lower price from other sellers that may not offer free Prime shipping.</p>
        <div className={styles.select}>
          <Select>
            <SelectTrigger className={styles.SelectTrigger}>
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent className={styles.SelectContent}>
              {colorOptions.map((color, index) => (
                <SelectItem key={index} value={color} className={styles.SelectItem}>{color}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className={styles.SelectTrigger}>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className={styles.SelectContent}>
              {sizeOptions.map((size, index) => (
                <SelectItem key={index} value={size} className={styles.SelectItem}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className={styles.SelectTrigger}>
              <SelectValue placeholder="Capacity" />
            </SelectTrigger>
            <SelectContent className={styles.SelectContent}>
              {capacityOptions.map((capacity, index) => (
                <SelectItem key={index} value={capacity} className={styles.SelectItem}>{capacity}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className={styles.btn}>Add to List</Button>
      </div>
    </div>
  );
}

export default ProductCardShadcn;