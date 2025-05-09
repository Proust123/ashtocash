import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatedPrice, emptyInputs, updateInputs } from '../Redux/appSlice'


const Inputs = () => {

    const inp = useSelector((state) => state.allReducers.inputs)
    const dispatch = useDispatch()
    const money = useSelector((state) => state.allReducers.totalSaved)
    const [isCalculated, setIsCalculated] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target
        dispatch(updateInputs({
            [name] : value
        }))
    }

    function calculate () {
        dispatch(calculatedPrice())
        setIsCalculated(true)
    }
    
    function reset() {
        dispatch(emptyInputs())
        setIsCalculated(false)
    }

  return (
    <div className='p-2 sm:p-10 w-full relative z-10 flex flex-col justify-between items-center'
        
    >
        <div className="p-4 sm:p-10 w-full relative z-10 flex flex-col items-center justify-center gap-6">
        <div className="w-full sm:w-[80%] bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

  
            <div className='flex flex-col gap-4 w-full '>
                <select name="numberUnit" id="" className='border'
                    value={inp.numberUnit} onChange={handleChange}
                >
                    <option value="pack">Pack per day</option>
                    <option value="cigarette">Cigarette per day</option>
                </select>
                <div className='flex flex-col'>
                    <label htmlFor="daily">Count:</label>
                    <input className='border rounded pl-3'
                        type="number"
                        name="numbers"
                        id='daily'
                        value={inp.numbers} 
                        onChange={handleChange}
                        min={1}
                        placeholder='e.g. 2'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full '>
                <select name="priceUnit" id="" className='border'
                    value={inp.priceUnit} onChange={handleChange}
                >
                    <option value="cigarette">Price per Cigarette</option>
                    <option value="pack">Price per Pack</option>
                </select>
                <div className='flex flex-col'>
                    <label htmlFor="price">Price:</label>
                    <input className='border rounded pl-3'
                        type="number"
                        name="price"
                        id='price'
                        value={inp.price} 
                        onChange={handleChange}
                        min={1}
                        placeholder='e.g. 2'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full '>
                <select name="timeUnit" id="" className='border'
                    value={inp.timeUnit} onChange={handleChange}
                >
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                </select>
                <div className='flex flex-col'>
                    <label htmlFor="days">Smoke Free Count:</label>
                    <input className='border rounded pl-3'
                        type="number"
                        name="days"
                        id='days'
                        value={inp.days} 
                        onChange={handleChange}
                        min={1}
                        placeholder='e.g. 2'
                    />
                </div>
            </div>
        </div>
        </div>
        <div className='mt-5'>
            <button 
                onClick={isCalculated ? reset : calculate} 
                className='w-full sm:w-auto border rounded bg-green-500 hover:bg-green-600 transition text-white text-xl px-3 py-2 cursor-pointer'>
                {isCalculated ? 'Reset' : 'Calculate'}
            </button>
        </div>
        <div className='mt-4'>
            {money !== null ?  <h1 className='text-amber-400 text-lg'>You have saved Pkr {money} in {inp.days} {inp.timeUnit}</h1> : (<h1 className='text-amber-400 text-lg'>Enter values to calculate your savings</h1>)}
        </div>
    </div>
  )
}

export default Inputs