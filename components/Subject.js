import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Subject extends Component {

    constructor(props) {
        super();
    }

    render() {
        if(this.props.showInColumn === true) {
            return(
              <View>
                  <View>
                    <Text style={[styles.dayText, {fontSize: 15}]}>
                        { this.props.subjectName ? this.props.subjectName : 'SUBJECT NAME'}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.dayText, {fontSize: 15}]}>
                        { this.props.subjectHometask ? this.props.subjectHometask : 'HOMETASK'}
                    </Text>
                  </View>
              </View>
            );
        }
        
        return(
            <View>
              <Text style={[styles.dayText, {fontSize: 15}]}>
                  { this.props.subjectName ? this.props.subjectName : 'SUBJECT NAME' } - { this.props.subjectHometask ? this.props.subjectHometask : 'HOMETASK' }
              </Text>
            </View>
          );
    }

}