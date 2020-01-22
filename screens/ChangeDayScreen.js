import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import Subject from '../components/Subject';

export default class ChangeDayScreen extends Component {

    static navigationOptions = (props) => {
        return {
            headerVisible: true,
            title: props.navigation.state.params.dayName,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                color: '#fff',
                textTransform: 'capitalize'
            }
        }
    };

    constructor(props) {
        super();
    }

    getListItem({ item }) {
      return(
        <Subject
          dayName={this.props.navigation.state.params.dayName}
          subjectName={item} 
          subjectHometask={this.props.navigation.state.params.subjects[item]} 
          showInColumn={true} 
        />
      );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={Object.keys(this.props.navigation.state.params.subjects)}
                renderItem={({ item }) => this.getListItem({ item })}
                keyExtractor={(index) => index.toString()}
              />
            </SafeAreaView>
        );
    }
}