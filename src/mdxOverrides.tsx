import { Components, MergeComponents } from "@mdx-js/react/lib";
import { StyledTitle } from "./components/StyledTitle";
import { Typography } from "@mui/joy";

type TComponents = MergeComponents | Components | null | undefined;

export const components: TComponents = {
  h1: ({ children }) => (
    <StyledTitle
      id={children?.toString()}
      level="h1"
      sx={(theme) => ({ margin: `${theme.spacing(1.2)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  h2: ({ children }) => (
    <StyledTitle
      id={children?.toString()}
      level="h2"
      sx={(theme) => ({ margin: `${theme.spacing(1.1)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  h3: ({ children }) => (
    <StyledTitle
      level="h3"
      id={children?.toString()}
      sx={(theme) => ({ margin: `${theme.spacing(1)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  h4: ({ children }) => (
    <StyledTitle
      level="h4"
      id={children?.toString()}
      sx={(theme) => ({ margin: `${theme.spacing(1)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  h5: ({ children }) => (
    <StyledTitle
      level="h5"
      id={children?.toString()}
      sx={(theme) => ({ margin: `${theme.spacing(0.9)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  h6: ({ children }) => (
    <StyledTitle
      id={children?.toString()}
      level="h6"
      sx={(theme) => ({ margin: `${theme.spacing(0.8)} 0` })}
    >
      {children}
    </StyledTitle>
  ),
  p: ({ children }) => <Typography>{children}</Typography>,
  code: ({ className, children }) => {
    if (!className)
      return (
        <Typography
          component="code"
          sx={(theme) => ({
            background: theme.vars.palette.primary.inlineCode,
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
          })}
        >
          {children}
        </Typography>
      );
    return <code className={className}>{children}</code>;
  },
};
