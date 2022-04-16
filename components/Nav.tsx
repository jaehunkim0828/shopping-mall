import Image from 'next/image';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import style from '../styles/nav.module.scss';
import logo from '../public/images/logo.jpg'
import NavOption from './NavOption';
import { fakeNavOption, fakeNavProfile, fakeNavLogin } from '../fakeData';
import NavProfile from './NavProfile';
import { useEffect, useState } from 'react';
import { RootState } from '../store/reducers';

export default function Nav() {
    const router = useRouter();
    const { state } = useSelector((state: RootState) => state.loginState);

    
    const [navProfile, setNavProfile] = useState<{name: string, path?: string}[]>(fakeNavLogin);

    const goMain = () => {
        router.push('/');
    }

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setNavProfile(fakeNavProfile);
            return;
        }
        setNavProfile(fakeNavLogin);
    }, [state])
    
    return (
        <div className={style.navContainer}>
            <div className={style.navLoginSection}>
                {navProfile.map((option, i) => <NavProfile key={`nav profile index ${i}`} name={option.name} path={option.path}/>)}
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