import React, {Component} from 'react';
import {View,Text} from 'react-native';

class FirstSideMenu extends Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>First SideMenu screen</Text>
            </View>
        )
    }
}

export default FirstSideMenu;
