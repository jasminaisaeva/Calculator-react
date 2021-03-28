import React from 'react'
import './Counter.css'



export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            input1: 1,
            input2: 1,
            result: 0
        }

    }
    // onIn1 = (e) => {
    //     this.setState(() => ({input1: parseInt(e.target.value)}))
    // }
    // onIn2 = (e) => {
    //     this.setState(() => ({input2: parseInt(e.target.value)}))
    // }

    inputHAndler = (e) => {
        this.setState(() => ({[e.target.name]: parseInt(e.target.value)}))
  
    }
    onPlus = () => {
    
        this.setState((() => ({result: parseInt(this.state.input1) + parseInt(this.state.input2)})))
       
    }
    onMinus = () => {
      
        this.setState((() => ({result: parseInt(this.state.input1) - parseInt(this.state.input2)})))
    }
    onMult = () =>{
        this.setState((() => ({result: parseInt(this.state.input1) *  parseInt(this.state.input2)})))
    }
    onDelenie = () => {
        this.setState((() => ({result: parseInt(this.state.input1) / parseInt(this.state.input2)})))
    }
    
    onClean = () => {
        this.setState ({input1 : ""})
        this.setState ({input2 : ""})
        this.setState ({result : ""})

    }
    
 
    
    render() {

        return (
        <div className="block">
            <input type="number"
            value = {this.state.input1}
             onChange = {this.inputHAndler}
             name="input1"
            />
          
            <input type="number"
             value = {this.state.input2}
             onChange = {this.inputHAndler}
             name="input2"
            />
            <br></br>
        <button onClick={this.onPlus}>+</button>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onMult}>*</button>
        <button onClick={this.onDelenie}>/</button>
        <button onClick={this.onClean}>Clean</button>
        <p>{this.state.result}</p>
        
        </div>

        )
    }
}