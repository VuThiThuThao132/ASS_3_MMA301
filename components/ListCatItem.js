import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ListCatItem({ data, selectCat, chosenCat }) {
  function renderCatItem(item) {
    return (
      <View
        style={[
          styles.rootContainer,
          item.id === chosenCat ? { shadowColor: item.color } : null,
          item.id === "c0" ? { shadowOpacity: 0 } : null,
        ]}
      >
        <Pressable
          style={[
            styles.innerContainer,
            item.id === chosenCat ? { backgroundColor: item.color } : null,
            item.id === "c0" ? { width: 100, backgroundColor: null } : null,
          ]}
          onPress={selectCat.bind(this, item.id)}
        >
          {item.id === "c0" ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                style={[
                  {
                    padding: 15,
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 36,
                    overflow: "hidden",
                  },
                  item.id !== chosenCat ? { borderWidth: 0 } : null,
                ]}
                name="home"
                size={40}
              />
            </View>
          ) : (
            <>
              <Image
                style={styles.image}
                source={{ uri: item.img }}
                resizeMode="cover"
              />
              <View style={styles.content}>
                <Text
                  style={[
                    styles.textContent,
                    item.id === chosenCat
                      ? { color: "white" }
                      : { color: "black" },
                  ]}
                >
                  {item.name}
                </Text>
                <Ionicons
                  name={
                    item.id === chosenCat
                      ? "ios-radio-button-on"
                      : "ios-radio-button-off"
                  }
                  size={25}
                  color={item.id === chosenCat ? "white" : "black"}
                />
              </View>
            </>
          )}
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderCatItem(item)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    padding: 15,
  },
  innerContainer: {
    width: 150,
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContent: {
    textAlign: "center",
    fontWeight: "600",
  },
});
