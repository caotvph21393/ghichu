import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import List from './compunent/List'
import Edit from './compunent/Edit'
import Add from './compunent/Add'


const StackMain=createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
          <StackMain.Navigator  initialRouteName='list'>
            <StackMain.Screen name='list' component={List} options={ {title:'Trang chủ'}} />
            <StackMain.Screen name='add' component={Add} options={ {title:'Thêm ghi chú'}} />
            <StackMain.Screen name='edit' component={Edit} options={ {title:'Sửa ghi chú'}} />
		
          </StackMain.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
