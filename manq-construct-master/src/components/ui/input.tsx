import * as React from 'react';
import { cn } from '@/lib/utils';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { LucideIcon, LucideProps } from 'lucide-react';
import dynamic from 'next/dynamic';

type IconProps = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]) as LucideIcon;
  return <LucideIcon {...props} />;
};

type InputVariant = 'default' | 'outline' | 'underline';

type InputBaseProps = React.ComponentProps<'input'> & {
  variant?: InputVariant;
};

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, type, variant = 'default', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          variant === 'default' &&
            'border border-input focus-visible:ring-1 focus-visible:ring-ring',
          variant === 'outline' && 'border-2 border-input focus-visible:border-ring',
          variant === 'underline' && 'border-b border-input focus-visible:border-ring',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
InputBase.displayName = 'InputBase';

type InputProps = InputBaseProps & {
  icon?: keyof typeof dynamicIconImports;
  iconPosition?: 'left' | 'right';
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition = 'left', variant = 'default', ...props }, ref) => {
    return (
      <div className='relative'>
        {icon && iconPosition === 'left' && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <Icon name={icon} className='h-5 w-5 text-gray-400' />
          </div>
        )}
        <InputBase
          type={type}
          variant={variant}
          className={cn(
            icon && iconPosition === 'left' && 'pl-10',
            icon && iconPosition === 'right' && 'pr-10',
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            <Icon name={icon} className='h-5 w-5 text-gray-400' />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
