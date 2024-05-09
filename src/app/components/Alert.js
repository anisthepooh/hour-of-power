import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import React, { useEffect, useState } from 'react'

const Alert = ({rounds, setIsRunning, isRunning}) => {
const [open, setOpen] = useState(false)

useEffect(() => {

  if (rounds >= 1) {
  setOpen(true)
  }

  return () => setOpen(false)
},[rounds])

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>CHEERS!!</DrawerTitle>
          <DrawerDescription>Down the drain - click the button to start the next round</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose onClick={() => setOpen(false)}>
            <Button variant="outline" onClick={() => setIsRunning(!isRunning)} >Start</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Alert