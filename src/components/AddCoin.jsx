import React from 'react'

const AddCoin = ({watchList,setWatchList}) => {
    const handleClick =(e) =>{
        e.preventDefault()
        if(!(watchList.includes(e.target.value))){
            const newWatch =[...watchList,e.target.value]
            setWatchList(newWatch)
        }
    }
    return (
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Add coin
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button onClick={(e) => handleClick(e)} value='bitcoin' class="dropdown-item" href="#">Bitcoin</button></li>
                <li><button onClick={(e) => handleClick(e)} value='ethereum' class="dropdown-item" href="#">Ethereum</button></li>
                <li><button onClick={(e) => handleClick(e)} value='ripple' class="dropdown-item" href="#">Ripple</button></li>
                <li><button onClick={(e) => handleClick(e)} value='algorand' class="dropdown-item" href="#">Algorand</button></li>
                <li><button onClick={(e) => handleClick(e)} value='tether' class="dropdown-item" href="#">Tether</button></li>
                <li><button onClick={(e) => handleClick(e)} value='usd-coin' class="dropdown-item" href="#">Usd Coin</button></li>
                <li><button onClick={(e) => handleClick(e)} value='tron' class="dropdown-item" href="#">Tron</button></li>
                <li><button onClick={(e) => handleClick(e)} value='chainlink' class="dropdown-item" href="#">Chainlink</button></li>
                <li><button onClick={(e) => handleClick(e)} value='cardano' class="dropdown-item" href="#">Cardano</button></li>
                <li><button onClick={(e) => handleClick(e)} value='solana' class="dropdown-item" href="#">Solana</button></li>
                <li><button onClick={(e) => handleClick(e)} value='dogecoin' class="dropdown-item" href="#">Dogecoin</button></li>
                <li><button onClick={(e) => handleClick(e)} value='shiba-inu' class="dropdown-item" href="#">Shiba</button></li>
                <li><button onClick={(e) => handleClick(e)} value='dai' class="dropdown-item" href="#">Dai</button></li>
                <li><button onClick={(e) => handleClick(e)} value='litecoin' class="dropdown-item" href="#">Litecoin</button></li>
            </ul>
        </div>
    )
}

export default AddCoin