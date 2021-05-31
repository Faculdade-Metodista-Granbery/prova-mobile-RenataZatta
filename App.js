import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';


const notList = [
  { id: 1, task: 'Suco de gratidão + clorofila', background: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg', paisagem: 'https://cdn.shopify.com/s/files/1/0001/9202/0527/products/quadros-democrart-gustavo-jacob-ondas-paisagem-de-baixa-luz-beleza-incontavel-galeria-de-arte-obras-de-arte_7ba14f0d-e0e9-4dc2-adc0-2121e3fa734e_1200x1200.jpg?v=1528209171'},
  { id: 2, task: 'Aplaudir o por do sol', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU', paisagem: 'https://images.madeiramadeira.com.br/product/images/95161460-adesivo-paisagem-natureza-lago-papel-parede-pedras-gg529prdnzl4t46b41opc-179-1-800x729.jpg'},
  { id: 3, task: '5 séries de namastê', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU', paisagem: 'https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg'},
]

export default function App() {


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
      />
      <FlatList
        data={notList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote task={item.task} background={item.background} paisagem={item.paisagem}/>
        }
      >
      </FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});