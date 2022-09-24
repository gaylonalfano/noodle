import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const valueBarStyles = cva(
  ['absolute', 'left-0', 'h-full', 'rounded-full', 'top-0'],
  {
    variants: {
      color: {
        slate: ['bg-slate-400'],
        gray: ['bg-gray-400'],
        zinc: ['bg-zinc-400'],
        neutral: ['bg-neutral-400'],
        stone: ['bg-stone-400'],
        red: ['bg-red-400'],
        orange: ['bg-orange-400'],
        amber: ['bg-amber-400'],
        yellow: ['bg-yellow-400'],
        lime: ['bg-lime-400'],
        green: ['bg-green-400'],
        emerald: ['bg-emerald-400'],
        teal: ['bg-teal-400'],
        cyan: ['bg-cyan-400'],
        sky: ['bg-sky-400'],
        blue: ['bg-blue-400'],
        indigo: ['bg-indigo-400'],
        violet: ['bg-violet-400'],
        purple: ['bg-purple-400'],
        fuchsia: ['bg-fuchsia-400'],
        pink: ['bg-pink-400'],
        rose: ['bg-rose-400'],
      },
    },
  },
);

type ProgressBarProps = VariantProps<typeof valueBarStyles> & {
  value: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({ value, color }) => {
  return (
    <div className="relative w-full h-4 rounded-full dark:bg-zinc-800 bg-zinc-100">
      <div
        className={valueBarStyles({ color })}
        style={{ width: `${value}%` }}
        role="presentation"
      />
    </div>
  );
};
