import { ComponentProps, FC } from 'react';

import { Text } from '@/components/Typography';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { cn } from '@/lib/utils';

type UserTypesTabProps = {
  value: string;
  onChange: (value: string) => void;
  data: { value: string; label: string; disabled?: boolean }[];
  itemClassName?: string;
} & ComponentProps<'div'>;

export const RadioTabs: FC<UserTypesTabProps> = ({
  value,
  onChange,
  data,
  className = '',
  itemClassName = '',
}) => {
  return (
    <div className='w-full overflow-x-auto'>
      <RadioGroup
        defaultValue={data?.[0]?.value ?? ''}
        value={value}
        onValueChange={(val) => onChange(val)}
        className={cn(
          'flex gap-2 whitespace-nowrap rtl:flex-row-reverse',
          className
        )}
      >
        {data?.map(({ value, label, disabled }) => {
          const RadioItem = (
            <div className='rounded-e-2xl' key={value}>
              <RadioGroupItem
                value={value}
                id={value}
                disabled={disabled}
                className='w-0 h-0 opacity-0 peer'
              />
              <Label
                className={cn(
                  `block cursor-pointer rounded-full bg-primary-200 px-4 py-1.5 ${
                    disabled
                      ? 'cursor-not-allowed text-gray-400 opacity-50'
                      : ''
                  } peer-data-[state=checked]:bg-primary-700 peer-data-[state=checked]:text-white`,
                  itemClassName
                )}
                key={value}
                htmlFor={value}
              >
                <div>
                  <Text className='text-inherit'>{label}</Text>
                </div>
              </Label>
            </div>
          );

          return RadioItem;
        })}
      </RadioGroup>
    </div>
  );
};
