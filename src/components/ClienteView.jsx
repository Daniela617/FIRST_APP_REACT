export const ClientView = ({title,client}) => {
    const {name:nameClient,lastname,address}=client;
    const {country, city, street,number}=address;
    return (
        <>
        <h3>{title}</h3>
            <ul className="list-group">
             <li className="list-group-item active">{nameClient} {lastname}  </li>
             <li className="list-group-item">{city}, {country} </li>
             <li className="list-group-item">{street} </li>
             <li className="list-group-item">{number} </li>
            </ul>
        </>
    )
}