import React from 'react';
import 'jquery';
import 'popper.js';
import './FoodMenu.css';

const FoodMenu = () => {
    return (
        <section id="menu">
            <h2 className="text-center">Food Menu</h2>
            <div className="container">

                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-veg-tab" data-toggle="tab" href="#nav-veg" role="tab" aria-controls="nav-veg" aria-selected="true">VEG</a>
                    <a className="nav-item nav-link" id="nav-nonveg-tab" data-toggle="tab" href="#nav-nonveg" role="tab" aria-controls="nav-veg" aria-selected="false">NON-VEG</a>

                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-veg" role="tabpanel" aria-labelledby="nav-veg-tab">
                        <table className="table table-striped">
                            <thead className="table-light text-center">
                                <tr>
                                    <th scope="col" >Day</th>
                                    <th scope="col" >Lunch</th>
                                    <th scope="col" >Dinner</th>
                                </tr>
                            </thead>
                            <tbody className="items">
                                <tr>
                                    <td>Monday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="nav-nonveg" role="tabpanel" aria-labelledby="nav-nonveg-tab">
                        <table className="table table-striped">
                            <thead className="table-light text-center">
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Lunch</th>
                                    <th scope="col">Dinner</th>
                                </tr>
                            </thead>
                            <tbody className="items">
                                <tr>
                                    <td>Monday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Dal,Rice</td>
                                    <td>Chapati</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FoodMenu;
