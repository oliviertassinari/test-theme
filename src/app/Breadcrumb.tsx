import useTheme from './useTheme';

export default function Breadcrumb() {
  const theme = useTheme();
  console.log('Breadcrumb', theme);
  return (
    <div style={{ margin: theme.spacing(2) }}>
      {'Breadcrumb 1 > Breadcrumb 2'}
    </div>
  )
}