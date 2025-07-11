import { css, CSSProp, DefaultTheme } from "styled-components";

export const DisplayNoneForPhones = css`
  @media screen and (max-device-width: 1024px) {
    display: none;
  }
`;

export const DisplayNoneForLaptops = css`
  @media screen and (min-device-width: 1024px) {
    display: none;
  }
`;

export const ApplyForPhones = (rules: string | CSSProp<any>) => css`
  @media screen and (max-device-width: 1024px) {
    ${rules}
  }
`;

export const ApplyForSmallPhones = (rules: string | CSSProp<any>) => css`
  @media screen and (max-device-width: 375px) {
    ${rules}
  }
`;

export const ApplyForLaptops = (rules: string | CSSProp<any>) => css`
  @media screen and (min-device-width: 1024px) {
    ${rules}
  }
`;

export const ApplyGap = (gap = undefined, flexDirection = "column") => {
  if (!gap) return "";
  if (flexDirection === "row")
    return `
      > :not(:last-child) {
        margin-right: ${gap};
      }
    `;
  return `
    > :not(:last-child) {
      margin-bottom: ${gap};
    }
  `;
};

export const OverflowWrapWithWordBreak = css`
  overflow-wrap: anywhere;
  word-break: break-word;
`;

export const HideScrollbar = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const spacingUnit = 8;
const spacingUnitFive = 5;

