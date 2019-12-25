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
          subjectName={item} 
          subjectHometask={this.props.navigation.state.params.subjects[item]} 
          showInColumn={true} 
        />
      );
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, {color: '#fff'}]}>
            <FlatList
              data={Object.keys(this.props.navigation.state.params.subjects)}
              renderItem={({ item }) => this.getListItem({ item })}
              keyExtractor={(index) => index.toString()}
            />
            </SafeAreaView>
        );
    }
}