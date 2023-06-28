import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ListItem({ data, removeDataFromStorage }) {
  const navigation = useNavigation();

  function onPressFunction(id) {
    navigation.navigate("Detail", { fruitId: id });
  }

  function renderSingleItem(item) {
    return (
      <View style={styles.rootContainer} key={item.id}>
        <Pressable
          style={styles.innerContainer}
          onPress={onPressFunction.bind(this, item.id)}
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.imageUrl }}
            defaultSource={require("../assets/LoadingImage.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <Pressable onPress={removeDataFromStorage.bind(this, item.id)}>
            <Ionicons
              style={styles.icon}
              name="ios-heart-sharp"
              size={40}
              color="red"
            />
          </Pressable>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderSingleItem(item)}
      scrollEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  innerContainer: {
    backgroundColor: "white",
    height: 250,
    marginBottom: 25,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textContainer: {
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
