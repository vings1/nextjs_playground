
export default async function Users() { // async component
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        
        <div>
            {" "}
            <h1 className="text-amber-300">Users Page</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul> {" "}
        </div>
    )
}