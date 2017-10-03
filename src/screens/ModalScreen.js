import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class ModalScreen extends Component{

    handlePress = () => {
        this.props.navigator.showModal({
            screen: "AnotherModalScreen", // unique ID registered with Navigation.registerScreen
            title: "Another Modal Screen", // title of the screen as appears in the nav bar (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    };

    render(){
        return (
            <Container
                backgroundColor='#F79A94'
                onPress={this.handlePress}
            >
                <Text>I am a Modal {"\n"}
                      click me to open another modal
                </Text>
                <Text>{this.props.text}</Text>
            </Container>
        )
    }
}

export default ModalScreen;