import { getInvoice } from "../services/getInvoice"


export const InvoiceApp = () => {
    const {id,name,client,company,items} = getInvoice();
    const {country, city, street,number}=client.address;
    return (

        <>
         <h1>Factura</h1>
         <ul>
            <li>Id:{id} </li>
            <li>Name: {name} </li>
         </ul>

         <h1>Cliente</h1>
         <ul>
            <li>Name Client:{client.name} </li>
            <li>Lastname: {client.lastname} </li>
            <li>Country: {country} </li>
            <li>City: {city} </li>
            <li>Street: {street} </li>
            <li>Number: {number} </li>


         </ul>
        </>
    )
}