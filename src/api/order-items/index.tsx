import { supabase } from "@/lib/supabase";
import { InsertTables } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useInsertOrderItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(items: InsertTables<"order_items">[]) {
      const { data: newOrder, error } = await supabase
        .from("order_items")
        .insert(items)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return newOrder;
    },
  });
};
