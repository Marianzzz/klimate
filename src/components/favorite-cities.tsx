import { useFavorite } from "@/hooks/use-favorite"
import { ScrollArea } from "./ui/scroll-area";
import FavoriteCityTablet from "./favorite-city-tablet";

export default function FavoriteCities() {
    const { favorites, removeFavorite } = useFavorite();
    if (!favorites.length) {
        return null
    }
    return <>
        <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
        <ScrollArea className="w-full pb-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {favorites.map((city) => {
                    return <FavoriteCityTablet key={city.id} {...city} onRemove={() => removeFavorite.mutate(city.id)} />
                })}
            </div>
        </ScrollArea>
    </>
}

