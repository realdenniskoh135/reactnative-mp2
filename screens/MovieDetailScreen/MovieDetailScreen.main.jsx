import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";
import { View } from "react-native";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */
              <>
                <Image
                  style={styles.movieCellImage}
                  source={{ uri: route.params.movie.posterurl }}
                />
                 <Text style={styles.h1}>{route.params.movie.title}</Text>
                 <Text style={styles.h2}> Released {route.params.movie.releaseDate}</Text>
                 <Text style={styles.h3}>  {route.params.movie.actors.join(", ")}</Text>
                 <Text style={styles.h4}>{route.params.movie.storyline}</Text>
              </>
              
        }
      </ScrollView>
    </SafeAreaView>
    
  );
}
