import Image from 'next/image';

import style from '../styles/nav.module.scss';
import logo from '../public/images/logo.jpg'
import NavOption from './NavOption';
import { fakeNavOption, fakeNavProfile } from '../fakeData';
import NavProfile from './NavProfile';

export default function Nav() {
    
    return (
        <div className={style.navContainer}>
            <div className={style.navLoginSection}>
                {fakeNavProfile.map((option, i) => <NavProfile key={`nav profile index ${i}`} name={option.name} path={option.path}/>)}
            </div>
            <div className={style.navLogoContainer}>
                <Image 
                    src={logo}
                    width={500}
                    height={100}
                />
            </div>
            <div className={style.navOptions}>
                {fakeNavOption.map((option, i) => {
                    return <NavOption name={option} color={option === 'SALE' ? '#E0BFE6' : 'black'} key={`option ${i}`}/>
                })}
            </div>
        </div>
    )
}