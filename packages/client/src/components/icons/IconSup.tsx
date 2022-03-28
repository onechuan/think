import { Icon } from '@douyinfe/semi-ui';

export const IconSup: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <Icon
      style={style}
      svg={
        <svg width="16" height="16" viewBox="0 0 256 256" role="presentation">
          <g stroke="currentColor" fill="none" fillRule="evenodd">
            <path strokeWidth="20" strokeLinecap="round" d="m40 50 114 168M154 50 40 218"></path>
            <path
              d="M231.92 103.48c2.72 0 4.08-1.48 4.08-4.44 0-2.88-1.36-4.32-4.08-4.32H198.8c6.48-5.52 12.28-11.24 17.4-17.16 2.16-2.48 4.28-5.16 6.36-8.04 2.08-2.88 3.94-5.82 5.58-8.82 1.64-3 2.96-6.04 3.96-9.12 1-3.08 1.5-6.14 1.5-9.18 0-3.36-.48-6.42-1.44-9.18s-2.38-5.12-4.26-7.08-4.2-3.48-6.96-4.56c-2.76-1.08-5.9-1.62-9.42-1.62-7.92 0-13.8 2.26-17.64 6.78-3.84 4.52-5.76 10.66-5.76 18.42 0 2.24.32 3.74.96 4.5.64.76 1.96 1.14 3.96 1.14 1.76 0 2.98-.44 3.66-1.32.68-.88 1.02-2.32 1.02-4.32 0-4.8 1.04-8.74 3.12-11.82s5.4-4.62 9.96-4.62c4 0 7.16 1.32 9.48 3.96 2.32 2.64 3.48 6.12 3.48 10.44 0 3.2-.64 6.42-1.92 9.66-1.28 3.24-2.94 6.4-4.98 9.48a84.099 84.099 0 0 1-6.84 8.94c-2.52 2.88-5.04 5.6-7.56 8.16-2.52 2.56-4.92 4.94-7.2 7.14-2.28 2.2-4.18 4.1-5.7 5.7-.64 1.04-.96 2.04-.96 3-.56 1.04-.86 2.06-.9 3.06-.04 1 .1 1.88.42 2.64.32.76.8 1.38 1.44 1.86.64.48 1.36.72 2.16.72h40.2Z"
              strokeWidth="5"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </g>
        </svg>
      }
    />
  );
};
