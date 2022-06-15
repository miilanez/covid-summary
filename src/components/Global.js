import React from "react";

function Global({dados}) {
    return (
        <div className="container-principal">
            <div className="container-global">
                <div className="container-title">
                    <p>#WASHYOURHANDS</p>
                    <h1 className="card-title"> Global Situation </h1>
                </div>
                <div className="card-global">
                    <div className="card-global-esq">
                        <div className="principal-data">
                            <h3>{dados.TotalConfirmed.toLocaleString("pt-br")}</h3>
                            <p>Confirmed Cases</p>
                        </div>

                        <div className="principal-data">
                            <h3>{dados.TotalDeaths.toLocaleString("pt-br")}</h3>
                            <p>Cases of Death</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-global-center">
                        <div className="other-data">
                            <h5>
                                {dados.NewDeaths.toLocaleString("pt-br")}
                            </h5>
                            <p> New Deaths </p>
                        </div>
                        <div className="other-data">
                            <h5> {dados.NewConfirmed.toLocaleString("pt-br")} </h5>
                            <p> New Confirmeds </p>
                        </div>
                        <div className="other-data">
                            <h5> {dados.NewRecovered.toLocaleString("pt-br")} </h5>
                            <p> New Recovereds </p>
                        </div>
                        <div className="other-data">
                            <h5> {dados.TotalRecovered.toLocaleString("pt-br")} </h5>
                            <p> Total Recovereds </p>
                        </div>
                    </div>
                    <div className="card-global-graphic">
                        <h1> grafico aqui </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Global;