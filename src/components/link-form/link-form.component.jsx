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
              <div className='error-icon' />
            )}
          </div>
          <button className='button' type='submit'>
            <svg
              width='40'
              height='36'
              viewBox='0 0 40 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M39.7197 18.6943C40.0934 18.3069 40.0934 17.6931 39.7197 17.3057L23.7197 0.721679L23.0253 0.00201416L21.586 1.39066L22.2803 2.11032L36.6457 17H1H0V19H1H36.6457L22.2803 33.8897L21.586 34.6093L23.0253 35.998L23.7197 35.2783L39.7197 18.6943Z'
                fill='#1B191C'
              />
            </svg>
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
