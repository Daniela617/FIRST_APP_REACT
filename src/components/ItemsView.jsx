import { RowItem } from "./RowItem"

export const ItemsView = ({title,items}) => {
    return (
        <>
                        <h4>{title}</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            
                                {items.map(({id,product, price, quantity}) =>(
                                    <RowItem key={id} product={product} price={price} quantity={quantity}/>
                                ))}
                                 
                            </tbody>
                        </table>
        </>
    )
}