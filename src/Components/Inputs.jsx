import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatedPrice, emptyInputs, updateInputs } from '../Redux/appSlice'

const Inputs = () => {

    const inp = useSelector((state) => state.allReducers.inputs)
    const dispatch = useDispatch()
    const money = useSelector((state) => state.allReducers.totalSaved)

    function handleChange(e) {
        const {name, value} = e.target
        dispatch(updateInputs({
            [name] : value
        }))
    }

    function calculate () {
        dispatch(calculatedPrice())
        // dispatch(emptyInputs())
    }

  return (
    <div className='p-10 w-full bg-white flex flex-col justify-between items-center'>
        <div className='w-[80%] p-4 bg-amber-400 flex justify-between items-center'>
            <div className='flex flex-col gap-4'>
                <label htmlFor="daily">Daily smoked Cigarettes:</label>
                <input className='border rounded'
                    type="number"
                    name="numbers"
                    id='daily'
                    value={inp.numbers} 
                    onChange={handleChange}
                    min={1}
                />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="price">Price per Cigarette:</label>
                <input className='border rounded'
                    type="number"
                    name="price"
                    id='price'
                    value={inp.price} 
                    onChange={handleChange}
                    min={1}
                />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="days">Smoke Free Days:</label>
                <input className='border rounded'
                    type="number"
                    name="days"
                    id='days'
                    value={inp.days} 
                    onChange={handleChange}
                    min={1}
                />
            </div>
        </div>
        <div className='mt-5'>
            <button onClick={calculate} className='border rounded bg-green-500 text-white text-xl px-3 py-2 cursor-pointer'>Calculate Your Savings</button>
        </div>
        <h1>You have saved {money} in {inp.days} days</h1>
    </div>
  )
}

export default Inputs