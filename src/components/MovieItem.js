import { View, Text, Image, StyleSheet } from "react-native";

const width = 300;

const MovieItem = ({ movie }) => {
  const plainImage =
    "https://t4.ftcdn.net/jpg/04/70/29/87/360_F_470298738_1eHqTZ0B5AvB3emaESPpvQ93227y7P0l.jpg";
  const path = movie.poster_path;
  const url = path ? `https://image.tmdb.org/t/p/w${width}${path}` : plainImage;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: url }} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
  img: {
    width,
    height: width * 1.3,
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default MovieItem;
