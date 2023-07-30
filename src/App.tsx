import React from 'react';
import "./App.scss"
import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Layout />
            <Footer />
        </div>
    );
};

export default App;