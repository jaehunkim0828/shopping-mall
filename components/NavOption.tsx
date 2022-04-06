import style from '../styles/nav.module.scss';

export default function NavOption({name, color}: { name: string, color: string }) {
    return (
        <button 
            className={style.navOption}
            style={{ color }}
        >
            {name}
        </button>
    )
};