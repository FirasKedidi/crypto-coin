import React from 'react'
import CoinList from '../components/CoinList'
const CoinSummaryPage = ({watchList, setWatchList}) => {
  return (
    <div className='coinsummary shadow border p-2 rounded mt-2 bg-light'>
        <CoinList watchList={watchList} setWatchList={setWatchList}/>
    </div>
  )
}

export default CoinSummaryPage