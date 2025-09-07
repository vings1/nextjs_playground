import { notFound } from "next/navigation";

async function fetchUser(id: string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        return null;
    }
    const user = await res.json();
    return user;
}

export default async function UserPage({
    params,
}: {
    params: Promise<{userId: string}>;
}) { 
    const { userId } = await params;
    const user = await fetchUser(userId);

    // 404 page
    if (!user){
        notFound();
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {user.website}</a></p>
            <p><strong>company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        </div>
    );
}
