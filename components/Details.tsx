import { Box, BoxSection } from "./";
export function Details() {
  return (
    <div className="mt-4">
      <Box title="Travis' Details">
        <BoxSection title="Status">Married</BoxSection>
        <BoxSection title="Here for">
          Networking, sharing my previous work 😉
        </BoxSection>
        <BoxSection title="Hometown">Monterey</BoxSection>
      </Box>
    </div>
  );
}
