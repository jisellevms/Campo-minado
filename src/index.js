import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import params from './params';
import MineField from './components/MineField';
import { createMinedBoard } from './function';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.board}>
                    <MineField board={this.state.board} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    board:{
        alignItems: 'center',
        backgroundColor: '#AAA'
    }
})