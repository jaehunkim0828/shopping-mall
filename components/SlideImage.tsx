import { useState } from 'react';
import Image from 'next/image';

import style from '../styles/slideImage.module.scss';
import { fakeSlideImage } from '../fakeData';
import  right  from '../public/images/right.png';
import  left  from '../public/images/left.png';



export default function SlideImage({ size }: { size: number }) {
    const [location, setlocation] = useState(0);

    const images = fakeSlideImage;

    const onMove = (i: number) => {
        if (images.length <= i) {
            setlocation(0);
            return;
        }
        if (i < 0) {
            setlocation(images.length - 1);
            return;
        }
        setlocation(i);
    }

    return (
        <div className={style.slideContainer} style={{ width: `${size.toString()}px`, height: `${size.toString()}px`}}>
            <div 
                className={style.slideList}
                style={{
                    transform: `translate3d(
                        ${location * -size}px, 0px, 0px
                    )`,
                    width: `${(size * images.length).toString()}px`
                }}
            >
                {images.map((image, i) => (
                    <div key={i} className={style.slide} style={{ width: `${size.toString()}px` }}>
                        <Image
                            className={style.image}
                            src={image}
                            width='100%'
                            height='100%'
                            layout="responsive"
                        />
                    </div>
                ))}
                
            </div>
            <div className={style.slideButton} style={{ width: `${size.toString()}px`, bottom: `${(size * 0.6).toString()}px`}}>
                <button 
                    onClick={() => onMove(location - 1)}
                    className={style.btn}
                >
                    <Image src={left} width={20} height={20}/>
                </button>
                <button 
                    className={style.btn} 
                    onClick={() => onMove(location + 1)}
                >
                    <Image src={right} width={20} height={20}/>
                </button>
            </div>
        </div>
    )
}