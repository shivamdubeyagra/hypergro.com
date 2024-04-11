import { useContext } from "react"
import { MyContext } from "../Contex/DataContex"
import Card from "../Components/Card"
import { Post } from "../Contex/DataContex"
import { Link } from "react-router-dom"
const DataPage = () => {
    const ContextValue = useContext(MyContext)
    if(!ContextValue){
        return null
    }
    const {posts} = ContextValue;     
  return (
    <div className="lg:grid grid-cols-4 gap-10 md:w-[90%] sm:w-[97%] m-auto my-10 sm:grid grid-rows-1">
        {
            posts.length > 0 && posts.map((item:Post)=>{
                return <Link to={`/${item.postId}`}><Card key={item.postId} item={item} /></Link>
            })
        }
    </div>
  )
}

export default DataPage
