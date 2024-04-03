"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handlerSearch = useDebouncedCallback((e) => {
    const params = URLSearchParams(searchParams);
    params.set("users", "1");
    params.set("posts", "1");
    replace(`${pathname}?${params}`);
  }, 300);

  return handlerSearch;
}
