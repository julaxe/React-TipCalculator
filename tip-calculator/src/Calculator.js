import React from 'react'
import './Calculator.css';

export default function Calculator() {
    const bill = React.useRef(0);
    const people = React.useRef(0);
    const [result, setResult] = React.useState({tip : 0, total : 0 })
    const [error, setError] = React.useState(null);
    
    const tipArray = [5,10,15,25,50];
    const [stArray, setStArray] = React.useState(tipArray.map(
        tip => {
            return ({tip: tip, active: false})
        }
    ))
    function onChangeHandler(event){
    }
    function onClickHandler(event){
        if(people.current.value <= 0)
        {
            setError("Set a proper number");
            return
        }
        setError(null);
        const newTip = parseInt(event.target.value);
        setStArray(stArray.map(
            e => {
                if(newTip === e.tip){
                    return {tip: e.tip, active: true}
                }else{
                    return {tip: e.tip, active: false}
                }
            }
        ))

        const TipAmount = (bill.current.value / people.current.value) * (newTip / 100)
        const total = (bill.current.value / people.current.value) + TipAmount
        console.log(TipAmount)
        setResult({tip:TipAmount.toFixed(2), total: total.toFixed(2)})
    }

    function reset(){

    }

    function Button(props) {
        return(
            <div className="tip-option">
                <button className={props.active ? "cl-button-active" : "cl-button"}
                value={props.percentage} 
                onClick={onClickHandler}>
                    {props.percentage}%
                </button> 
            </div>
        )
    }

    return (
        <div className="form">
            <div className="left">
                <div className="input">
                    <label htmlFor="bill">Bill</label><br></br>
                    <input ref={bill} id="bill" type="text" placeholder="0" onChange={onChangeHandler}/>
                </div>
                <label className="label">Select Tip %</label>
                <div className="select-Tip">
                    {stArray.map(e => 
                        <Button key={e.tip} percentage={e.tip} active={e.active} />
                    )}
                    <div className="tip-option">
                        <input type="text" id="customTip" placeholder="C"/>
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="nofP">Number of People</label>{error ? <label>{error}</label>: ''}<br></br>
                    <input ref={people} id="nofP" type="text" placeholder="0" />
                </div>
            </div>

            <div className="green-container">
                <div className="right"> 
                    <div className="right-top">
                        <div className="result-template">
                            <div className="result-left">
                                <p className="name"><br></br>Tip Amount</p>
                                <p className="person">/ person</p>
                            </div>
                            <div className="result-right">
                                <p className="result">${result.tip}</p>
                            </div>
                        </div>
                        <div className="result-template">
                            <div className="result-left">
                                <p className="name"><br></br>Total</p>
                                <p className="person">/ person</p>
                            </div>
                            <div className="result-right">
                                <p className="result">${result.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-bottom">
                        <div className="reset-container">
                            <button className="reset">RESET</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

