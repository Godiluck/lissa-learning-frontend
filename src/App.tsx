import React, {useEffect} from 'react';
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

const App = () => {

    //  TODO
    // useEffect(() => {
    //     console.log(localStorage.getItem('externalId'))
    // }, [])

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
                    <Header/>
                    <Routes>
                        <Route path='/' element={<HomepageLayout/>}/>
                        <Route path='auth' element={<AuthLayout/>}/>
                        <Route path='lk' element={<AccountLayout/>}>
                            <Route path='UUID/profile' element={<Profile/>}/>
                            <Route path='UUID/analytics' element={<Analytics/>}/>
                            <Route path='UUID/review' element={<Review/>}/>
                            <Route path='UUID/reports' element={<Reports/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </div>
            </SnackbarProvider>
        </BrowserRouter>
    );
};

export default App;