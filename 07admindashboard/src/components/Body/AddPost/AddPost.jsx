import { useMyContext } from "@/Contexts/MyContext"
import Button from "@/components/Button/Button"
import { useState } from "react"
import AllPost from "./AllPost/AllPost"

function AddPost() {
  const { post } = useMyContext()
  const [title, setTitle] = useState('')
  const [paragraph, setParagraph] = useState('')
  const handlePostSubmit = (e) => {
    e.preventDefault()
    post(title, paragraph)
  }

  return (
    <div className="flex w-full gap-3 ">
      {/* Add Post */}
      <div className="flex flex-col w-1/3 gap-4 bg-slate-100 p-4 rounded">
        <h4>Create Post</h4>
        <form onSubmit={handlePostSubmit} className="">
          <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text" id="title" name="title" className="w-full bg-orange rounded border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-orange-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <label htmlFor="paragraph" className="leading-7 text-sm text-gray-600">Paragraph</label>
          <textarea
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            type="text" id="paragraph" name="paragraph" className="w-full bg-orange rounded border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-orange-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <Button>Post</Button>
        </form>
      </div>
      {/* Table */}
      <div className="w-2/3 bg-slate-200 p-4 rounded">
        <AllPost handlePostSubmit={handlePostSubmit} />
      </div>
    </div>
  )
}
export default AddPost