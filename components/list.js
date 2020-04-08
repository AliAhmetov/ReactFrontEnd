import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MovieList() {

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/movies/', {
            method: 'GET',
            headers: {
                'Authorization': `Token 3aca90cebc8d83a834cc97937af58ccf141f4492`
            }
        })
        .then( res => res.json())
        .then( jsonRes => setMovies(jsonRes))
        .catch( error => console.log(error))
    }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
            <Text>{item.title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
