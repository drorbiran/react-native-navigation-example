import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Container from '../components/Container'

class Screen2 extends Component{

    static navigatorStyle = {
        navBarTextColor: 'red',
        navBarBackgroundColor: '#EEEEEE',
        navBarTextFontSize: 16,// change the background color of the nav bar (remembered across pushes)
    };

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Edit', // for a textual button, provide the button title (label)
                id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
                disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
                buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            },
            {
                icon: require('../img/navicon_add@2x.ios.png'), // for icon button, provide the local image asset name
                id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
            // {
            //     rightButtons: [{ // buttons for the right side of the nav bar (optional)
            //         title: 'Edit', // if you want a textual button
            //         icon: require('../../img/navicon_edit.png'), // if you want an image button
            //         component: 'example.CustomButton', // if you want a custom button
            //         passProps: {}, // Object that will be passed as props to custom components (optional)
            //         id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
            //         testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
            //         disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
            //         disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
            //         buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
            //         buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            //         buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            //     }],
            //
            // }
        ],
        leftButtons: [
            {
                id: 'accept'
            }
        ] // buttons for the left side of the nav bar (optional)

    };

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
                console.log("Edit button pressed");
            }
            if (event.id == 'add') {
                console.log("Add button pressed");
            }
        }
    }

    render(){
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        return (
            <Container
                backgroundColor='#A3DEB8'
                onPress={() => console.log("press screen 2")}
            >
                <Text>Screen2</Text>
            </Container>
        )
    }
}

export default Screen2;
