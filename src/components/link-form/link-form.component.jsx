import React, { useContext, useState } from 'react';

import { AudioContext } from '../../context/audio-context';

import './link-form.styles.scss';

const LinkForm = () => {
  const audioCtx = useContext(AudioContext);
  const {
    audioSrc,
    isAudioSrcValid,
    setAudioSrc,
    checkIsLinkValid,
    isAudioSrcFieldTouched,
    setIsAudioSrcFieldTouched,
  } = audioCtx;

  const handleInputChange = (event) => {
    const inputLink = event.target.value;
    setAudioSrc(inputLink);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkIsLinkValid(audioSrc);
    setIsAudioSrcFieldTouched(true);
  };

  return (
    <form className='form promo__form' onSubmit={handleSubmit}>
      <div className='form__inner'>
        <label className='label' htmlFor='link-input'>
          Insert the link
        </label>
        <div className='input-container'>
          <div className='input-field'>
            <input
              id='link-input'
              type='text'
              placeholder='https://'
              value={audioSrc}
              onChange={handleInputChange}
              className={`input ${
                !isAudioSrcValid && isAudioSrcFieldTouched ? 'invalid' : ''
              }`}
            />
            {!isAudioSrcValid && isAudioSrcFieldTouched && (
              <img className='error-icon' src='../../assets/warning.svg' />
            )}
          </div>
          <button className='button' type='submit'>
            <img src='../../assets/arrow.svg' />
          </button>
        </div>
        {!isAudioSrcValid && isAudioSrcFieldTouched && (
          <span className='error-message'>Invalid link</span>
        )}
      </div>
    </form>
  );
};

export default LinkForm;
