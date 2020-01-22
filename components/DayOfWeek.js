import React, { Component } from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import styles from './styles';
import Subject from './Subject';

export default class DayOfWeek extends Component {

  constructor(props) {
    super();
  }

  getListItem({ item }) {
    return(
      <Subject dayName={this.props.dayName} subjectName={item} subjectHometask={this.props.subjects[item]} />
    );
  }

  goToDayChanging() {
    const { navigate } = this.props.navigation;
    navigate('DayChanging', 
    {
      dayName: this.props.dayName, subjects: this.props.subjects
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.goToDayChanging()}>
        <View style={styles.dayContainer} >
          <View>
            <Text style={[styles.text, {fontSize: 25, textTransform: 'capitalize'}]}>
              { this.props.dayName ? this.props.dayName : 'Some day of week' }
            </Text>
          </View>
          <View>
            <FlatList
              data={Object.keys(this.props.subjects)}
              renderItem={({ item }) => this.getListItem({ item })}
              keyExtractor={(index) => index.toString()}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}