export default async function ProductId({ params }) {
    const { id } = await params
    return (
        <div>
            <h1>Product Id:{id}</h1>
        </div>
    );
}
