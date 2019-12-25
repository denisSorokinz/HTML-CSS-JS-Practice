import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

export default class ChangeDayScreen extends Component {

    static navigationOptions = (props) => {
        return {
            title: props.navigation.state.params.dayName,
            headerVisible: true
        }
    };

    constructor(props) {
        super();
    }

    render() {
        return (
            <SafeAreaView>
              <Text>
                  TEST
              </Text>
            </SafeAreaView>
        );
    }
}