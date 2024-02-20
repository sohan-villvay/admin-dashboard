"use client";

import { getData } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";

export default async function useGetSynonyms() {
  return useQuery({
    queryKey: ["synonyms"],
    queryFn: getData,
  });
}
