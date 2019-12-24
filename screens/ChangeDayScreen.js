import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

export default class ChangeDayScreen extends Component {
    static navigationOptions = {
        title: 'this.state.dayName',
        headerVisible: true
    };

    constructor(props) {
        super();
        this.state = {
            dayName: 'DAY OF WEEK'
        }
    }

    componentDidMount() {
        this.setState({
            dayName: this.props.navigation.state.params.dayName
        });
        console.log(this.state.dayName);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <Text>
                  TEST
              </Text>
            </SafeAreaView>
        );
    }
}