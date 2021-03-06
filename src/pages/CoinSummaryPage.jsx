import React from 'react'
import AddCoin from '../components/AddCoin'
import CoinList from '../components/CoinList'
const CoinSummaryPage = ({watchList, setWatchList}) => {
  return (
    <div className='coinsummary shadow border p-2 rounded mt-2 bg-light'>
        <AddCoin/>
        <CoinList watchList={watchList} setWatchList={setWatchList}/>
    </div>
  )
}

export default CoinSummaryPage