import { useRouter } from 'next/router'
import { useState } from 'react';

function developer (){
    const [developer, setdeveloper] = useState();
    const router = useRouter();
    
    const id = parseInt(router.query.developer)

    console.log(id)

    const details = [
        { id : 1, name: 'Yash', role: 'Senior Developer'},
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        ]
let Developer;
    details.forEach(dev=>{

        if(dev.id === id){
            Developer = dev
        } 
    })

    console.log(Developer)
    

    if(!Developer){
        return <h1>Developer doesn't exist</h1>;
    }
    


    return <div>
    <h1>{Developer.name}</h1>
    <p>{Developer.role}</p>
</div>
}

export default developer;