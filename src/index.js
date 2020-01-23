import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Params from './params';
import Field from './components/Field';

export default class App extends Component{
    
    render(){
        return(
            <View style={style.container}>

                <Field />
                <Field opened />
                <Field opened nearMines={1} />
                <Field opened nearMines={2} />
                <Field opened nearMines={3} />
                <Field opened nearMines={6} />
            </View>
        )
    }
}

const style = StyleSheet.create({
  container:{
      flex: 1
  }  
})