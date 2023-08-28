import React, {useEffect, useState} from 'react';
import s from "./style.module.scss"
import ProfileNavIcon from "../../svgs/ProfileNavIcon";
import AnalyticsNavIcon from "../../svgs/AnalyticsNavIcon";
import ReportsNavIcon from "../../svgs/ReportsNavIcon";
import ReviewNavIcon from "../../svgs/ReviewNavIcon";
import {Link, Outlet, useLocation, useNavigate,} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

interface INavNode {
    name: string,
    pathTo: string,
    image: JSX.Element,
    isActive: boolean,
}

const AccountLayout = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const { token } = useAppSelector((state) => state.userReducer)

    const navNodesInitialState: INavNode[] = [
        {name: "Профиль", pathTo: "/lk/UUID/profile", image: <ProfileNavIcon/>, isActive: false},
        {name: "Аналитика", pathTo: "/lk/UUID/analytics", image: <AnalyticsNavIcon/>, isActive: false},
        {name: "Отчеты", pathTo: "/lk/UUID/reports", image: <ReportsNavIcon/>, isActive: false},
        {name: "Ревью", pathTo: "/lk/UUID/review", image: <ReviewNavIcon/>, isActive: false},
    ]

    const isActive = (path) => path === pathname

    const checkPath = () => {
        const newNav = navNodesInitialState
        navNodesInitialState.forEach((node, index) => {
            if (isActive(node.pathTo)) {
                newNav[index].isActive = true
            }
        })
        return newNav
    }

    const [navNodes, setNavNodes] = useState<INavNode[]>(checkPath())

    useEffect(() => {
        setNavNodes(checkPath())
    }, [pathname])

    useEffect(() => {
        if (token === '') {
            navigate('/auth')
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.avatarNavWrapper}>
                <div className={s.avatarWrapper}>
                    <div className={s.avatarInnerBg}/>
                </div>
                <div className={s.navWrapper}>
                    <ul className={s.nav}>
                        {navNodes.map((node) => (
                            <li key={node.pathTo} style={node.isActive ? {background: "#37BD80"} : {}} className={s.navItemWrapper}>
                                <Link style={node.isActive ? {color: "#FFFFFF"} : {}} className={s.navItem} to={node.pathTo}>{node.image}{node.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={s.profileContent}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AccountLayout;