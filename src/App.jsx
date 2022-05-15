import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';
import './App.css'

const App = () => {
    const [watchList, setWatchList] = useState(["bitcoin","ethereum","ripple","algorand","Tether","USD Coin","BNB","XRP","Cardano","Solana","Dogecoin","Shiba Inu","Dai","Litecoin"])
    return (
        <div className='container'>
        
                <BrowserRouter>
                    <Header />

                    <Routes>
                        <Route path='/' element={<CoinSummaryPage watchList={watchList} setWatchList={setWatchList} />} />
                        <Route path="/coins/:id" element={<CoinDetailPage/>}/>
                    </Routes>
                </BrowserRouter>


        </div>
    )
}

export default App