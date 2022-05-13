import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js';
import { historyOptions } from '../chartConfigs/chartConfigs';
const HistoryChart = ({data}) => {
    const chartRef = useRef();
    const {day,week,year,detail} =data;

    useEffect(()=>{
        if ( chartRef && chartRef.current && detail) {
            console.log('yeah')
            const chartInstace = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${detail.name} price`,
                        data: day,
                        backgroundColor:"rgba(174,305,194,0.5)",
                        borderColor: "rgba(174,305,194,0.4",
                        pointRadius:0,
                        
                        borderWidth: 1
                    }]
                },
                options: historyOptions
            })
        }
    })
        const renderPrice = () => {
            if (detail) {
                return (
                    <>
                    <p className='my-0'>{detail.current_price.toFixed(2)}</p>
                    <p className={detail.price_change_24h < 0 ? 'text-danger my-0' : 'text-success my-0'}>
                        {detail.price_change_percentage_24h.toFixed(2)}
                    </p>
                    </>
                    
                )
            }
        }
        return(
            
            <div className="bg-white border mt-2 rounded p-3">
                <div>{renderPrice()}</div>
                <div>
                <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
            </div>
            </div>
            
            
            
        )
    
}

export default HistoryChart