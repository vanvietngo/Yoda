export interface Theme {
  name: string;
  properties: any;
}

export const dark: Theme = {
  name: "dark",
  properties: {
    "--background-default": "#0E1117",
    "--comp-background-default": "#1A2430",
    "--comp-foreground-default": "#E8ECED",
    "--comp-background-secondary": "#E0E3E6",
    "--comp-foreground-secondary": "#141D27",
    "--comp-foreground-link": "#6F9ECD",
    "--button-background-secondary": "#2B3847",
    "--button-background-primary": "#E0E3E6",
    "--button-background-danger": "#A50F22",
    "--button-foreground-secondary": "#e8eced",
    "--faded-color": "#818899",
  },
};

export const light: Theme = {
  name: "light",
  properties: {},
};
