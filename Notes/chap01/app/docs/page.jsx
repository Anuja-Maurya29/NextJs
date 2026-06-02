import Link from "next/link";
export default function Docs() {
    return (
        <div>
            <h1>Docs page</h1>
            <Link href="/docs/doc/react">React</Link>
            <Link href="/docs/doc/react/hooks"> Hooks</Link>
            <Link href="/docs/doc/react/hooks/useState"> Hooks useState</Link>
        </div>
    );
}
