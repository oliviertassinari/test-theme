'use client';
import useTheme from './useTheme';

export default function ClientButton(props: any) {
  const theme = useTheme('ClientButton');
  console.log('ClientButton', theme);

  return (
    <button {...props} onClick={() => {
      console.log('client')
    }} />
  )
}