import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://apioliver.com/countries/all", {
        method: "POST",
      });
      return response.json();
    },
  });
};
