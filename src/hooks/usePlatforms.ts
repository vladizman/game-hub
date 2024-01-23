 
 import platformSelector from "../data/platformSelector"
interface Platform{
    id:number
    name:string
    slug:string
}

const usePlatforms =  () =>  ({data:platformSelector, isLoading:false, error:null})

export default usePlatforms