import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@nextui-org/react';

interface SettingsFormProps {
  setTotalRounds: (totalRounds: number) => void;
  setOpenSettingsDialog: (openSettingsDialog: boolean) => void;
  timer: number
  setTimer: (timer: number) => void
}

const SettingsForm: React.FC<SettingsFormProps> = ({ 
  setTotalRounds, 
  setOpenSettingsDialog,
  timer,
  setTimer,
}) => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalRounds = parseInt(value); 
    if (!isNaN(totalRounds)) { 
      setTotalRounds(totalRounds);
      setOpenSettingsDialog(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Label>Antal runder:</Label>
      <Input 
        type="number" 
        value={value}
        onChange={handleChange} 
        className='mb-2 mt-1' 
        pattern="[0-9]*" 
        inputMode="numeric" 
      />
      <span className='flex justify-between mt-4'>
        <Label>Sekunder pr. runde</Label>
        <Label>{`${timer} sek.`}</Label>
      </span>
      <Slider
        maxValue={60}
        minValue={10}
        showTooltip={true}
        defaultValue={timer}
        onChange={(value) => setTimer(value) }
      />
      <Button type="submit" size="lg" className='w-full !text-baase mt-4' disabled={!value.trim()}>Start Spil</Button> {/* Use !value.trim() to disable button if value is empty */}
    </form>
  );
};

export default SettingsForm;
