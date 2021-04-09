import React, { useState, useEffect } from 'react';
import { RiArrowLeftRightLine, RiArrowRightLine } from 'react-icons/ri';
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
      regExp: /^[0-1 ]*$/,
      cvtFn: (number) => bigInt(number, 2),
    },
    decimal: {
      title: 'Decimal Base',
      regExp: /^[0-9 ]*$/,
      cvtFn: (number) => bigInt(number).toString(2),
    },
  };

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    if (baseTypes[localData.currentBase].regExp.test(userInput))
      setLocalData((oldData) => ({ ...oldData, inputValue: userInput }));
  };

  const handleBaseChange = () => {
    setLocalData((oldData) => ({
      inputValue: outputValue,
      currentBase: oldData.currentBase === 'binary' ? 'decimal' : 'binary',
    }));
  };

  useEffect(() => {
    const cvtInput = (input) => {
      const numbers = input.split(' ').filter((inputs) => inputs !== '');
      let output = '';
      numbers.forEach((number) => {
        output += `${baseTypes[localData.currentBase].cvtFn(number)} `;
      });
      return output.trim();
    };

    if (localData.inputValue) setOutputValue(cvtInput(localData.inputValue));
    else setOutputValue('');
  }, [localData]);

  return (
    <div className={styles.converter}>
      <TextHandler
        value={localData.inputValue}
        onChange={handleInputChange}
        title={baseTypes[localData.currentBase].title}
      />
      <div className={styles.controls}>
        <RiArrowLeftRightLine
          size='40px'
          className={styles.btn}
          onClick={handleBaseChange}
        />
        <RiArrowRightLine size='40px' />
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
    </div>
  );
};

export default Main;
