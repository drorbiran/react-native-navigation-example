import {Navigation} from 'react-native-navigation'

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import FirstSideMenu from './screens/FirstSideMenu';
import SecondSideMenu from './screens/SecondSideMenu';
import ModalScreen from './screens/ModalScreen';
import AnotherModalScreen from './screens/AnotherModalScreen';
import LightBoxScreen from './screens/LightBoxScreen';

export default () => {
    Navigation.registerComponent('Screen1', () => Screen1);
    Navigation.registerComponent('Screen2', () => Screen2);
    Navigation.registerComponent('Screen3', () => Screen3);
    Navigation.registerComponent('Screen4', () => Screen4);
    Navigation.registerComponent('FirstSideMenu', () => FirstSideMenu);
    Navigation.registerComponent('SecondSideMenu', () => SecondSideMenu);
    Navigation.registerComponent('ModalScreen', () => ModalScreen);
    Navigation.registerComponent('AnotherModalScreen', () => AnotherModalScreen);
    Navigation.registerComponent('LightBoxScreen', () => LightBoxScreen);


    Navigation.startTabBasedApp({
        appStyle: {
            keepStyleAcrossPush: false
        },
        tabs: [
            {
                label: 'One', // tab label as appears under the icon in iOS (optional)
                screen: 'Screen1', // unique ID registered with Navigation.registerScreen
                icon: require('./img/icon1.png'), // local image asset for the tab icon unselected state (optional on iOS)
                selectedIcon: require('./img/icon1_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
                title: 'Screen One' // title of the screen as appears in the nav bar (optional)
            },
            {
                label: 'Two',
                screen: 'Screen2',
                icon: require('./img/icon2.png'),
                selectedIcon: require('./img/icon2_selected.png'),
                title: 'Screen Two',
                iconInsets: { // add this to change icon position (optional, iOS only).
                    top: 0, // optional, default is 0.
                    left: 0, // optional, default is 0.
                    bottom: 0, // optional, default is 0.
                    right: 0 // optional, default is 0.
                },
                //titleImage: require('./img/two.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)


            },
        ],
        tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
            tabBarButtonColor: '#FFFFFF', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
            tabBarSelectedButtonColor: '#000000', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
            tabBarBackgroundColor: '#4196E0', // optional, change the background color of the tab bar
            initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
        },
        appStyle: {
            orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
            bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
            bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
            // backButtonImage: require('./pathToImage.png') // Change the back button default arrow image with provided image. iOS only
            hideBackButtonTitle: false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
        },
        drawer: { // optional, add this if you want a side menu drawer in your app
            left: { // optional, define if you want a drawer from the left
                screen: 'FirstSideMenu', // unique ID registered with Navigation.registerScreen
                passProps: {} // simple serializable object that will pass as props to all top screens (optional)
            },
            right: { // optional, define if you want a drawer from the right
                screen: 'SecondSideMenu', // unique ID registered with Navigation.registerScreen
                passProps: {} // simple serializable object that will pass as props to all top screens (optional)
            },
            style: { // ( iOS only )
                drawerShadow: true, // optional, add this if you want a side menu drawer shadow
                contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
                // leftDrawerWidth: 60, // optional, add this if you want a define left drawer width (50=percent)
                // rightDrawerWidth: 60, // optional, add this if you want a define right drawer width (50=percent)
                // shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
            },
            type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
            animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
            // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
            disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
        },
        passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
        animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    })

}