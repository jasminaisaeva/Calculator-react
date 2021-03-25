import React from 'react'
import './Counter.css'



export class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            input1: 0,
            input2: 0,
            result: 0
        }

    }
    onIn1 = (e) => {
        this.setState((prev) => ({input1: parseInt(e.target.value)}))
    }
    onIn2 = (e) => {
        this.setState((prev) => ({input2: parseInt(e.target.value)}))
    }

    onPlus = (e) => {
    
        this.setState((() => ({result: parseInt(this.state.input1) + parseInt(this.state.input2)})))
       
    }
    onMinus = (e) => {
      
        this.setState((() => ({result: parseInt(this.state.input1) - parseInt(this.state.input2)})))
    }
    onUmnoj = () =>{
        this.setState((() => ({result: parseInt(this.state.input1) *  parseInt(this.state.input2)})))
    }
    onDelenie = () => {
        this.setState((() => ({result: parseInt(this.state.input1) / parseInt(this.state.input2)})))
    }
    onChangeInpu = (e) => {
        this.setState((() =>  ({inputValue: e.target.value})))
      
    }
    
 
    
    render() {

        return (
        <div className="block">
            <input type="text"
            value = {this.state.input1}
             onChange = {this.onIn1}
            />
          
            <input type="text"
             value1 = {this.state.input2}
             onChange = {this.onIn2}
            />
            <br></br>
        <button onClick={this.onPlus}>+</button>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onUmnoj}>*</button>
        <button onClick={this.onDelenie}>/</button>
        <p>{this.state.result}</p>
        
        </div>

        )
    }
}