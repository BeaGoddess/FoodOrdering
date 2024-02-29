import { ActivityIndicator, FlatList, Text } from "react-native";
import OrdersListItem from "@/components/OrdersListItem";
import { Stack } from "expo-router";
import { useMyOrderList } from "@/api/orders";

export default function OrdersScreen() {
  const { data: orders, isLoading, error } = useMyOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />

      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
}
