import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import HTML from 'react-native-render-html';

const windowWidth = Dimensions.get('window').width;

const BlogDetailPage = ({ navigation, route }) => {
  const { post } = route.params;

  const handleGoBack = () => {
    navigation.navigate('BlogListPage');
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>Geri Dön</Text>
            </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          
          <View style={styles.cardHeader}>
         
            <Image
              source={{ uri: post.banner }}
              style={styles.blogImage}
              resizeMode="cover"
            />
           
            <Text style={styles.cardHeaderText}>{post.totalReadingTime} minutes read</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.title}>{post.title}</Text>
            <HTML source={{ html: post.content }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F4F',
    paddingTop: '30%',
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    flexDirection: 'column',
    width: windowWidth * 0.9,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#F1F6F9',
    marginVertical: 20,
    alignSelf: 'center',
  },
  cardHeader: {
    position: 'relative',
    aspectRatio: 1,
  },
  cardHeaderText: {
    color: '#9BA4B5',
    paddingTop: 10,
    paddingStart: 10,
  },
  blogImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default BlogDetailPage;
