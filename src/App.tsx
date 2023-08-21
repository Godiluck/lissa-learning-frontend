import React from 'react';
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

const App = () => {
    return (
        <BrowserRouter>
            <SnackbarProvider
                maxSnack={10}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                hideIconVariant={true}
                disableWindowBlurListener
            >
                <div className="wrapper">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<HomepageLayout/>}/>
                        <Route path='auth' element={<AuthLayout/>}/>
                        <Route path='account' element={<AccountLayout/>}>
                            <Route path='profile' element={<Profile/>}/>
                            <Route path='analytics' element={<Profile/>}/>
                            <Route path='review' element={<Profile/>}/>
                            <Route path='reports' element={<Reports/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </div>
            </SnackbarProvider>
        </BrowserRouter>
    );
};

export default App;