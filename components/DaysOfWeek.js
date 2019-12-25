import DayOfWeek from './DayOfWeek';
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

export default class DaysOfWeek extends Component {

    constructor(props) {
        super();
    }

    getListItem({ item }) {
      return(
        <DayOfWeek dayName={item} subjects={this.props.days[item]} navigation={this.props.navigation}/>
      );
    }

    getDays() {
      let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      return days;
    }

    render() {
        return (
        <View style={styles.daysContainer}>
          <FlatList
            contentContainerStyle={styles.daysList}
            data={this.getDays()}
            renderItem={({ item }) => this.getListItem({ item })}
            keyExtractor={(index) => index.toString()}
          />
        </View>//ADD SATURDAY IF EXISTS
        );
    }
}