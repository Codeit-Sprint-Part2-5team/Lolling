import React from 'react';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import PlusButton from '../../components/PlusButton/PlusButton';

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <DeleteButton />
      <ArrowButton arrowDirection={'left'} />
      <ArrowButton arrowDirection={'right'} />
      <ToggleButton />
      <PlusButton />
    </>
  );
}
