import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import Container from '../components/Container'

class Screen1 extends Component{

    pushScreen = () => {
        this.props.navigator.push({
            screen: 'Screen3',
            title: 'Screen 3'
        })
    };

    toggleLeftDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
            // to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        });
    };

    toggleRightDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'right', // the side of the drawer since you can have two, 'left' / 'right'
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
            // to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        });
    };

    showModal = () => {
        this.props.navigator.showModal({
            screen: "ModalScreen", // unique ID registered with Navigation.registerScreen
            title: "Modal Screen", // title of the screen as appears in the nav bar (optional)
            passProps: {text: "I am a prop that came from screen 1"}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    };

    showLightBox = () => {
        this.props.navigator.showLightBox({
            screen: "LightBoxScreen", // unique ID registered with Navigation.registerScreen
            passProps: {text: "I am a prop from screen1"}, // simple serializable object that will pass as props to the lightbox (optional)
            style: {
                backgroundBlur: "light", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                backgroundColor: "#FFFFFF00", // tint color for the background, you can specify alpha here (optional)
                tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
            }
        });
    };

    render(){
        return (
            <Container
                backgroundColor='#8BDFDD'
                onPress={this.handlePress}
            >
                <Text style={styles.textStyle}
                    onPress={this.pushScreen}
                >
                    Push screen
                </Text>
                <Text style={styles.textStyle}
                    onPress={this.toggleLeftDrawer}
                >
                    Toggle Left drawer
                </Text>
                <Text style={styles.textStyle}
                    onPress={this.toggleRightDrawer}
                >
                    Toggle Right drawer
                </Text>
                <Text style={styles.textStyle}
                    onPress={this.showModal}
                >
                    Show Modal
                </Text>
                <Text style={styles.textStyle}
                    onPress={this.showLightBox}
                >
                    Show Light Box
                </Text>

            </Container>

        )
    }
}

const styles = {
    textStyle : {
        fontSize: 18,
        padding: 16
    }
};

export default Screen1;
