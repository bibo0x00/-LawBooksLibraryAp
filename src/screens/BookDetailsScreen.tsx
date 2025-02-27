import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type BookDetailsParams = {
  BookDetails: {
    book: {
      id: string;
      title: string;
      author: string;
      cover: string;
    };
  };
};

const BookDetailsScreen = () => {
  const route = useRoute<RouteProp<BookDetailsParams, 'BookDetails'>>();
  const { book } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: '#666',
  },
}); 