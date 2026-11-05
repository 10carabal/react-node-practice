import { useEffect, useState } from "react";
import { getPlayers } from "../api/players";
import type { Player } from "../types";

export function PracticeList() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        // ...
    }, [reloadKey]); // ← cambia la dependencia

    useEffect(() => {

        //controller
        const controller = new AbortController();
        setLoading(true);
        setError(null);
        //signal
        //then

        //catch
        //finally
        getPlayers(controller.signal)
            .then((data) => setPlayers(data))
            .catch((e: unknown) => {
                if (e instanceof Error && e.name !== 'AbortError') setError(e.message);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            })
        return () => controller.abort();


    }, []);

    return (
        <section className="stack">
            <h1>Lista con búsqueda</h1>
            {/* TODO: buscador, estados de carga/error y lista de jugadores */}
        </section>
    )
}
