import { getInvoice } from "../services/getInvoice"
import { InvoiceView } from "./InvoiceView";
import { ClientView } from "./ClienteView";
import { CompanyView } from "./CompanyView";
import { ItemsView } from "./ItemsView";
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
                        <ItemsView title ="Productos" items={items}/> 
                    </div>
            </div>
        </div>
        </>
    )
}