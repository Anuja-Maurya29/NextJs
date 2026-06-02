import Link from "next/link";
export default function Home(props: any) {
  console.log(props)
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/about">About</Link>{" "}
        <Link href="/contact">Contact</Link>{" "}
        <Link href="/product">Product</Link>{" "}
        <Link href="/docs">Documentation</Link>
      </nav>
    </div>
  );
}
