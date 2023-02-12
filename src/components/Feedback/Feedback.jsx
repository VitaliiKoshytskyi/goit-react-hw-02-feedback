import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    

    handleGood = () => {
        
    }
    handleNeutral = () => {
        
    }
    handleBad = () => {
        
    }

  render() {
    return (
      <div className='Feedback'>
        <h1 className='Feedback__heading'>Please leave feedback</h1>
        <ul className='Feedback__list'>
          <li className='Feedback__item'>
            <button className='Feedback__btn-good' type="button" onClick={this.handleGood}>Good</button>
          </li>
          <li className='Feedback__item'>
            <button className='Feedback__btn-neutral' type="button" onClick={this.handleNeutral}>Neutral</button>
          </li>
          <li className='Feedback__item'>
            <button className='Feedback__btn-bad' type="button" onClick={this.handleBad}>Bad</button>
          </li>
        </ul>
        <h2 className='Feedback__title'>Statistics</h2>
        <p  className='Feedback__text'>
                Good:<span>{ this.state.good}</span>
        </p>
        <p  className='Feedback__text'>
          Neutral:<span>{ this.state.neutral}</span>
        </p>
        <p  className='Feedback__text'>
          Bad:<span>{ this.state.bad}</span>
        </p>
        <p  className='Feedback__text'>
          Total:<span></span>
        </p>
        <p  className='Feedback__text'>
          Positive feedback:<span></span>
        </p>
      </div>
    );
  }
}

export default Feedback;
