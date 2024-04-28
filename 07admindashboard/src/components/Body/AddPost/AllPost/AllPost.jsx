import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import MapPost from "./MapPost"
import { useEffect, useState } from "react"
import { supabase } from "@/Contexts/MyContext"

function AllPost({ handlePostSubmit }) {
  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    // Post section
    const fetchPostAll = async () => {
      const { data, error } = await supabase.from('posts').select()

      setPostsData(data)
    }
    fetchPostAll()
  }, [handlePostSubmit])

  return (
    <div>
      <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Paragraph</TableHead>
            <TableHead >Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            postsData.map((post) => (
              <MapPost key={post.id} post={post} />
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
export default AllPost