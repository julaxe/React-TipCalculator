import React from 'react'
import './Calculator.css';

export default function Calculator() {
    const bill = React.useRef(0);
    const people = React.useRef(0);
    const [result, setResult] = React.useState({tip : 0, total : 0 })
    const [error, setError] = React.useState({bill: "", people: ""});
    const cTip = React.useRef(0);

    const tipArray = [5,10,15,25,50];
    const [stArray, setStArray] = React.useState(tipArray.map(
        tip => {
            return ({tip: tip, active: false})
        }
    ))
    function onChangeHandler(event){
        setStArray(stArray.map(e=> {return {tip: e.tip, active: false}}))
        
        if(event.target.id === "bill"){
            if(!parseFloat(event.target.value)) {
                setError({...error, bill: "set a proper value" });
            }else if(parseFloat(event.target.value) <= 0)
            {
                setError({...error, bill: "number greater than zero"});
            }else{
                setError({ ...error,bill: ""});
            }
        }else{
            
            if(!parseFloat(event.target.value)) {
                setError({ ...error,people: "set a proper value"});
            }else if(parseFloat(event.target.value) <= 0)
            {
                setError({ ...error,people: "number greater than zero"});
            }else{
                setError({ ...error,people: ""});
            }
        }

    }
    function onClickHandler(event){
        
        if(error.bill !== "" || error.people !== "" || people.current.value === "")
        {
            console.log(people.current.value)
            return
        }
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
        CalculateResults(newTip);
        
    }

    function CalculateResults(newTip){
        const TipAmount = (bill.current.value / people.current.value) * (newTip / 100)
        const total = (bill.current.value / people.current.value) + TipAmount
        setResult({tip:TipAmount.toFixed(2), total: total.toFixed(2)})
    }
    function customTip(event){
        if((!parseFloat(event.target.value) && parseFloat(event.target.value) !== 0) || 
        parseFloat(event.target.value) < 0 ||
        people.current.value === ""){
            return;
        }
        CalculateResults(event.target.value);
        
    }

    function reset(){
        bill.current.value = "";
        people.current.value = 1;
        cTip.current.value = "";
        CalculateResults(0);
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
                    <label htmlFor="bill">Bill {error.bill ? <label className="error-message">{error.bill}</label>: ''}</label><br></br>
                    <input ref={bill} id="bill" type="text" placeholder="0" onChange={onChangeHandler}/>
                </div>
                <label className="label">Select Tip %</label>
                <div className="select-Tip">
                    {stArray.map(e => 
                        <Button key={e.tip} percentage={e.tip} active={e.active} />
                    )}
                    <div className="tip-option">
                        <input ref={cTip} type="text" id="customTip" placeholder="Custom" onChange={customTip}/>
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="people">Number of People{error.people ? <label className="error-message">{error.people}</label>: ''}</label><br></br>
                    <input ref={people} id="people" type="text" placeholder="0" onChange={onChangeHandler}/>
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
                            <button className="reset" onClick={reset}>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

