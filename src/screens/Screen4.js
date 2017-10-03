import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class Screen3 extends Component{

    handlePress = () => {
        this.props.navigator.dismissModal();
    };

    render(){
        return (
            <Container
                backgroundColor='#F7A997'
                onPress={this.handlePress}
            >
                <Text>{this.props.text}</Text>
            </Container>
        )
    }
}

export default Screen3;
