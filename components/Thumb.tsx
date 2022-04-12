import Image, { StaticImageData } from "next/image";

import style from '../styles/thumb.module.scss';

export default function thumb({ size, data  }: { size?: number, data: { image: StaticImageData, title: string, price: string, firstPrice: string, clothesSize: string }}) {
    const { image, title, clothesSize, firstPrice, price } = data;
    
    return (
        <div className={style.thumbContainer}>
            <Image src={image} width={size?? 300} height={size?? 300}/>
            <div className={style.title}>{title}</div>
            <div className={style.size}>{clothesSize}</div>
            <div className={style.firstPrice}>{firstPrice}</div>
            <div className={style.price}>{price}</div>
        </div>
    )
}