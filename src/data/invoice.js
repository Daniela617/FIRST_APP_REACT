export const invoice = 
{
    id:1,
    name: 'Componentes pc',
    client:{
        name:'pepe',
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
                product:'Cpu Intel',
                price:1,
                quantity:2
            },
            {
                product:'Mouse',
                price:145,
                quantity:12342
            },
            {
                product:'Monitor',
                price:100,
                quantity:200
            }
        ]
    
}