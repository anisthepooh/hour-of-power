import React, { useState  } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Slider } from '@/components/ui/slider';

interface SettingsFormProps {
  setTotalRounds: (totalRounds: number) => void;
  setOpenSettingsDialog: (openSettingsDialog: boolean) => void;
  timer: number;
  setTimer: (timer: number) => void; 
}

type Inputs = {
  rounds: number
  time: number
}


const SettingsForm: React.FC<SettingsFormProps> = ({ 
  setTotalRounds, 
  setOpenSettingsDialog,
  setTimer,
}) => {
  const { register, handleSubmit, control } = useForm<Inputs>() 
  const [value, setValue] = useState<number>(30)

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const totalRounds = data.rounds
    const totalTime = data.time
    
    setTotalRounds(totalRounds);
    if (Array.isArray(totalTime)) {
      setTimer(totalTime[0]);
    
    }
    setOpenSettingsDialog(false);
  }  
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)} 
      className='flex flex-col'
    >
      <Label className='text-left'>Antal runder:</Label>
      <Input 
        type="number" 
        className='mb-2 mt-1' 
        pattern="[0-9]*" 
        inputMode="numeric" 
        defaultValue={30} 
        {...register("rounds")}
      />
      
      <span className='flex justify-between mt-4 mb-2'>
        <Label>Sekunder pr. runde</Label>
        <Label>{`${value} sek.`}</Label>
      </span>
      <Controller
        control={control}
        name="time"
        defaultValue={30}
        render={({ field: { value, onChange } }) => (
          <Slider 
            min={10}
            max={60}
            step={1}
            defaultValue={[value]}
            onValueChange={(value) => {
              onChange(value) 
              setValue(value[0])
            }}
          />
        )}
      /> 
      <Button 
        type="submit" 
        size="lg" 
        className='w-full !text-base mt-8' 
        disabled={}
      >
          Start Spil
      </Button> 
    </form>
  );
};

export default SettingsForm;
