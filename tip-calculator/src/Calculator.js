import React from 'react'
import './Calculator.css';

export default function Calculator() {
    return (
        <form>
            <div className="left">
                <div className="input">
                    <label htmlFor="bill">Bill</label><br></br>
                    <input id="bill" type="text" placeholder="0"/>
                </div>
                <label className="label">Select Tip %</label>
                <div className="select-Tip">
                    <button>
                    5%
                    </button>
                    <button>
                    10%
                    </button>
                    <button>
                    15%
                    </button>
                    <button>
                    25%
                    </button>
                    <button>
                    50%
                    </button>
                    <input type="text" id="customTip" placeholder="Custom"/>
                </div>
                <div className="input">
                    <label htmlFor="nofP">Number of People</label><br></br>
                    <input id="nofP" type="text" placeholder="0" />
                </div>
            </div>
            <div className="right">
                <div className="Tip-amount">
                    <label>Tip Amount</label>
                    <p>$0.00</p>
                </div>
                <div className="Total">
                    <label>Tip Amount</label>
                    <p>$0.00</p>
                </div>
                <div>
                    <button>Reset</button>
                </div>
            </div>
            
        </form>
    )
}

