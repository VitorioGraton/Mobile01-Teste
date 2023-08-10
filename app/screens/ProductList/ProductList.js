import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DATA = [

  {

    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

    titulo: 'Abajur',

    estudio: 'Jim&Jill Designs',

    imagem: require('../../assets/images/01-tablelamps.png'),

    itemName: 'Wilson',

    preco: 92.1,

    itemDesc:

      'Contrary to popular belief, Lorem Ipsum is not simply random text',

  },

  {

    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

    titulo: 'Lâmpada de teto',

    estudio: 'Gary&Fly Designs',

    imagem: require('../../assets/images/02-ceilinglamps.png'),

    itemName: 'Linda',

    preco: 123.44,

    itemDesc:

      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',

  },

  {

    id: '58694a0f-3da1-471f-bd96-145571e29d72',

    titulo: 'Arandela',

    estudio: 'Tom&Jim Designs',

    imagem: require('../../assets/images/03-sconces.png'),

    itemName: 'Jerry',

    preco: 33.43,

    itemDesc:

      'There are many variations of passages of Lorem Ipsum available, but the majority',

  },

  {

    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',

    titulo: 'Luminária de chão',

    estudio: 'Kerry&King Designs',

    imagem: require('../../assets/images/04-floorlamps.png'),

    itemName: 'Jack',

    preco: 67.23,

    itemDesc:

      'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',

  },

  {

    id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',

    titulo: 'Luzes decorativas',

    estudio: 'Dave&Sugar Designs',

    imagem: require('../../assets/images/05-lightdecor.png'),

    itemName: 'Amanda',

    preco: 98.4,

    itemDesc:

      'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic',

  },

  {

    id: '58694a0f-3deea1-471f-bd96-145571e29d72',

    titulo: 'Guirlanda',

    estudio: 'Jeff&Lighter Designs',

    imagem: require('../../assets/images/06-garlands.png'),

    itemName: 'Julia',

    preco: 100.3,

    itemDesc:

      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ',

  },
  ];

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  tituloText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemNameText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  precoText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 4,
  },
  itemDescText: {
    fontSize: 14,
    color: '#666',
  },
});

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.imagem} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.tituloText}>{item.titulo}</Text>
              <Text style={styles.itemNameText}>{item.itemName}</Text>
              <Text style={styles.precoText}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={styles.itemDescText}>{item.itemDesc}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductList;
