import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 min-h-full bg-black items-center justify-center">
      <View>
        <Text className="text-black text-2xl font-bold">Detail {id}</Text>
        <Link href="/" className="text-blue-500">
          Back
        </Link>
      </View>
    </View>
  );
}
