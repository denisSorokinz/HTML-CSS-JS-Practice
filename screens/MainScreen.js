import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import DaysOfWeek from '../components/DaysOfWeek';
import ApiKeys from '../constants/ApiKeys';
import * as firebase from 'firebase';

export default class MainScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props) {
    super();
    this.state = {
      days: null
    }
    if(!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref().child('firstWeek');
    console.log(dbRef);
    dbRef.on('value', snap => {
      this.setState({
        days: snap.val()
      });
    });
  }

  render() {
    if (!this.state.days) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <DaysOfWeek days={this.state.days} navigation={this.props.navigation} />
      </SafeAreaView>
    );//ADD SATURDAY IF EXISTS
  }
}