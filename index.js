/**
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

const courses = TabNavigator({
  ReactCourses: { screen: ReactCourses },
  NativeCourses: { screen: NativeCourses },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#80cbc4',
    swipeEnabled: true,
    style: {
      backgroundColor: '#25a69a',

    },
  },
});

console.ignoredYellowBox = ['Remote debugger'];

AppRegistry.registerComponent('reactnative', () => courses);
