import { Components, MergeComponents } from "@mdx-js/react/lib";
import { StyledTitle } from "./components/StyledTitle";
import { Box, Typography } from "@mui/joy";
import { ReactNode } from "react";

type TComponents = MergeComponents | Components | null | undefined;

type HeadingProps = {
  children?: ReactNode;
  id?: string;
};

export const components: TComponents = {
  raw: () => {
    return <div>raw</div>;
  },
  h1: (props: HeadingProps) => (
    <StyledTitle
      level="h1"
      sx={(theme) => ({ margin: `${theme.spacing(1.2)} 0` })}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <StyledTitle
      level="h2"
      {...props}
      sx={(theme) => ({ margin: `${theme.spacing(1.1)} 0` })}
    />
  ),
  h3: (props: HeadingProps) => (
    <StyledTitle
      level="h3"
      {...props}
      sx={(theme) => ({ margin: `${theme.spacing(1)} 0` })}
    />
  ),
  h4: (props: HeadingProps) => (
    <StyledTitle
      level="h4"
      {...props}
      sx={(theme) => ({ margin: `${theme.spacing(1)} 0` })}
    />
  ),
  h5: (props: HeadingProps) => (
    <StyledTitle
      level="h5"
      {...props}
      sx={(theme) => ({ margin: `${theme.spacing(0.9)} 0` })}
    />
  ),
  h6: (props: HeadingProps) => (
    <StyledTitle
      level="h6"
      {...props}
      sx={(theme) => ({ margin: `${theme.spacing(0.8)} 0` })}
    />
  ),
  blockquote: (props) => (
    <Box
      component="blockquote"
      sx={(theme) => ({
        display: "block",
        margin: 0,
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        borderLeft: `5px solid ${theme.vars.palette.primary.blockquoteBorderColor}`,
      })}
    >
      <Typography
        component="p"
        sx={{
          marginLeft: "10px",
        }}
      >
        {props.children}
      </Typography>
    </Box>
  ),
  p: ({ children }) => (
    <Typography
      sx={(theme) => ({
        marginTop: theme.spacing(1.1),
        marginBottom: theme.spacing(1.1),
      })}
    >
      {children}
    </Typography>
  ),
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
