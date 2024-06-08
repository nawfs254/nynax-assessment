import { useEffect, useState } from "react";

const Table = ({inputData}) => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList')
            .then(res => res.json())
            .then(data => {
                setVehicles(data.data)
            })
    }, [])

    // const choosenVehicle = vehicles.filter((vehicle) => vehicle.model === inputData.inputData.vehicle)

    console.log(inputData.inputData)

    // console.log(choosenVehicle)

    // const dailyRate = choosenVehicle[0]?.rates.daily;
    // const weeklyRate = choosenVehicle[0]?.rates.weekly;

    // const totalCostDaily = dailyRate * inputData?.inputData?.duration;
    // console.log(totalCostDaily)

    // const week = Math.floor(inputData?.inputData.duration / 7)
    // const totalCostWeekly = weeklyRate * week;
    // console.log(totalCostWeekly)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-left">Charges</th>
                            <th>Unit</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>

                    </thead>

                    <tbody>
                        {/* row 1 */}
                        <tr className="text-sm">
                            <th className="text-left">Daily</th>
                            <td>1</td>
                            {/* <td>$ <span>{choosenVehicle[0]?.rates.daily}</span></td>
                            <td>$ <span>{choosenVehicle[0]?.rates.daily}</span></td> */}
                        </tr>

                        <tr className="text-sm">
                            <th className="text-left">Weekly</th>
                            <td>1</td>
                            {/* <td>$ <span>{choosenVehicle[0]?.rates.weekly}</span></td> */}
                            {/* <td>$ <span>{choosenVehicle[0]?.rates.weekly}</span></td> */}
                        </tr>
                    </tbody>
                    <tr>
                        {/* {inputData?.inputData.collisonDmgChck ? <td colSpan={4} >Collision Damage Waiver: <span className="mx-5 font-bold">9.00</span>$</td> : <></>} */}
                    </tr>
                    <tr>
                        {/* {inputData.inputData.liabilityChck ? <td colSpan={4} >Collision Damage Waiver: <span className="mx-5 font-bold">15.00</span>$</td> : <></>} */}
                    </tr>

                    <tr>
                        {/* {inputData.inputData.rentalChck ? <td colSpan={4} >Collision Damage Waiver: <span className="mx-5 font-bold">11.5</span>%</td> : <></>} */}
                    </tr>
                    <tfoot>
                        <tr className="text-base text-black ">
                            <td className="text-left">Total</td>
                            <td></td>
                            <td></td>
                            <td>$ <span>
                                {/* {
                                    totalCostDaily < totalCostWeekly ? totalCostDaily : totalCostWeekly
                                } */}
                            </span></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;