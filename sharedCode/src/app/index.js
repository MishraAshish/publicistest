console.log("This is how it wroks");
import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import "./css/App.css";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink:"ATM Money Dispenser",
            amout:0,
            denominationSet:[]
        }
        this.defaultSet = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    };

    onMoneyEntered = (e)=>{
        e.target? this.setState({
            amout:e.target.value,
            denominationSet:[]
        }):console.log("Some Issue"); 
        this.amountEntered = false;
    }

    moneyToBeDisbursed = ()=>{
        let total = this.state.amout;
        let result = [];

        if (this.state.amout > 0 && this.state.denominationSet.length === 0) {
        for (let i = 0; i < this.defaultSet.length; i++) {
            result.push(Math.floor(total / this.defaultSet[i]));
            total = total % this.defaultSet[i];
        }
        }

        this.setState({
            denominationSet:result.reverse()
        });
    }

    render(){
        return(
            <div className="container">
                <div className="col-xs-12">
                    <Header headerLink={this.state.homeLink}/>
                </div>
                <main className="row form">
                    <div className="col-xs-6 userentry">
                        <h2>Welcome to ATM</h2>
                        <p>Enter The Amount</p>
                        <input type="number" className="form-control" value={this.state.amout} onChange={this.onMoneyEntered} />
                        <button onClick={this.moneyToBeDisbursed} className="btn btn-primary">Get Money</button>
                    </div>     
                    <div className="col-xs-6 notesdisplay">
                        <h4>You will get following amount</h4>
                            <ul className="notesList">
                            {this.state.denominationSet.length > 0 ? this.defaultSet.reverse().map((notes, index) =>
                                <li key={index}>{`${this.state.denominationSet[index]} notes of Rs ${notes}`}</li>
                            ) : ''}
                            </ul>
                            
                        <h4 className="dispensed">Total notes dispensed: {this.state.denominationSet.reduce((a, b) => a + b, 0)}</h4>
                    </div>
                </main>               
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));