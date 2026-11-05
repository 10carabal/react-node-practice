import { useState } from "react";


export function NameForm() {
    const [fullName, setFullName] = useState("");

    // function resp(id:string) {
    //     setRespuesta((prev) =>
    //         prev.map((t)=> t.id === id ? {...t, done: !t.done}: t)
    //     )
    // }


    return (
        <section className="stack">
            <header>
                <span className="pill">Extra</span>
                <h1>Formulario controlado</h1>
                <p className="muted">
                    Archivo: <code>src/exercises/NameForm.tsx</code>
                </p>
            </header>

            <div className="card">
                {/* <h2>Formulario controlado</h2> */}

                <form className="toolbar"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(`Hola ${fullName}`);
                    }}
                >

                    <label htmlFor="name">Nombre completo: </label>
                    <br />
                    <input className="input"
                        id="name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-primary" type="submit">Saludar</button>
                </form>
            </div>
        </section>
    );
 }
