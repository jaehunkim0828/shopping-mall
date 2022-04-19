import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import { RootState } from '../store/reducers';
import style from '../styles/login.module.scss';
import { loginAct } from '../store/action/loginState';
import LoginGoogle from '../components/LoginGoogle';
import LoginKakao from '../components/LoginKakao';
import LoginNaver from '../components/LoginNaver';



export default function login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { state } = useSelector((state: RootState) => state.loginState);

    useEffect(() => {
        if (window.location.href.includes('access_token')) {
            window.localStorage.setItem('token', window.location.href.split('=')[1].split('&')[0]?? 'none');
            dispatch(loginAct());
            router.push('/');
        };
    }, [state])

    return (
        <div className={style.loginContainer}>
            <div className={style.loginForm}>
                <div className={style.desc}>회원 로그인</div>
                <form>
                    <div>
                        <div className={style.loginInput}>
                            <div>아이디</div>
                            <input />
                        </div>
                        <div className={style.loginInput}>
                            <div>비밀번호</div>
                            <input />
                        </div>
                    </div>
                    <button>로그인</button>
                </form>
                <div className={style.desc} >SNS 간편 로그인</div>
                <div className={style.snsContainer}>
                    <LoginNaver />
                    <LoginGoogle />
                    <LoginKakao />
                </div>
                <div>
                    <div>
                        <div>아이디 찾기</div>
                        <div>비밀번호 찾기</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}