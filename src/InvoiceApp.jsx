import { getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { ItemsView } from "./components/ItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";
export const InvoiceApp = () => {
    const {total,id,name,client,company,items:itemsInitial} = getInvoice();

    const [invoiceItemsState, setInvoiceItemsState]=useState({
        product:'',
        price:'',
        quantity:'',
    });
    const {product,price,quantity} = invoiceItemsState;
    
    const [items, setItemsValue]=useState(itemsInitial);
    const [counter,setCounter]=useState(4);

    const onInputChange =({target:{name,value}})=>{
        console.log(value);
        setInvoiceItemsState({
            ...invoiceItemsState,
            [name]:value
        });
    }
   
    const onInvoiceItemChange = (event) =>  {
        event.preventDefault();
        if(product.trim().length<=1 || price.trim().length<=1 || isNaN(price.trim()) || quantity.trim().length<=1 || isNaN(quantity.trim())) return;
        setItemsValue([...items,{id:counter,product:product.trim(),price: +price.trim(),quantity: +quantity.trim()}]);
        //se limpian los campos
        setInvoiceItemsState({
            product:'',
            price:'',
            quantity:'',
        });
        setCounter(counter+1);
    }
    return (

        <>
         
        <div className="container">
            <div className="card my-3"> 
                    <div className="card-header">
                        Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Cliente" client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title= "Empresa" company={company}/>
                            </div>
                        </div>
                        <ItemsView title ="Productos" items={items}/> 
                        <TotalView total={total}/>
                       
                        <form className="w-50" onSubmit={onInvoiceItemChange}>
                            <input type="text" name="product" value={product} placeholder="Product" className="form-control m-3" onChange={onInputChange}/>
                            <input type="text" name="price" value={price} placeholder="Price" className="form-control m-3" onChange={onInputChange}/>
                            <input type="text" name="quantity" value={quantity} placeholder="Quantity" className="form-control m-3" onChange={onInputChange}/>
                            <button type="submit" className="btn btn-primary m-3"> Create Item</button>
                        </form>
                    </div>
            </div>
        </div>
        </>
    )
}