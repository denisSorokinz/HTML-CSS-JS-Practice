import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';
import SideMenu from '../components/SideMenu';
import DaysOfWeek from '../components/DaysOfWeek';
import FirebaseService from '../services/FirebaseService';
import WeekService from '../services/WeekService';

export default class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: () => {
        return (
          <View style={{flex: 1, paddingVertical: 1.5}}>
            <Text style={{fontSize: 35, color: '#fff'}}>
              &#9776;
            </Text>
          </View>
        );
    },
    headerStyle: {
      backgroundColor: '#2b2b2b'
    }
  };

  constructor(props) {
    super();
    this.state = {
      schedule: null
    }
    FirebaseService.initializeApp();
  }

  componentDidMount() {
    const dbRef = FirebaseService.getReference(WeekService.getWeek());
    console.log(dbRef);
    dbRef.on('value', snap => {
      this.setState({
        schedule: snap.val()
      });
    });
  }

  componentWillUnmount() {
    const dbRef = FirebaseService.getReference(WeekService.getWeek());
    dbRef.off();
  }

  render() {
    if (!this.state.schedule) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu />
        <DaysOfWeek schedule={this.state.schedule} navigation={this.props.navigation} />
      </SafeAreaView>
    );//ADD SATURDAY IF EXISTS
  }
}