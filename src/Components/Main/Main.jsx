import React, { useState, useEffect } from 'react';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import bigInt from 'big-integer';
import useLocalStorage from '../../Hooks/useLocalStorage';
import styles from './Main.module.css';
import TextHandler from './TextHandler';

/* Since JavaScript max safe integer is 2^53 - 1, I used big-integer library to ensure that
   it can convert numbers bigger than that */

const Main = () => {
  const [localData, setLocalData] = useLocalStorage('bin-2-dec-data', {
    inputValue: '',
    currentBase: 'binary',
  });
  const [outputValue, setOutputValue] = useState('');

  const baseTypes = {
    binary: {
      title: 'Binary Base',
      regExp: /^[0-1\s•]*$/,
      cvtFn: (number) => bigInt(number, 2),
    },
    decimal: {
      title: 'Decimal Base',
      regExp: /^[0-9\s•]*$/,
      cvtFn: (number) => bigInt(number).toString(2),
    },
  };

  // Using "•" character as separator instead of white spaces
  const handleInputChange = (e) => {
    let userInput = e.target.value;
    if (baseTypes[localData.currentBase].regExp.test(userInput)) {
      userInput = userInput
        .replace(/^[\s]+/, '')
        .replace(/[\s]+/g, '•')
        .replace(/[•]+/g, '•');
      setLocalData((oldData) => ({ ...oldData, inputValue: userInput }));
    }
  };

  const handleBaseChange = () => {
    setLocalData((oldData) => ({
      inputValue: outputValue,
      currentBase: oldData.currentBase === 'binary' ? 'decimal' : 'binary',
    }));
  };

  useEffect(() => {
    const cvtInput = () => {
      const numbers = localData.inputValue
        .split('•')
        .filter((inputs) => inputs !== '')
        .map((value) => baseTypes[localData.currentBase].cvtFn(value));
      const output = numbers.join('•');
      return output;
    };
    if (localData.inputValue) setOutputValue(cvtInput());
    else setOutputValue('');
  }, [localData]);

  return (
    <main className={styles.converter}>
      <TextHandler
        onChange={handleInputChange}
        value={localData.inputValue}
        title={baseTypes[localData.currentBase].title}
      />
      <div className={styles.controls}>
        <RiArrowLeftRightLine
          className={styles.btn}
          onClick={handleBaseChange}
        />
      </div>
      <TextHandler
        value={outputValue}
        readOnly
        title={
          localData.currentBase === 'binary'
            ? baseTypes.decimal.title
            : baseTypes.binary.title
        }
      />
    </main>
  );
};

export default Main;
