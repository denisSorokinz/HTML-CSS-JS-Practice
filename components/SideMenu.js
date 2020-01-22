import React, { Component } from 'react';
import { View, Dimensions, Picker } from 'react-native';

export default class SideMenu extends Component {
    render() {
        return(
            <View style=
            {
              {
                backgroundColor: '#fff',
                position: 'absolute',
                zIndex: 5,
                height: Dimensions.get('window').height, 
                width: Dimensions.get('window').width * 0.75
              }
            }>
                <Picker
                    selectedValue={'First Week'}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue) =>
                        console.log('CHANGED TO: ', itemValue)
                    }>
                    <Picker.Item label="First Week" value="first" />
                    <Picker.Item label="Second Week" value="second" />
                </Picker>
            </View>
        );
    }
}