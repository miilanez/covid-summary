import React from "react";

function Cardlist({ dados }) {
    const paises = [24, 25, 26]
    return (

        <div className="container-principal">
            <div className="container-title">
                <p>#USEMASKS</p>
                <h1 className="card-title"> Situation by Country </h1>
            </div>
            <div className="cardlist-country">
                {
                    paises.map(i => (
                        <div className="card-country">
                            <div className="main-data">
                                <h3 className="country-name">{`${dados[i].CountryCode} - ${dados[i].Country}`}</h3>
                                <div className="info-main-data">
                                    <h4>{dados[i].TotalConfirmed}</h4>
                                    <p>Confirmed Cases</p>
                                </div>
                                <div className="info-main-data">
                                    <h4>0</h4>
                                    <p>Cases of Death</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="bottom-data">
                                <div className="bottom-data-esq">
                                    <div className="info-bottom-data">
                                        <h5>0</h5>
                                        <p>New Deaths</p>
                                    </div>
                                    <div className="info-bottom-data">
                                        <h5>0</h5>
                                        <p>New Confirmeds</p>
                                    </div>
                                </div>
                                <div className="bottom-data-dir">
                                    <div className="info-bottom-data">
                                        <h5>0</h5>
                                        <p>New Recovereds</p>
                                    </div>
                                    <div className="info-bottom-data">
                                        <h5>0</h5>
                                        <p>Total recovereds</p>
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