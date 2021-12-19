import { useMemo } from "react";

interface Props {
  content: string;
  locale: "PL" | "EN";
}

const useTime = (props: Props) => {
  const { content, locale } = props;

  const words = useMemo(() => content.split(" ").length, [content]);

  const time = useMemo(() => Math.ceil(words / 200), [words]);

  return {
    words,
    time,
    text: `${time} ${
      locale === "EN" ? "minutes to read" : "minut do przeczytania"
    }`,
  };
};

export { useTime };
