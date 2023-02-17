import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useFetchMoviesQuery } from "../store";
import MovieItem from "../components/MovieItem";
import useAuth from "../context/Auth";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const { data, isFetching, error } = useFetchMoviesQuery(term);
  const { logout } = useAuth();

  const Content = () => {
    if (data?.results?.length > 0)
      return (
        <FlatList
          keyExtractor={(item) => item.id}
          data={data?.results}
          contentOffset={{ x: 0, y: 0 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MovieItem movie={item} />}
        />
      );
    let reason;
    if (isFetching) reason = <ActivityIndicator size="small" color="#0000ff" />;
    else if (error) reason = <Text>Something went wrong</Text>;
    else reason = <Text style={styles.text}>No movies, look for some</Text>;

    return <View style={styles.mainContainer}>{reason}</View>;
  };

  return (
    <>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <View>
        <SearchBar onBlur={setTerm} />
      </View>
      <Content />
    </>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    alignItems: "flex-end",
  },
  logoutText: {
    marginTop: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
