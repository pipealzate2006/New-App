import { View, Text } from "react-native";

export function Species({ species }) {
  const getColors = () => {
    switch (species) {
      case "Human":
        return "bg-green-600";
      case "Alien":
        return "bg-blue-600";
    }
  };

  const className = getColors();
  return (
    <View className={`${className} w-20 rounded-lg items-center justify-center`}>
      <Text className="text-lg font-bold text-white">{species}</Text>
    </View>
  );
}
