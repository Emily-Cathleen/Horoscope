import React,  {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      sign: '',
      messages: [],
      id: ''
    }
  }

setMonth = (event) => {
  event.preventDefault();
  this.setState({ month: event.target.value });
}

setDay = (event) => {
  event.preventDefault();
  this.setState({ day: event.target.value });
}

getHoroscopeButton = (event) => {
  event.preventDefault();
  console.log("HII")
  const chosenSign = this.findSign(this.state.month, this.state.day);
  this.props.getHoroscope(chosenSign);
  //good place for error handling
}

clearInputs = () => {
  this.setState({ month: '', sign: '', messages: '' });
  }


findSign = (month, day) => {
  if (month === "1" && day >= 1 && day <= 19) {
    return 'Capricorn'
  }
  if (month === "1" && day >= 20 && day <= 31) {
    return 'Aquarius'
  }
  if (month === "2" && day >= 1 && day <= 18) {
    return 'Aquarius'
  }
  if (month === "2" && day >= 19 && day <= 31) {
    return 'Pisces'
  }
  if (month === "3" && day >= 1 && day <= 20) {
    return 'Pisces'
  }
  if (month === "3" && day >= 21 && day <= 31) {
    return 'Aries'
  }
  if (month === "4" && day >= 1 && day <= 19) {
    return 'Aries'
  }
  if (month === "4" && day >= 20 && day <= 31) {
    return 'Taurus'
  }
  if (month === "5" && day >= 1 && day <= 20) {
    return 'Taurus'
  }
  if (month === "5" && day >= 21 && day <= 31) {
    return 'Gemini'
  }
  if (month === "6" && day >= 1 && day <= 21) {
    return 'Gemini'
  }
  if (month === "6" && day >= 22 && day <= 31) {
    return 'Cancer'
  }
  if (month === "7" && day >= 1 && day <= 22) {
    return 'Cancer'
  }
  if (month === "7" && day >= 23 && day <= 31) {
    return 'Leo'
  }
  if (month === "8" && day >= 1 && day <= 22) {
    return 'Leo'
  }
  if (month === "8" && day >= 23 && day <= 31) {
    return 'Virgo'
  }
  if (month === "9" && day >= 1 && day <= 22) {
    return 'Virgo'
  }
  if (month === "9" && day >= 23 && day <= 31) {
    return 'Libra'
  }
  if (month === "10" && day >= 1 && day <= 22) {
    return 'Libra'
  }
  if (month === "10" && day >= 23 && day <= 31) {
    return 'Scorpio'
  }
  if (month === "11" && day >= 1 && day <= 22) {
    return 'Scorpio'
  }
  if (month === "11" && day >= 23 && day <= 31) {
    return 'Sagittarius'
  }
  if (month === "12" && day >= 1 && day <= 21) {
    return 'Sagittarius'
  }
  if (month === "12" && day >= 21 && day <= 31) {
    return 'Sagittarius'
  }

}

render() {
  return(
    <form className="form-container">
      <section className="left-box">
        <div className="instructions">Select your birthday...</div>
        <select className="month-selector" onChange={this.setMonth} id="month" name="month">
          <option hidden>Select your Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select className="day-selector" onChange={this.setDay} id="day" name="day">
          <option hidden>Select your Day</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <button className="submit-button" onClick={event => this.getHoroscopeButton(event)}>Submit</button>
      </section>
    </form>
  )
}

}

export default Form
