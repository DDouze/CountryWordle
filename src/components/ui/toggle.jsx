import { cn } from '@/lib/utils';

export function Toggle({ children, active, ...props }) {
  return (
    <div
      className={cn(
        'inline-flex cursor-pointer font-bold items-center h-11 rounded-md px-8 justify-center whitespace-nowrap text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors ',
        active
          ? 'bg-brand-yellow text-brand-darkgreen hover:bg-brand-yellow/90'
          : 'bg-slate-100 text-slate-900 hover:bg-slate-100/80 '
      )}
      {...props}
    >
      {children}
    </div>
  );
}
