import React from 'react';
import { Card, Text, Button } from "@radix-ui/themes";
import styles from './ProductCardRadixUI.module.css'
import Rating from '@mui/material/Rating';

export interface ProductProps {
    name: string;
    price: string;
    colorOptions: string[];
    sizeOptions: string[];
    memoryOptions: string[]
}

const ProductCardRadixUI: React.FC<ProductProps> = ({ name, price, colorOptions, sizeOptions, memoryOptions }) => {
    return (
        <Card className={styles.card}>
            <div className={styles.imageContainer}>
                <img src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201111082120971458/201210170016351443.png@jpeg" alt={name} className={styles.image} />
            </div>
            <div className={styles.detailsContainer}>
                <Text className={styles.productName}>{name}</Text>
                <div className={styles.rateContainer}>
                    <Rating
                        name="customized-empty"
                        defaultValue={4.5}
                        precision={0.5} />
                    <a href='#' className={styles.feedback}>398 відгуків</a>
                </div>
                <div className={styles.productDetails}>
                    <Text className={styles.price}>{price}</Text>
                    <Button className={styles.buyButton}>Купити</Button>
                    <Button className={styles.buyCredit}>Купити в кредит</Button>
                </div>
                <div className={styles.selections}>
                    <select className={styles.select}>
                        {colorOptions.map((color, index) => (
                            <option key={index}>{color}</option>
                        ))}
                    </select>
                    <select className={styles.select}>
                        {sizeOptions.map((size, index) => (
                            <option key={index}>{size}</option>
                        ))}
                    </select>
                    <select className={styles.select}>
                        {memoryOptions.map((size, index) => (
                            <option key={index}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.description}>
                    <Text>Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий</Text>
                </div>
            </div>
        </Card>
    );
}

export default ProductCardRadixUI;
