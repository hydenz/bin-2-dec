import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiClipboardFill, RiCheckLine } from 'react-icons/ri';
import 'draft-js/dist/Draft.css';
import styles from './TextHandler.module.css';

const TextHandler = ({ title, value, onChange, readOnly }) => {
  const defaultCopyBtnIcon = <RiClipboardFill className={styles.icon} />;
  const copiedBtnIcon = <RiCheckLine className={styles.icon} />;
  const [clipboardBtnText, setClipboardBtnText] = useState('Copy to clipboard');
  const [clipIcon, setClipIcon] = useState(defaultCopyBtnIcon);

  const formatText = (text) =>
    text
      .split('•')
      .filter((inputs) => inputs !== '')
      .join(' ');

  const copyToClipboard = () => {
    setClipboardBtnText('Copied!');
    setClipIcon(copiedBtnIcon);
    const formattedValue = formatText(value);
    navigator.clipboard.writeText(formattedValue);
    setTimeout(() => {
      setClipboardBtnText('Copy to clipboard');
      setClipIcon(defaultCopyBtnIcon);
    }, 3000);
  };

  const handleOnCopy = (e) => {
    const copiedText = value.slice(
      e.target.selectionStart,
      e.target.selectionEnd
    );
    const formattedValue = formatText(copiedText);
    navigator.clipboard.writeText(formattedValue);
  };

  return (
    <div className={styles.texthandler}>
      <h2 className={styles.title}>{title}</h2>
      <textarea
        value={value}
        className={styles.value}
        onChange={onChange}
        readOnly={readOnly}
        onCopy={handleOnCopy}
      />
      <button type='button' onClick={copyToClipboard} className={styles.btn}>
        {clipIcon}
        <span className={styles.btntxt}>{clipboardBtnText}</span>
      </button>
    </div>
  );
};

export default TextHandler;

TextHandler.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

TextHandler.defaultProps = {
  onChange: () => {},
  readOnly: false,
};
