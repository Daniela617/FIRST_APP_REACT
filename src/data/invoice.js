export const invoice = 
{
        id:1,
        name: 'Componentes pc',
        client:{
            name:'Pepe',
            lastname:'Lara',
            address:{
                country:'Colombia',
                city:'Popayan',
                street:'Cra 21b',
                number:12
            } 
        },
        company:{
            name:'new',
            fiscalNumber:123
        },
        items:[
            {
                id:1,
                product:'Cpu Intel',
                price:1,
                quantity:2
            },
            {
                id:2,
                product:'Mouse',
                price:145,
                quantity:12342
            },
            {
                id:3,
                product:'Monitor',
                price:100,
                quantity:200
            }
        ]
    
}