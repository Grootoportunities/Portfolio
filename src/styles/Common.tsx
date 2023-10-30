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
font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

// Vmax(1440) - Наибольшее разрешение экрана (в данном случае для десктопа)
// Vmin(360) - Наименьшее разрешение экрана (в данном случае для мобилок)
// Fmax(60) - Наибольший размер шрифта (в данном случае для десктопа)
// Fmin(34) - Наименьший размер шрифта (в данном случае для мобилок)
// Но нужно ли мне будет делать для мобилок, если уже при разрешении больше планшета у меня появляется горизонтальный скролл?
