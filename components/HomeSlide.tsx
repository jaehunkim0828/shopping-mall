import { useEffect, useState } from 'react';
import Image from 'next/image';

import style from '../styles/homeslide.module.scss';
import  right  from '../public/images/right.png';
import  left  from '../public/images/left.png';
import { useResize } from '../util/hooks/useResize';

export default function HomeSlide({ size, hei, wid, images }: { size: number, hei?: string, wid?: string, images: any[] }) {
    const [location, setlocation] = useState(0);
    const { nowWidth } = useResize();


    const width = nowWidth?? 0 < 1248 ? '1248px' : wid;
    const height = nowWidth?? 0 < 1248 ? '650px' : hei;

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

    useEffect(() => {
            
    }, [])

    return (
        <div className={style.slideContainer} style={{ width }}>
            <div 
                className={style.slideList}
                style={{
                    transform: `translate3d(
                        ${nowWidth?? 0 < 1248 ? `${location * -1248}px` : `${location * -80}vw`}, 0px, 0px
                    )`,
                    width : nowWidth?? 0 < 1248 ? `3744px` : wid,
                    height
                }}
            >
                {images.map((image, i) => (
                    <div key={i} className={style.slide} style={{ width }}>
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
            <div className={style.slideButton} style={{ width, bottom: nowWidth?? 0 < 1248 ? `${650 * 0.5}px` : hei}}>
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