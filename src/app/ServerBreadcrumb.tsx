import useTheme from './useTheme';

export default function ServerBreadcrumb() {
  const theme = useTheme('ServerBreadcrumb');
  console.log('ServerBreadcrumb', theme);
  return (
    <div>
      {'home > settings'}
    </div>
  )
}