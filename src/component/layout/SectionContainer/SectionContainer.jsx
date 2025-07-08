import { Container, Stack } from "@mui/material";

export function SectionContainer({ children }) {
  return (
    <Stack>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 2, md: 6, lg: 12, xl: 8 },
        }}
      >
        {children}
      </Container>
    </Stack>
  );
}

export default SectionContainer;
