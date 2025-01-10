import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Species } from "./Species";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Characters({ character }) {
  return (
    <Link href={`/${character.id}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View className="flex-row gap-4" key={character.id}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="text-white font-bold text-xl">{character.id}</Text>
            <Text className="mb-1" style={styles.name}>
              {character.name}
            </Text>
            <Text style={styles.status}>{character.status}</Text>
            <Species species={character.species} />
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedCharacterCard({ character, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Characters character={character} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    color: "#eee",
  },
  species: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
