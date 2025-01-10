import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="min-h-full bg-black p-2">
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className="text-2xl font-bold mb-8 text-white">
        About the project
      </Text>

      <Text className="text-white text-white/90 mb-4">
        This is a simple Rick and Morty character viewer. It uses the Rick and
        Morty API to fetch characters and display them in a list. The list is
        animated with the React Native Animated API. The app is built with React
        Native for Web and Tailwind CSS.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        This is a simple Rick and Morty character viewer. It uses the Rick and
        Morty API to fetch characters and display them in a list. The list is
        animated with the React Native Animated API. The app is built with React
        Native for Web and Tailwind CSS.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        This is a simple Rick and Morty character viewer. It uses the Rick and
        Morty API to fetch characters and display them in a list. The list is
        animated with the React Native Animated API. The app is built with React
        Native for Web and Tailwind CSS.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        This is a simple Rick and Morty character viewer. It uses the Rick and
        Morty API to fetch characters and display them in a list. The list is
        animated with the React Native Animated API. The app is built with React
        Native for Web and Tailwind CSS.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        This is a simple Rick and Morty character viewer. It uses the Rick and
        Morty API to fetch characters and display them in a list. The list is
        animated with the React Native Animated API. The app is built with React
        Native for Web and Tailwind CSS.
      </Text>
    </ScrollView>
  );
}
