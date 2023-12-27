import { Theme } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
font-family: ${family || "Roboto"};
font-weight: ${weight || 400};
color: ${color || Theme.colors.font.pramiary.dark};
line-height: ${lineHeight || 1.2};
font-size: clamp(${Fmin}px, calc((100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`;

//font-size: clamp(${Fmin}, calc((100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin} + ${Fmin}px)), ${Fmax});

// Vmax(1440) - Наибольшее разрешение экрана (в данном случае для десктопа)
// Vmin(360) - Наименьшее разрешение экрана (в данном случае для мобилок)
// Fmax(60) - Наибольший размер шрифта (в данном случае для десктопа)
// Fmin(34) - Наименьший размер шрифта (в данном случае для мобилок)
