"use client"
import React, { useState } from 'react'
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
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { Button } from '@/components/ui/button'
import Stepper from '@/components/ui/Stepper'
import { Progress } from '@nextui-org/progress'
import { cn } from '@/lib/utils'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'



const PreGameSettingsDialog = ({
  openSettingsDialog, 
  setOpenSettingsDialog,
  setTotalRounds,
  timer,
  setTimer
}) => {
  const [step, setStep] = useState(1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo
          setTotalRounds={setTotalRounds}
          timer={timer}
          setTimer={setTimer}
          setOpenSettingsDialog={setOpenSettingsDialog}
        />
      default: <StepOne />
        break;
    }
  }
  return (
    <Dialog open={openSettingsDialog} onOpenChange={setOpenSettingsDialog}  >
      <DialogContent 
        className="max-w-[80%] rounded-2xl h-[64%]" 
        onInteractOutside={(e) => {
          e.preventDefault();
        }}  
      >
        <DialogHeader>
          <Progress
            value={step}
            maxValue={2}
            classNames={{
              indicator: cn(
                "bg-black",
                {"bg-green-500": step === 2 }
              ),
            }}
          />
          <DialogTitle className='!my-4'>Klar til at tage en omgang Hour of Power?</DialogTitle>
          <DialogDescription>
            { renderStep() }
            <div className='!my-2'>
            {step >= 2 && <Button variant="secondary" size="lg" className='w-full !text-base mt-4' onClick={() => setStep(step - 1)}>Tilbage </Button>}
            {step != 2 && <Button variant="default" size="lg" className='w-full !text-base mt-4' onClick={() => setStep(step + 1)}>Forsæt  </Button>}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

export default PreGameSettingsDialog