import router from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { loginAct } from "../store/action/loginState";
import kakao from '../public/images/kakao_login_medium.png';

export default function LoginKakao() {
    const dispatch = useDispatch();

    const loginFormWithKakao = () => {
        window.Kakao.Auth.login({
            success(authObj: any) {
                window.localStorage.setItem('token', authObj.access_token);
                console.log(authObj);
                dispatch(loginAct());
                router.push('/');
            },
            fail(err: any) {
                console.log(err);
            }
        })
    }

    return (
        <button onClick={loginFormWithKakao}>
            <Image 
                src={kakao}
                alt='카카오 로그인 버튼'
            />
        </button>
    )
}