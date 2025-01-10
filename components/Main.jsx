import { useCallback, useState, useEffect } from "react";
import { Link } from "expo-router";
import { FlatList, View, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCharacterCard } from "./Characters";
import { CircleInfoIcon } from "./Icons";
import { Logo } from "./Logo";

export function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  const getData = useCallback(async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  }, []);

  useEffect(() => {
    getData();
  }, [characters]);

  return (
    <View
      className="bg-black"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      <Link asChild href="/about">
        <Pressable>
          <CircleInfoIcon />
        </Pressable>
      </Link>
      {characters.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color="#fff" size="large" />
        </View>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(character) => character.id}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard character={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
