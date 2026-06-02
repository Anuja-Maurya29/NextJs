export default async function About() {
    await new Promise(resolve =>
        setTimeout(resolve, 3000)
    );
    return (
        <div>
            <h1>About page content loaded</h1>
        </div>
    );
}