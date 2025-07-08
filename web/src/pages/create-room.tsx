import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
    id: string
    name: string
}>

export function CreateRoom() {

    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms')
            const result: GetRoomsAPIResponse = await response.json();

            return result;
        }
    })

    return (
        <div>
            <div>Create Room</div>
            {isLoading &&
                <div> Carregando... </div>
            }
            <div className="flex flex-col gap-1">
                {data && data.map((room) => {
                    return (
                        <div key={room.id}>
                            <p>{`Nome: ${room.name}`}</p>
                            <Button variant="link">
                                <Link to={`/room/${room.id}`}>
                                    Acessar
                                </Link>
                            </Button>
                        </div>
                    )
                })}
            </div>

            <Link className="underline" to={"/room"}>Acessar</Link>
        </div>
    )
}