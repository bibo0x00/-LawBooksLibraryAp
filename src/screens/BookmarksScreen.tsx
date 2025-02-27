import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your bookmarked books will appear here</Text>
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
}); 