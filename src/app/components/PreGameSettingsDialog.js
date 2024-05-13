"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import SettingsForm from './SettingsForm'
import Rules from './Rules'



const PreGameSettingsDialog = ({
  openSettingsDialog, 
  setOpenSettingsDialog,
  setTotalRounds,
  timer,
  setTimer
}) => {
  return (
    <Dialog open={openSettingsDialog} onOpenChange={setOpenSettingsDialog}  >
      <DialogContent 
        className="max-w-[80%] rounded-2xl" 
        onInteractOutside={(e) => {
          e.preventDefault();
        }}  
      >
        <DialogHeader>
          <DialogTitle>Klar til at tage en omgang Hour of Power?</DialogTitle>
          <DialogDescription>
            <Rules />
          </DialogDescription>
        </DialogHeader>
        <SettingsForm 
          setTotalRounds={setTotalRounds} 
          setOpenSettingsDialog={setOpenSettingsDialog} 
          timer={timer}
          setTimer={setTimer}
          />
      </DialogContent>
    </Dialog>

  )
}

export default PreGameSettingsDialog