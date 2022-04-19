import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function LoginKakao() {
    const dispatch = useDispatch();

    const loginFormWithNaver = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
            callbackUrl: 'http://localhost:3000/login',
            isPopup: false,
            loginButton: { color: 'white', type: 2, height: '45'}
        });
        naverLogin.init();
    }

    useEffect(() => {
        loginFormWithNaver();
    } ,[])

    return (
        <div id='naverIdLogin'/>
    )
}