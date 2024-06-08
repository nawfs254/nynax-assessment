import { useEffect, useState } from "react";
import Title from "./Title";

import "react-datepicker/dist/react-datepicker.css";
import Table from "./Table";
import { useForm } from "react-hook-form";

const Form = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList')
            .then(res => res.json())
            .then(data => {
                setVehicles(data.data)
            })

    }, [])

    const [inputData, setInputData] = useState({})

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const reservationDate = new Date(data.reservationDate)
        const returnDate = new Date(data.returnDate)

        const diffTime = Math.abs(returnDate - reservationDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        e.target.duration.value = diffDays;
        data.duration = diffDays

        setInputData(data)
        console.log(inputData)
    }

    

    const inputClass = "border-gray-200 border-2 p-2 w-full rounded-md";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
            <div>
                <Title title="Reservation Details"></Title>
                <div className="space-y-4 border-gray-200 border-2 p-5 rounded-md">
                    <div className="space-y-2">
                        <label htmlFor="reservationId">ReservationID</label><br />
                        <input type="number" defaultValue={Math.floor(Math.random() * 999)} className={inputClass} {...register("reservationId", { required: false }, { min: new Date() })} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="reservationDate">Reservation Date</label><br />
                        <input type="date" className={inputClass} {...register("reservationDate", { required: true })} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="returnDate">Reservation Date</label><br />
                        <input type="date" className={inputClass} {...register("returnDate", { required: true })} />
                    </div>

                    <div className="flex lg:gap-10 flex-col lg:flex-row justify-between lg:items-center space-y-2">
                        <label htmlFor="duration">Duration <span className="text-xs">in Days</span></label>
                        <input type="number" name="duration" className={inputClass} {...register("duration", { required: false })} disabled />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="discount">Discount</label><br />
                        <input type="number" className={inputClass} {...register("discount", { required: true })} />
                    </div>
                </div>

                {/* row-2 */}

                <Title title="Vehicle Information"></Title>
                <div className="space-y-4 border-gray-200 border-2 p-5 rounded-md">
                    <div className="space-y-2">
                        <label htmlFor="vtype">Vehicle Type</label><br />

                        <select {...register("vehicleType", { required: true })} className={inputClass}>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                        </select>
                    </div>

                    <div className="space-y-2 text-black">
                        <label htmlFor="vehicle">Vehicle</label><br />
                        <select {...register("vehicle", { required: true })} className={inputClass}>
                            {
                                vehicles.map(vehicle => <option name="vehicleOption" key={vehicle.id} value={vehicle.model}>{`${vehicle.make} ${vehicle.model} ${vehicle.year}`}</option>)
                            }
                        </select>
                    </div>
                </div>
            </div>

            {/* col 2 */}

            <div>
                <Title title="Customer Information"></Title>
                <div className="space-y-4 border-gray-200 border-2 p-5 rounded-md">
                    <div className="space-y-2">
                        <label htmlFor="firstName">First Name</label><br />
                        <input {...register("firstName", { required: true })} className={inputClass}></input>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lastName">Last Name</label><br />
                        <input {...register("lastName", { required: true })} className={inputClass}></input>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email">Email</label><br />
                        <input {...register("email", { required: true })} className={inputClass}></input>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone">Phone</label><br />
                        <input {...register("phone", { required: true })} className={inputClass}></input>
                    </div>
                </div>

                <Title title="Customer Information"></Title>
                <div className="space-y-4 border-gray-200 border-2 p-5 rounded-md">

                    <div className="flex justify-between">
                        <div className="space-x-5">
                            <input type="checkbox" name="collisonDmg" id="collisonDmg" {...register("collisonDmgChck")} />
                            <label htmlFor="collisonDmg">Collision Damage Waiver</label>
                        </div>
                        <p>$ <span>9.00</span></p>
                    </div>

                    <div className="flex justify-between">
                        <div className="space-x-5">
                            <input type="checkbox" name="liability" id="liability" {...register("liabilityChck")} />
                            <label htmlFor="liability">Liability Insurance</label>
                        </div>

                        <p>$ <span>15.00</span></p>
                    </div>

                    <div className="flex justify-between">
                        <div className="space-x-5">
                            <input type="checkbox" name="rental" id="rental" {...register("rentalChck")} />
                            <label htmlFor="rental">Rental Tax</label>
                        </div>
                        <p>11.5%</p>
                    </div>
                </div>

                <button className="bg-blue-700 w-full my-5 p-4 text-white font-bold rounded-md">Submit</button>
            </div>

            {/* col3 */}
            <div className="md:col-span-2 lg:col-span-1">
                <Title title="Charges Summary"></Title>
                <div className="space-y-4 border-blue-700 border-2 p-5 rounded-md bg-blue-200">
                    <Table inputData={inputData}></Table>
                </div>
            </div>

        </form>
    );
};

export default Form;