const theme: DefaultTheme = {
  fontFamily: "Inter",
  colors: {
    //Error
    R1000: "#583536",
    R800: "#CC4C4E",
    R600: "#F47779",
    R400: "#FE9395",
    R200: "#FCC0C2",
    R100: "#FFF5F5",

    //pharmeasy green
    G1000: "#0A534F",
    G800: "#0E746E",
    G600: "#10847E",
    G400: "#15ACA5",
    G200: "#83C9C6",
    G100: "#CEEAE8",

    //neutral color
    N1000: "#30363C",
    N800: "#30363C",
    N600: "#4F585E",
    N400: "#6E787E",
    N200: "#8897A2",
    N100: "#D7DFE5",
    N80: "#B4C0D3",
    N70: "#D4DBE7",
    N60: "#DCE4F1",
    N40: "#E6EBF4",
    N20: "#EDF2F9",
    N10: "#F5F8FC",
    N0: "#FFFFFF",

    //success
    M1000: "#38544A",
    M800: "#45A081",
    M600: "#62BF9F",
    M400: "#81DCBA",
    M200: "#BFEDDD",
    M100: "#F2FFF8",

    //warning
    O1000: "#784C2A",
    O800: "#CF7530",
    O600: "#FF9341",
    O400: "#FFAE71",
    O200: "#FFC9A0",
    O100: "#FFF2E8",

    //accent color
    Y1000: "#776133",
    Y800: "#C88801",
    Y600: "#F5B326",
    Y400: "#EFD06C",
    Y200: "#F6E4AB",
    Y100: "#FFF8E3",

    //diagnostic theme color
    B1000: "#2F446B",
    B800: "#3661B0",
    B600: "#3B7AEF",
    B400: "#7EA7F2",
    B200: "#B5CDF7",
    B100: "#EBF2FF",

    //ILLUSTRATION
    T1000: "#187484",
    T800: "#1FA4BB",
    T600: "#3DCDE6",
    T400: "#70DDF3",
    T200: "#A6EFFC",
    T100: "#CEF8FF",

    //SECONDARY
    P1000: "#7E2D41",
    P800: "#E15F7F",
    P600: "#F1809B",
    P400: "#FFBACA",
    P200: "#FFD7E1",
    P100: "#FFE9EE",

    C600: "#3E415B",

    //PHARMEASY PLUS THEME COLOR
    V1000: "#3E2E6B",
    V800: "#6E53BA",
    V600: "#8678DE",
    V400: "#AAA1E8",
    V200: "#CFC9F2",
    V100: "#F1EEFF",

    //Tertiary color
    E800: "#AACFE3",
    E600: "#C2DEEE",
    E400: "#E2EFF7",
    E200: "#F1FAFE",
    primary1: "#10847E",
    primary2: "#62BF9F",
    primary3: "#3BB896",
    primary4: "#F2FFF8",
    primary5: "#009688",
    primary6: "#68CCA7",
    border: "#DFE3E6",
    lightBlue: "#eef4ff",
    lightBlue2: "#C8DBFF",
    error1: "#f05965",
    error2: "#f76b6d",
    error3: "#ffefef",
    discount: "#F98B8D",
    black: "#000",
    black2: "#40464D",
    black3: "#30363C",
    white: "#fff",
    disabled: "#fafafa",
    grey: "#6B7280",
    grey1: "#8897A2",
    grey2: "#DCE4F1",
    grey3: "#F4F7FB",
    grey4: "#DFE3E6",
    grey5: "#3e415b",
    grey6: "#4F585E",
    grey7: " #e6ebf4",
    grey8: "#40464D",
    grey9: "#3B4252",
    grey10: "#909090",
    grey11: "#51585E",
    grey12: "#edf2f9",
    grey13: "#d7dfe5",
    grey14: "#6E787E",
    grey15: "#D7E1F1",
    warning: "#fff8da",
    warning1: "#fff1e8",
    warning2: "#E47723",
    text1: "#4f585e",
    text2: "#3B4252",
    backDrop: "rgba(0, 0, 0, 0.1)",
    backDrop2: "rgba(0, 0, 0, 0.6)",
    stripBg: "#F3F7FF",
    coachmark: "#C4C4C4",
    border2: "#d8d8d8",
    lightYellow: "#fff9e3",
    lightGreen: "#EBF7F4",
    textBlack: "#272727",
    darkBlue: "#2B5FBE",
    darkBlue2: "#3661B0",
    blue1: "#3B7AEF",
    lightGreen2: "#0f847e",
    lightGreen3: "#bfeddd",
    border3: "#B4D9EA",
    blueLighter: "#f9faff",
    darkGreen: "#0e746e",
    cyanBlue: "#3661b0",
    darkgrayish: "#30363c",
    gray13: "#6E787E",
    red1: "#CC4C4E",
    darkBrown: "#583536",
    pink: "#F1D7D7",
    lighterYellow: "#FFD773",
    lightGreen4: "#b1ddce",
    lightGreen5: "#71d1ad",
    lightBlue3: "#c5d8f9",

    blue3: "#194599",
    blue4: "#0B2658",
    gray14: "#f5f8fc",
  },
  radius0: "4px",
  radius1: "6px",
  radius2: "10px",
  radius3: "20px",
  radius8p: "8px",
  radius12p: "12px",
  radius16p: "16px",
  spacing: {
    px: "1px",
    x0p25: `${spacingUnit / 4}px`, // 2px
    x0p5: `${spacingUnit / 2}px`, // 4px
    x1: `${spacingUnit}px`, // 8px
    x1p25: `${spacingUnit * 1.25}px`, //10px
    x1p5: `${spacingUnit * 1.5}px`, // 12px
    x1p75: `${spacingUnit * 1.75}px`, // 14px
    x1p875: `${spacingUnit * 1.875}px`, // 15px
    x2: `${spacingUnit * 2}px`, // 16px
    x2p5: `${spacingUnit * 2.5}px`, // 20px
    x2p25: `${spacingUnit * 2.25}px`, // 18px
    x2p75: `${spacingUnit * 2.75}px`, // 22px
    x3: `${spacingUnit * 3}px`, //24px
    x3p5: `${spacingUnit * 3.5}px`, // 28px
    x3p75: `${spacingUnit * 3.75}px`, // 30px
    x4: `${spacingUnit * 4}px`, // 32px
    x4p5: `${spacingUnit * 4.5}px`, // 36px
    x5: `${spacingUnit * 5}px`, // 40px
    x6: `${spacingUnit * 6}px`, // 48px
    x7: `${spacingUnit * 7}px`, // 56px
    x7p5: `${spacingUnit * 7.5}px`, // 60px
    x8: `${spacingUnit * 8}px`, // 64px
    x8p5: `${spacingUnit * 8.5}px`, // 68px
    x9: `${spacingUnit * 9}px`, // 72px
    x10: `${spacingUnit * 10}px`, // 80px
    x20: `${spacingUnit * 20}px`, // 160px
  },
  spacing5: {
    px: "1px",
    x1: `${spacingUnitFive}px`, //5px
    x2: `${spacingUnitFive * 2}px`, //10px
    x3: `${spacingUnitFive * 3}px`, //15px
    x4: `${spacingUnitFive * 4}px`, //20px
    x5: `${spacingUnitFive * 5}px`, //25px
    x6: `${spacingUnitFive * 6}px`, //30px
    x7: `${spacingUnitFive * 7}px`, //35px
    x8: `${spacingUnitFive * 8}px`, //40px
    x9: `${spacingUnitFive * 9}px`, //45px
    x10: `${spacingUnitFive * 10}px`, //50px
  },
  spacing8: {
    px: "4px",
    x1: "8px",
    x2: "12px",
    x3: "16px",
    x4: "20px",
    x5: "24px",
    x6: "32px",
    x7: "36px",
    x8: "40px",
    x9: "48px",
    x10: "60px",
  },
  fontSize: {
    extraSmall: "0.5rem", // 8px
    mediumSmall: "0.625rem", // 10px
    small: "0.75rem", // 12px
    medium: "0.875rem", // 14px
    regular: "1rem", // 16px
    mediumLarge: "1.125rem", // 18px
    large: "1.25rem", // 20px
    extraLarge: "1.5rem", // 24px
    header: "1.625rem", // 26px
    headerMedium: "1.75rem", // 28px
    headerRegular: "2rem", // 32px
    headerLarge: "2.625rem", // 42px
    x1p375: "1.375rem", // 22px
    point6875: "0.6875rem", // 11px
  },
  fontSizeV2: {
    fontSize0: "10px",
    fontSize1: "11px",
    fontSize2: "12px",
    fontSize3: "13px",
    fontSize4: "14px",
    fontSize5: "15px",
    fontSize6: "16px",
    fontSize7: "18px",
    fontSize8: "22px",
    fontSize9: "26px",
    fontSize10: "32px",
    fontSize11: "40px",
    fontSize12: "48px",
    fontSize13: "56px",
    fontSize14: "64px",
  },
  fontWeight: {
    light: 200,
    lightMedium: 300,
    regular: 400,
    headerBold: 600,
    bold: "bold",
    normal: "normal",
    bolder: 700,
    dense: 500,
    medium: 500,
  },
  lineHeight: {
    lineHeight0: "16px",
    lineHeight0p5: "18px",
    lineHeight1: "20px",
    lineHeight2: "24px",
    lineHeight3: "28px",
    lineHeight4: "32px",
    lineHeight5: "40px",
    lineHeight6: "48px",
    lineHeight7: "56px",
    lineHeight8: "64px",
  },
  borderRadiusV2: {
    borderRadiusExtraSmall: "2px",
    borderRadiusSmall: "4px",
    borderRadiusMedium: "8px",
    borderRadiusLarge: "12px",
    borderRadiusExtraLarge: "16px",
    borderRadiusRound: "100px",
    borderRadiusXXL: "24px",
  },
  zIndex: {
    toast: 99,
  },
};

const { colors, spacing, spacing5, fontSize } = theme;
export { colors, spacing, spacing5, fontSize };

export default theme;
