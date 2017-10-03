import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class AnotherModalScreen extends Component{

    handlePress = () => {
        this.props.navigator.dismissAllModals({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
    };

    render(){
        return (
            <Container
                backgroundColor='#D08BCD'
                onPress={this.handlePress}
            >
                <Text>I am another modal {"\n"}
                    click me to close all modals
                </Text>
            </Container>
        )
    }
}

export default AnotherModalScreen;