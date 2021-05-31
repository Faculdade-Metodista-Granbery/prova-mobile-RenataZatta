import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFEFD5',
        margin: 15,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    barrinha: {
        backgroundColor: '#FA8072',
        width: 500,
        height: 5,
        borderRadius: 5,
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 250,
    },
    centralizarBotao: {
        alignItems: 'center',
        flex: 1,
    },
    centralizarTexto: {
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
});

const CardQuote = ({task, background}) => {
   
    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={background} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
            <Button icon = {'play'} labelStyle = {{fontSize:60}} color = '#8B0000' style = {styles.centralizarBotao}  onPress={() => console.log('Pressed')}/>    
            </Card.Actions > 
            <Paragraph style = {styles.centralizarTexto}>{task}</Paragraph>
            <View style = {styles.barrinha}></View>
            </Card>
        
    )
}

export default CardQuote;