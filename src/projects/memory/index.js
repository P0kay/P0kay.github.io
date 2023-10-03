import Card from "./Card";

function Memory() {
    const memory_list = ['frog', 'fox', 'cat', 'dog', 'capibara']
    return (
        <div className="flex gap-10">
            {memory_list.map(animal =>
                <Card key={animal}>
                    {animal}
                </Card>
            )}
        </div>
    )
}

export default Memory;