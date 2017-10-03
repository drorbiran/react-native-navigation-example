import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class Screen3 extends Component{

    handlePress = () => {
        this.props.navigator.showModal({
            screen: 'Screen4',
            title: 'Screen 4',
            passProps: {text: 'I came as a prop from screen 3'}

        })
    };

    render(){
        return (
            <Container
                backgroundColor='#FCCE94'
                onPress={this.handlePress}
            >
                <Text>Screen3</Text>
            </Container>
        )
    }
}

export default Screen3;
