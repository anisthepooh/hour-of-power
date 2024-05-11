import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SettingsFormProps {
  setTotalRounds: (totalRounds: number) => void;
  setOpenSettingsDialog: (openSettingsDialog: boolean) => void
}

const SettingsForm: React.FC<SettingsFormProps> = ({ setTotalRounds, setOpenSettingsDialog }) => {
  const [value, setValue] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalRounds(value);
    setOpenSettingsDialog(false)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>Antal runder:</Label>
      <Input type="number" onChange={handleChange} value={value.toString()} className='mb-2 mt-1' />
      <Button type="submit" size="lg" className='w-full' disabled={value < 1}>Start Spil</Button>
    </form>
  );
};

export default SettingsForm;
