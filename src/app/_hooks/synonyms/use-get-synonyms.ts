import { Synonym } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export default function useGetSynonyms() {
  const synonymQuery = useQuery<Synonym[]>({
    queryKey: ["synonyms"],
    queryFn: () =>
      fetch("https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1/synonyms").then(
        (response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch synonyms");
          }
          return response.json();
        },
      ),
  });
  return synonymQuery;
}
