export const tokens = {
  colors: {
    bgPrimary: "var(--color-bg-primary)",
    bgSecondary: "var(--color-bg-secondary)",
    surface: "var(--color-surface)",

    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",

    primary: "var(--color-primary)",

    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",

    border: "var(--color-border)",
  },

  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
  },

  shadow: {
    card: "var(--shadow-card)",
  },

  transition: {
    default: "var(--transition-default)",
  },
} as const;