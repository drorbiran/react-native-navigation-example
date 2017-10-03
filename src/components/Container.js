import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const Container = ({backgroundColor, onPress, children}) =>{
    return (
        <View style={[styles.container, {backgroundColor}]}>
            <TouchableOpacity onPress={onPress}>
                {children}
            </TouchableOpacity>
        </View>
    )
};

const styles = {
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500'
    }
};

export default Container;
