import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import style from '../styles/nav.module.scss';
import { logoutAct } from '../store/action/loginState';

export default function NavProfile({ name, path }: { name: string, path?: string }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const onMovePage = () => {
        const { localStorage } = window;
        if (path) return router.push(path);
        const kind = window.localStorage.getItem('login-kind');
        if (kind) localStorage.removeItem('login-kind');
        localStorage.removeItem('token');
        console.log(window.Kakao.Auth.getAccessToken())
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('아직 로그인 인됨');
            return;
        }
        window.Kakao.Auth.logout(function() {
            console.log('로그아웃 성공');
        });
        dispatch(logoutAct());
    };

    return (
    <button className={style.navLoginOption} onClick={onMovePage}>{name}</button>
    )
}