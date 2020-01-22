import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import SubjectTextInput from './SubjectTextInput';

export default class Subject extends Component {
    constructor(props) {
        super();
    }

    render() {
        if(this.props.showInColumn === true) {
            return(
              <View style={styles.subjectContainer}>
                  <View>
                    <Text style={[styles.text, styles.subjectText]}>
                        { this.props.subjectName ? this.props.subjectName : 'SUBJECT NAME' }
                    </Text>
                  </View>
                  <View style={[styles.hometaskContainer]}>
                    <SubjectTextInput
                      dayName={this.props.dayName} 
                      subjectName={this.props.subjectName} 
                      subjectHometask={this.props.subjectHometask}
                    />
                    <Icon name="edit" size={25} color="#595959" />
                  </View>
              </View>
            );
        }
        
        return(
            <View style={{marginVertical: 1}}>
              <Text style={styles.text}>
                  { this.props.subjectName ? this.props.subjectName : 'SUBJECT NAME' } - { this.props.subjectHometask ? this.props.subjectHometask : 'HOMETASK' }
              </Text>
            </View>
          );
    }

}