import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchBar = ({ onBlur }) => {
  const [term, setTerm] = useState();

  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color="ccc" />
      <TextInput
        value={term}
        onBlur={() => onBlur(term)}
        onChangeText={setTerm}
        style={styles.input}
        placeholder="Search..."
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cfcfd5",
    borderRadius: 15,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  input: {
    fontSize: 18,
    padding: 15,
    flex: 1,
  },
});

export default SearchBar;
