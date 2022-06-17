import React from "react";

function Cardlist({ dados }) {
    const paises = [24, 186, 150]
    return (

        <div className="container-principal">
            <div className="container-title">
                <p>#USEMÁSCARA</p>
                <h1 className="card-title"> Situação por País </h1>
            </div>
            <div className="cardlist-country">
                {
                    paises.map(i => (
                        <div className="card-country">
                            <div className="main-data">
                                <h3 className="country-name">{`${dados[i]?.CountryCode || 0} - ${dados[i]?.Country || 0}`}</h3>
                                <div className="info-main-data">
                                    <h4 className="data-calendar"><span>Última Atualização: </span>{dados[i]?.Date}</h4>
                                </div>
                                <div className="info-main-data">
                                    <h4>{dados[i]?.TotalConfirmed.toLocaleString("pt-br") || 0}</h4>
                                    <p>Casos Confirmados</p>
                                </div>
                                <div className="info-main-data">
                                    <h4>{dados[i]?.TotalDeaths.toLocaleString("pt-br") || 0}</h4>
                                    <p>Casos de Morte</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="bottom-data">
                                <div className="bottom-data-esq">
                                    <div className="info-bottom-data">
                                        <h5>{dados[i]?.NewDeaths.toLocaleString("pt-br") || 0}</h5>
                                        <p>Novas Mortes</p>
                                    </div>
                                    <div className="info-bottom-data">
                                        <h5>{dados[i]?.NewConfirmed.toLocaleString("pt-br") || 0}</h5>
                                        <p>Novas Confirmações</p>
                                    </div>
                                </div>
                                <div className="bottom-data-dir">
                                    <div className="info-bottom-data">
                                        <h5>{dados[i]?.NewRecovered.toLocaleString("pt-br") || 0}</h5>
                                        <p>Novos Recuperados</p>
                                    </div>
                                    <div className="info-bottom-data">
                                        <h5>{dados[i]?.TotalRecovered.toLocaleString("pt-br") || 0}</h5>
                                        <p>Total de Recuperados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Cardlist;