import { useRouter } from "next/router";

import style from '../styles/nav.module.scss';

export default function NavProfile({ name, path }: { name: string, path: string }) {
    const router = useRouter();

    const onMovePage = () => router.push(path);
    return (
    <button className={style.navLoginOption} onClick={onMovePage}>{name}</button>
    )
}