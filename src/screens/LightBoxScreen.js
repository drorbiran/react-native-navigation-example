import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class LightBoxScreen extends Component{


    render(){
        return (
            <Container
                backgroundColor='#FFFFFF'
            >
                <Text>I am a light Box Screen</Text>
                <Text>{this.props.text}</Text>
            </Container>
        )
    }
}

export default LightBoxScreen;
