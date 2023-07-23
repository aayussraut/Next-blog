import Posts from "@/app/components/Posts";

// export const revalidate = 10;

export default function Home() {
  return (
    <main className={"px-6 mx-auto"}>
      <p className={"mt-2 mb-12 text-3xl text-center dark:text-white"}>
        Hello and Welcome &nbsp;
        <span className={"whitespace-nowrap"}>
          I&apos;m <span className={"font-bold"}>Aayush</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
