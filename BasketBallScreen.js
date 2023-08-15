import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useHapticFeedback } from './useHapticFeedback'; // Import the haptic feedback utility

function BasketBallScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();
  const { triggerHapticFeedback } = useHapticFeedback(); // Initialize the haptic feedback function

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Maitree: require('./assets/Maitree-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading font:", error);
      }
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('./assets/homepagepic.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/logotext-kopi.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.customFont]}>Thrivr</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.blackCircle}
        activeOpacity={0.7}
        onPress={() => {
          triggerHapticFeedback(); // Trigger haptic feedback
          navigation.navigate('Account'); // Navigate to the 'Account' screen
        }}
      >
        <Image
          source={require('./assets/person.png')}
          style={styles.circleImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    flex: 1,
  },
  logo: {
    top: -90,
    width: '45%',
    height: '45%',
  },
  textContainer: {
    flex: 2,
    left: -65,
    paddingTop: 62,
  },
  text: {
    color: 'white',
    fontSize: 29,
    fontWeight: '300',
  },
  customFont: {
    fontFamily: 'Maitree',
  },
  blackCircle: {
    width: 38,
    height: 38,
    flexShrink: 0,
    borderRadius: 44,
    backgroundColor: '#1D1D1D',
    position: 'absolute',
    top: 90,
    right: (width - 20) / 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: '45%',
    height: '45%',
  },
});

export default BasketBallScreen;