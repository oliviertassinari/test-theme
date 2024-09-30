'use client';
import useTheme from './useTheme';

export default function Button(props: any) {
  const theme = useTheme();
  console.log('Button', theme);

  return (
    <button {...props} style={{ margin: theme.spacing(2) }} onClick={() => {
      console.log('client')
    }} />
  )
}