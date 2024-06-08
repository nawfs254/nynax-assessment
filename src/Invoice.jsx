import { useLoaderData } from "react-router-dom";

const Invoice = (inputData) => {
    const vehicles = useLoaderData()
    console.log(vehicles.data)
    console.log(inputData)
    return (
        <div>
            invoice
        </div>
    );
};

export default Invoice;