import { getInvoice } from "../services/getInvoice"
import { InvoiceView } from "./InvoiceView";
import { ClientView } from "./ClienteView";
import { CompanyView } from "./CompanyView";
export const InvoiceApp = () => {
    const {id,name,client,company,items} = getInvoice();
   
    
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
                        <h4>Productos</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            
                                {items.map(({id,product, price, quantity}) =>{ return(
                                    <tr key={id}>
                                        <td>{product}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                )})}
                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
        </>
    )
}