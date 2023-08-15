import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import * as Font from 'expo-font';

function HomeScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Get the current date
    const date = new Date();
    const options = { year: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);

    setRefreshing(false);
  };

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Nanum Myeongjo': require('./assets/NanumMyeongjo-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();

    // Get the current date on initial load
    const date = new Date();
    const options = { year: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.refreshContainer}>
        <View style={styles.taskHolder}>
          {fontLoaded && <Text style={styles.text}>{currentDate}</Text>}
          <View style={styles.streakCounter}>
            <Text style={styles.streakText}>Your Streak : 0</Text>
          </View>
        </View>
      </View>
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Content that scrolls */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    height: 400, // Set the desired height for the ScrollView
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  taskHolder: {
    width: '100%',
    height: 800,
    borderRadius: 30,
    top:300,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 1,
    margin: 35,
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'Nanum Myeongjo',
  },
  streakCounter: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 33,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    width: 110,
    height: 25,
    borderRadius: 30,
    backgroundColor: 'rgba(39, 39, 39, 1)',
  },
  streakText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'Nanum Myeongjo',
  },
});

export default HomeScreen;
