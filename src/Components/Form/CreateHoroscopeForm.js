import React, {
  Component
} from "react";
import './Form.css';

class CreateHoroscopeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      sign: '',
      messages: [],
      id: ''
    }
  }

  render() {
    return (
      <form className = "form-container" >
      <section className="right-box">
      <div className="add-your-own-horoscope">Add your own horoscope</div>
      <input className="input-field"
          type='text'
          placeholder='Enter your Horoscope Here'
          name='messages'
          value={this.state.messages}
          onChange={event => this.handleChange(event)}
        />
      <button onClick={(event) => this.addHoroscope(event)}>Add Your Horoscope</button>
      </section>
      </form>
    )
    )

}
}

  export default CreateHoroscopeForm
