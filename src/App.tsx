import React, {useEffect, useState} from 'react';
import "./App.scss"
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomepageLayout from "./components/Homepage/HomepageLayout";
import AuthLayout from "./components/Auth/AuthLayout";
import {SnackbarProvider} from "notistack";
import AccountLayout from "./components/Account/AccountLayout";
import Profile from "./components/Account/components/Profile/Profile";
import Reports from "./components/Account/components/Reports/Reports";
import Review from "./components/Account/components/Review/Review";
import Analytics from "./components/Account/components/Analytics/Analytics";
import {useAppSelector} from "./hooks/redux";
import Offers from "./components/Account/components/Offers/Offers";
import Modal from "./components/Modal/Modal";
import EnrollModalChild from "./components/Homepage/components/EnrollModalChild/EnrollModalChild";

const App = () => {
    const {externalId} = useAppSelector((state) => state.userReducer)
    const [isEnroll, setIsEnroll] = useState<boolean>(false)

    useEffect(() => {
        if (isEnroll) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isEnroll])

    return (
        <BrowserRouter>
            <SnackbarProvider
                maxSnack={10}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                hideIconVariant={true}
            >
                <div className="wrapper">
                    <Header setIsEnroll={setIsEnroll}/>
                    <Modal isModal={isEnroll} child={<EnrollModalChild onClose={() => setIsEnroll(false)}/>}
                           onClose={() => setIsEnroll(false)}/>
                    <Routes>
                        <Route path='/' element={<HomepageLayout setIsEnroll={setIsEnroll}/>}/>
                        <Route path='auth' element={<AuthLayout/>}/>
                        <Route path='lk' element={<AccountLayout/>}>
                            {externalId && (
                                <>
                                    <Route path={`${externalId}/profile`} element={<Profile/>}/>
                                    <Route path={`${externalId}/analytics`} element={<Analytics/>}/>
                                    <Route path={`${externalId}/review`} element={<Review/>}/>
                                    <Route path={`${externalId}/reports`} element={<Reports/>}/>
                                    <Route path={`${externalId}/offers`} element={<Offers/>}/></>
                            )}
                        </Route>
                    </Routes>
                    <Footer/>
                </div>
            </SnackbarProvider>
        </BrowserRouter>
    )
        ;
};

export default App;