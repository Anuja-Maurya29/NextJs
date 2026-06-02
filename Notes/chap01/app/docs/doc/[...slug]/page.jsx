export default async function DocsSlug({ params }) {
    const { slug } = await params;
    console.log(slug)
    return (
        <div>
            <h1>Docs Slug:{slug.join('/')}</h1>
        </div>
    );
}