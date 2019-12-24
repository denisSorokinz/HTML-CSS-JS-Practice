import React, { Component } from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class DayOfWeek extends Component {

  constructor(props) {
    super();
  }

  getListItem({ item }) {
    return(
      <View>
        <Text style={[styles.dayText, {fontSize: 15}]}>{ item } - {this.props.subjects[item]}</Text>
      </View>
    );
  }


  goToDayChanging() {
    const { navigate } = this.props.navigation;
    navigate('DayChanging', {dayName: this.props.dayName});
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.goToDayChanging()}>
        <View style={styles.dayContainer} >
          <View>
            <Text style={[styles.dayText, {fontSize: 25, textTransform: 'capitalize'}]}>{this.props.dayName ? this.props.dayName : 'Some day of week'}</Text>
          </View>
          <View>
            <FlatList
              style={styles.daysList}
              data={Object.keys(this.props.subjects)}
              renderItem={({ item }) => this.getListItem({ item })}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}