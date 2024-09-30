import useTheme from './useTheme';

export default function Breadcrumb() {
  const theme = useTheme();
  console.log('Breadcrumb', theme);
  return (
    <div style={{ margin: theme.spacing(2) }}>
      {'home > settings'}
    </div>
  )
}