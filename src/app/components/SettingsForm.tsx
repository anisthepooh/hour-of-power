import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SettingsFormProps {
  setTotalRounds: (totalRounds: number) => void;
  setOpenSettingsDialog: (openSettingsDialog: boolean) => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ setTotalRounds, setOpenSettingsDialog }) => {
  const [value, setValue] = useState<string>(''); // Change type to string

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalRounds = parseInt(value); // Parse string value to number
    if (!isNaN(totalRounds)) { // Check if parsing was successful
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
        value={value} // Add value prop
        onChange={handleChange} 
        className='mb-2 mt-1' 
        pattern="[0-9]*" 
        inputMode="numeric" // Correct casing
      />
      <Button type="submit" size="lg" className='w-full !text-baase mt-4' disabled={!value.trim()}>Start Spil</Button> {/* Use !value.trim() to disable button if value is empty */}
    </form>
  );
};

export default SettingsForm;
