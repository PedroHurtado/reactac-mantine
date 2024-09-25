//"https://jsonplaceholder.typicode.com/posts"
//https://axios-http.com/es/docs/interceptors
//https://www.freecodecamp.org/news/higher-order-components-in-react/
import { useQuery } from './useQuery';

const query(url, useQuery){
    return useQuery
}

export default function UserList(){
    
    
    const [data,loading] = useQuery('https://jsonplaceholder.typicode.com/todos/')
    

    if(loading){
        return <div>loaging...</div>
    }      
    return(
        <>
            {
                data.map(({id,title,completed})=>{
                    return(
                       <div key={id}>
                         <div>{id}</div>
                         <div>{title}</div>
                         <div>{completed}</div>
                       </div>     
                    )
                })
            }
        </>
    )
}