import s from './style.module.scss'

export const DesktopNavBar = ({ items }) => {
    return (
        <nav>
            <ul className={s.navBar}>
                {items.map(item =>
                    <li>
                        <a href={item.pathTo}>{item.name}</a>
                    </li>)}
            </ul>
        </nav>
    )
}
