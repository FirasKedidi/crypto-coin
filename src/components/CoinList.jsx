import React, { useContext, useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko'
import Coin from './Coin'
const CoinList = ({watchList,setWatchList}) => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const handleDelete = (e,id) => {
        console.log(id)
        e.preventDefault()
        setWatchList(watchList.filter( el => 
             {return el !== id}))

    }
   
    useEffect(()=>{
        const fetchData = async () =>{
            setIsLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params:{
                    vs_currency:"usd",
                    ids:watchList.join(",")
                }
            })
            setCoins(response.data)
            setIsLoading(false)

        }
       
        watchList.length > 0 ? fetchData() : setCoins([])
        
    },[watchList])
    const renderCoins = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
        return (
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                   return <Coin key={coin.id} coins ={coins} coin={coin} handleDelete={handleDelete}/>
                })}
            </ul>
        )
    }
  return (
    <div>{renderCoins()}</div>
  )
}

export default CoinList