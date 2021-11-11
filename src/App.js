import React from 'react';
import QRCode from "react-qr-code";

const App = () => {

    return (
        <>
            {/* BEGIN HERO ================================================== */}
            <div className="section-hero">
                <div className="container text-center">
                    <h1>InfoSession: </h1>
                    <h1>Conviértete en el Full-Stack Developer <br />que siempre soñaste ser</h1>
                    {/* <p className="lead">
                        Use this landing page to quickly start selling your audio file(s).
                        <br />
                        Perfect to introduce your audio books, songs, tutorials, lessons.
                    </p> */}
                    <p>
                        <a href="https://www.4geeksacademy.com/" className="btn btn-default">
                            <i className="fa fa-arrow-circle-o-down" /> Sitio Web
                        </a>
                    </p>
                    <QRCode value="https://forms.gle/6mZGeFxreMsYXSs89" />
                </div>
                {/* /.container */}
            </div>
            {/* END HERO ================================================== */}
            {/* BEGIN ABOUT ================================================== */}
            <section id="about">
                <div className="section-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>4Geeks Academy</h2>
                                <div className="spacer"></div>
                                <h6>&lt;TIME TO CODE /&gt;</h6>
                            </div>
                            <div className="col-md-8">
                                <p>
                                    Conviértete en el programador que siempre soñaste ser.
                                </p>
                                <p>

                                    Te invitamos a nuestro #InfoSession #ChristmasEdition que se realizará el próximo 11 de noviembre, en el cuál daremos información acerca de nuestros programas Full-Time y Part-Time.
                                </p>
                                <p>
                                    Tendremos como speakers a Jennifer Toledo, Luis Rodríguez y 2 egresados, dispuestos a explicarte todo acerca de la experiencia de ser un Full-Stack y cómo es formarse en nuestro Bootcamp.
                                </p>
                                <p>
                                    También tendremos una sorpresa para todos los asistentes que quieran inscribirse para las próximas cohortes de Diciembre 2021 y Enero 2022 así que ¡Asiste!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END ABOUT ================================================== */}
        </>
    )
}

export default App;
