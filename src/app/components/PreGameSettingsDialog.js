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



const PreGameSettingsDialog = ({
  openSettingsDialog, 
  setOpenSettingsDialog,
  setTotalRounds,
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
          <DialogTitle>Klar til at tage en om Hour of Power?</DialogTitle>
          <DialogDescription>
            Reglerne er simple: 
            Hvert minut ringer klokken, hvorefter i skåler i et shot øl. Når man ikke at drikke indenfor minuttet, får man et staf shot.
            Indstil hvor mange runder du gerne vil spille for at starte. 
          </DialogDescription>
        </DialogHeader>
        <SettingsForm 
          setTotalRounds={setTotalRounds} 
          setOpenSettingsDialog={setOpenSettingsDialog} 
          />
      </DialogContent>
    </Dialog>

  )
}

export default PreGameSettingsDialog