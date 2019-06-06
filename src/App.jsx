import React, { Component } from 'react';
import './App.css';
import './sass/style.scss';

// importing axios
import api from './utility/apicalls'

// card component
import { Card } from './components/Card'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: [],
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // axios get call
    api.get(78758).then(res => this.setState({forecast: res.data.list}));
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit(e){
    e.preventDefault();
    api.get(this.state.zipcode).then(res => this.setState({forecast: res.data.list}))
  }

  
  createCards(array){
    return array.map((weather, index) => {
      return (
        <Card image='sunny-icon' day='saturday' max={weather.main.temp_max} min={weather.main.temp_min} description={weather.weather[0].description} key={weather.main.temp_max + index}/>
      )
    })
  }

  render() {
    const len = this.state.forecast.length > 0;
    const [today] = this.state.forecast;
    return (
    <div className="layout-main"> 
	    <div className="top-wrapper">
		  <h1>Dave's Weather App</h1>
		    <div className="header-main">
			    <div className="main-icon">
				    <span className="fa fa-eercast"></span>
			    </div>
			  <div className="main-card">
        <div className="today">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="flex">
                <div className="child1">
                  <p>Enter you zipcode:</p>
                </div>
                <div className="child2">
                  <input type="text" name="zipcode" onChange={this.handleChange} value={this.state.zipcode} />
                  <div class="new-icon">
                  <button type="submit" className="search-submit"><i className="glyphicon glyphicon-search"></i></button>
                  </div>
                  
                </div>
              </div>  
            </form>	
          </div>

          <div className="today">
          <p>Today's Weather</p>
            <div className="current">
            {len && (<ul>
                <li>maximum temp: {today.main.temp_max}</li>
                <li>minimum temp: {today.main.temp_min}</li>
                <li>description: {today.weather[0].description}</li>
              </ul>)
            }
            </div>
          </div>
        
        <div className="new-forecast">
        <p>Weather Forecast</p>
          <div className="cards flex">
          {len && this.createCards(this.state.forecast)}
          </div>
        </div>
			</div>
		</div>
	</div>
</div>	
    )
    

  }
}


export default App;
