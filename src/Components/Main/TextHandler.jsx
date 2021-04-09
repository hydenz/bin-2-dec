import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiClipboardFill, RiCheckLine } from 'react-icons/ri';
import styles from './TextHandler.module.css';

const TextArea = ({ title, value, readOnly, onChange }) => {
  const defaultCopyBtnIcon = <RiClipboardFill size='19px' />;
  const copiedBtnIcon = <RiCheckLine size='19px' />;
  const [clipboardBtnText, setClipboardBtnText] = useState('Copy to clipboard');
  const [clipIcon, setClipIcon] = useState(defaultCopyBtnIcon);

  const copyToClipboard = () => {
    setClipboardBtnText('Copied!');
    setClipIcon(copiedBtnIcon);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setClipboardBtnText('Copy to clipboard');
      setClipIcon(defaultCopyBtnIcon);
    }, 3000);
  };

  return (
    <div className={styles.texthandler}>
      <h2 className={styles.title}>{title}</h2>
      <textarea
        className={styles.value}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      <button type='button' onClick={copyToClipboard} className={styles.btn}>
        {clipIcon}
        <span className={styles.btntxt}>{clipboardBtnText}</span>
      </button>
    </div>
  );
};

export default TextArea;

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  readOnly: false,
  onChange: () => {},
};
