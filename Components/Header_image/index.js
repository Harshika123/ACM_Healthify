import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });


const Header_image = () => {
  return (
  //  <View>
      <Image
       style={styles.stretch}
        source={require('../../Images/Ellipse 3.png')}
      />
    //  <Text>HI</Text>
   // </View>
  );
}

export default Header_image;