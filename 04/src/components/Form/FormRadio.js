import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormRadio.module.scss';


const Radio = ({ id, checked, changeFn, children}) => (
  <label className={styles.radio}>
    <input
      type="radio"
      id={id}
      checked={checked}
      onChange={changeFn}
    />
    <div className={styles.radioButton} />
    {children}
  </label>  
);
  
Radio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  changeFn: PropTypes.func,
};          

export default Radio;