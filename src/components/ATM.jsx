import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withdrawl, deposited  } from '../redux/atmSlicer'
const ATM = () => {

    const dispatch = useDispatch()

    const { balance } = useSelector((state) => state.atm)

    const handleWithdrawByValue = () => {
        const value = document.querySelector("#withdrawValue").value
        console.log(value)
        balance >= value ? (dispatch(withdrawl(value)))
        : alert("Not enough money in the bank, please choose another option")
      
}

const handleWithdraw = (value) => {
     balance >= value ? (
    dispatch(withdrawl(value)))
    : 
    alert("Not enough money in the bank, please choose another option")
    
}


const HandleDepositByValue = () => {
    const value = +document.querySelector("#depositValue").value
    dispatch(deposited (value))
}
const handleDeposit = (value) => {
    dispatch(deposited (value))
}

  return (
    <>
    <div className='bankomat'>
        <h1>ATM</h1>
        <h2>Current Balance: {balance} SEK </h2>
        
        </div>
        <div className='bankd'>
        <h2>Deposit</h2>
        <input type="number" id="depositValue" />
        <button onClick=
            {HandleDepositByValue}>Deposit</button>
              </div>
              <br/>
              <div>
        <button onClick=
            {() => {dispatch(handleDeposit(100))}}
        >+100 kr</button>
      <br/>
      
        <button onClick={()=> {
            dispatch(handleDeposit(200))
        }}>+200 kr</button>
        <br/>
        <button onClick={() => {
            dispatch(handleDeposit(500))
        }}>+500 kr</button>
        <br/>
        <button onClick={() => {
            dispatch(handleDeposit(1000))
        }}>+1000 kr</button>
        </div>
            <div className='bankw'>
            <h2>Withdraw</h2>
        <input type="number" id="withdrawValue" />
      
        <button onClick={handleWithdrawByValue}>Withdraw</button>
        </div>
        <br/>
        <div>
        <button onClick={() => handleWithdraw(100)}
        >-100kr</button>
<br/>
        <button onClick={() => {
            dispatch(handleWithdraw(200))
        }}>-200 kr</button>
        <br/>
       <button onClick={() => {
            dispatch(handleWithdraw(500))
        }}>-500 kr</button>
        <br/>
        <button onClick ={() => {
            dispatch(handleWithdraw(1000))
        }}>-1000 kr</button>
        
        </div>
        
        </>
  )
}

export default ATM