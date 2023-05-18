import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

const BlogListPage = ({ navigation }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1');
      const data = await response.json();
      setBlogPosts(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchBlogs();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate('BlogDetailPage', { post: item })}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={{ uri: item.banner }}
                style={styles.blogImage}
                resizeMode="cover"
              />
              <Text style={styles.cardHeaderText}>{item.totalReadingTime} minutes read</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.summary}</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>Read More  </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.postId.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        horizontal={false}

      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2F4F',
    paddingTop: '30%',
  },
  logo: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
  },
  image: {
    flex: 1,
    marginRight: 8,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },

  summary: {
    fontSize: 15,
    marginBottom: 4,
  },
  readingTime: {
    fontSize: 12,
    color: 'gray',
  },
  content: {
    fontSize: 14,
  },
  card: {
    flexDirection: 'column',
    width: windowWidth * 0.9,

    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: '#F1F6F9',
    marginVertical: 20,
    alignSelf: 'center',


  },
  cardHeader: {
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
  cardFooter: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: 10,
    borderTopEndRadius: 100,
    borderTopWidth: 3,
    borderTopColor: '#394867',
  },
  cardFooterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#394867',
  }
});




export default BlogListPage