import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import style from '../styles/nav.module.scss';
import { logoutAct } from '../store/action/loginState';

export default function NavProfile({ name, path }: { name: string, path?: string }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const onMovePage = () => {
        if (path) return router.push(path);
    };

    const logout = async () => {
        const { localStorage, gapi } = window;

        localStorage.removeItem('token');
        if (localStorage.getItem('com.naver.nid.access_token')) {
            localStorage.removeItem('com.naver.nid.access_token');
            localStorage.removeItem('com.naver.nid.oauth.state_token');
        }
        dispatch(logoutAct());

        if (gapi.auth2) {
            const auth2 = await gapi.auth2.getAuthInstance();
            auth2
                .signOut()
                .then(auth2.disconnect())
                .catch(console.log);
        }
        if (window.Kakao.Auth.getAccessToken()) {
            //카카오 로그인
            window.Kakao.Auth.logout(function() {
                console.log('로그아웃 성공');
            });
            return;
        }
    }

    return (
    <button className={style.navLoginOption} onClick={path? onMovePage : logout}>{name}</button>
    )
}