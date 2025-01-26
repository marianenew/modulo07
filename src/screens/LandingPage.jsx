/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </header>
            <main className="landing-content">
                <section className="landing-intro">
                    <h2>Bienvenido</h2>
                    <div className="line"></div>
                    <p>
                        Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de
                        <strong> componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                    </p>
                </section>
                <section className="landing-topics">
                    <h2>Temas Cubiertos</h2>
                    <div className="line"></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Componentes funcionales y de clase</th>
                                <th>Uso de React hooks como useState y useEffect</th>
                                <th>Creación de custom hooks como useForm</th>
                                <th>Gestión de variables de estado con useState</th>
                                <th>Gestión de estado global con Redux</th>
                                <th>Integración de Redux con React</th>
                                <th>Manejo de Formularios en React</th>
                                <th>Publicando nuestra Página con GitHub Pages</th>
                                                             
                            </tr>
                        </thead>
                    </table>
                    
                </section>
                <section className="landing-resources">
                    <h2>Recursos Adicionales</h2>
                    <div className="line"></div>
                    <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
                </section>
            </main>
            <footer className="landing-footer">
                <p>© 2024 Módulo 7. USIP.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
