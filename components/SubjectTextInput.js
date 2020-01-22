import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import FirebaseService from '../services/FirebaseService'

export default function SubjectTextInput(props) {
  const [value, setInputValue] = useState(props.subjectHometask);

  function onChangeText(changedText) {
    FirebaseService.changeHometask(props.dayName, props.subjectName, changedText);
    setInputValue(changedText);
  }

  return (
    <TextInput
      style={[styles.textInputContainer, styles.text, styles.subjectText]}
      onChangeText={changedText => onChangeText(changedText)}
      value={value}
      enablesReturnKeyAutomatically={true}
      keyboardAppearance={"dark"}
    />
  );
}