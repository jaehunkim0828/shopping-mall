import Image from 'next/image';
import { useRouter } from "next/router";

import style from '../styles/nav.module.scss';
import logo from '../public/images/logo.jpg'
import NavOption from './NavOption';
import { fakeNavOption, fakeNavProfile } from '../fakeData';
import NavProfile from './NavProfile';

export default function Nav() {
    const router = useRouter();

    const goMain = () => {
        router.push('/');
    }
    
    return (
        <div className={style.navContainer}>
            <div className={style.navLoginSection}>
                {fakeNavProfile.map((option, i) => <NavProfile key={`nav profile index ${i}`} name={option.name} path={option.path}/>)}
            </div>
            <div className={style.navLogoContainer}>
                <div onClick={goMain}>
                    <Image 
                        src={logo}
                        width={500}
                        height={100}
                    />
                </div>
            </div>
            <div className={style.navOptions}>
                {fakeNavOption.map((option, i) => {
                    return <NavOption name={option} color={option === 'SALE' ? '#E0BFE6' : 'black'} key={`option ${i}`}/>
                })}
            </div>
        </div>
    )
}