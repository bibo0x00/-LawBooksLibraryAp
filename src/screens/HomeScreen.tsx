import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  BookDetails: {
    book: {
      id: string;
      title: string;
      author: string;
      cover: string;
    };
  };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'BookDetails'>;

const CATEGORIES = [
  'Constitutional Law',
  'Criminal Law',
  'Civil Law',
  'Corporate Law',
  'International Law',
];

const FEATURED_BOOKS = [
  {
    id: '1',
    title: 'Constitutional Law Principles',
    author: 'John Smith',
    cover: 'https://example.com/book1.jpg',
  },
  // Add more books...
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetails', { book: item })}>
      <Image
        source={{ uri: item.cover }}
        style={styles.bookCover}
        resizeMode="cover"
      />
      <Text style={styles.bookTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={CATEGORIES}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Featured Books</Text>
      <FlatList
        data={FEATURED_BOOKS}
        renderItem={renderBookItem}
        numColumns={2}
        columnWrapperStyle={styles.bookList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  categoryItem: {
    backgroundColor: '#1a73e8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  bookList: {
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '48%',
    marginBottom: 16,
  },
  bookCover: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
}); 