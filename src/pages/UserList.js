//"https://jsonplaceholder.typicode.com/posts"
//import { useFetch } from '@mantine/hooks';
import { useQuery } from './useQuery';

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