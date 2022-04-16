import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import { RootState } from '../store/reducers';
import style from '../styles/login.module.scss';
import kakao from '../public/images/kakao_login_medium_narrow.png';
import { loginAct } from '../store/action/loginState';

export default function login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { state } = useSelector((state: RootState) => state.loginState);

    const loginFormWithKakao = () => {
        window.Kakao.Auth.login({
            success(authObj: any) {
                console.log(authObj);
                window.localStorage.setItem('token', authObj.access_token);
                router.push('/');
                dispatch(loginAct());
            },
            fail(err: any) {
                console.log(err);
            }
        })
    }

    useEffect(() => {
        if (window.localStorage.getItem('token')) router.push('/');
    }, [state])
    return (
        <div className={style.loginContainer}>
            <div className={style.loginForm}>
                <div>회원 로그인</div>
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
                <div>SNS 간편 로그인</div>
                <div className={style.snsContainer}>
                    <button>네이버</button>
                    <button>구글</button>
                    <button onClick={loginFormWithKakao}>
                        <Image 
                            src={kakao}
                            alt='카카오 로그인 버튼'
                        />
                    </button>
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