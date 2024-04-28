import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { CgAdd, CgPen, CgTrash } from "react-icons/cg"
import Button from "@/components/Button/Button"
import { useMyContext } from "@/Contexts/MyContext"

function MapPost({ post }) {
  const { postUpdate } = useMyContext()
  const { id, title, paragraph, email } = post
  const sliceParagraph = paragraph.slice(0, 20) + "..."
  const handleUpdatePost = () => {
    postUpdate(id, title, paragraph)
  }
  return (
    <TableRow className=''>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{sliceParagraph}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <div className="flex gap-2 items-center justify-center ">

          <Dialog>
            <DialogTrigger>
              <CgPen className="text-xl text-orange-600" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Post</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    value={title}
                    id="title"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="textarea" className="text-right">
                    Paragraph
                  </Label>
                  <textarea
                    id="textarea"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <CgTrash className="text-xl text-orange-600" />
        </div>
      </TableCell>
    </TableRow>
  )
}
export default MapPost