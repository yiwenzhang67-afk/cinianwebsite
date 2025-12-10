import React from 'react';

export interface Guest {
  name: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}