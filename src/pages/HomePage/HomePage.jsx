import React from 'react';
import PlusButton from '../../components/PlusButton/PlusButton';

export default function HomePage() {
  const a = 'enabled';
  const b = 'disabled';
  return (
    <div>
      HomePage <PlusButton buttonState={b} />
    </div>
  );
}
