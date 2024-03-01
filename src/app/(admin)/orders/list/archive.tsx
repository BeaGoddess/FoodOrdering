import { ActivityIndicator, FlatList, Text } from "react-native";
import OrdersListItem from "@/components/OrdersListItem";
import { useAdminOrderList } from "@/api/orders";

export default function OrdersScreen() {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: true });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrdersListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
