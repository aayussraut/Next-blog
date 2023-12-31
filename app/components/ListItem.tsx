import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: Blogpost;
};
export default function ListItem({ post }: Props) {
  const { id, date, title } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li key={id} className={"mt-4 text-2xl dark:text-white/90"}>
      <Link
        className={"underline hover:text-black/70 dark:hover:text-white"}
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className={"text-sm mt-1"}>{formattedDate}</p>
    </li>
  );
}
