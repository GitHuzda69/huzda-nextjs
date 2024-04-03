"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

export function Pagination(count) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const posts = searchParams.get("posts") || 1;
  const params = new URLSearchParams(searchParams);

  const hasPrev = posts === 1;
  const hasNext = posts === count.count;

  const handleChangePost = (type) => {
    type === "prev"
      ? params.set("posts", parseInt(posts) - 1)
      : params.set("posts", parseInt(posts) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={hasPrev}
        onClick={() => handleChangePost("back")}
      >
        Back
      </button>
      <button
        className={styles.button}
        disabled={hasNext}
        onClick={() => handleChangePost("next")}
      >
        Next
      </button>
    </div>
  );
}
