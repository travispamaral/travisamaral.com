import React from "react";
import { Box, BoxSection } from "./";

const generalItems = [
  "Technology",
  "Web Development",
  "Music",
  "Movies",
  "Home DIY Work",
  "Woodworking",
  "Light gaming",
  "Playing drums",
  "Beer",
  "Camping",
  "Cars",
];

const musicItems = [
  "Twenty One Pilots",
  "Blink 182",
  "Mumford and Sons",
  "Biggie",
  "John Mayer",
  "Eminem",
  "New Found Glory",
  "Taking Back Sunday",
  "Thrice",
  "Paramore",
  "Tupac",
  "so many more",
];

const movieItems = [
  "Interstellar",
  "Inception",
  "Dark Knight franchise",
  "Fast and Furious 1",
  "Blade Runner",
  "Anything dystopian future",
  "Community",
  "Scrubs",
  "How I Met Your Mother",
];

export function Interests() {
  return (
    <div className="mt-4">
      <Box title="Interests">
        <BoxSection title="General" items={generalItems} />
        <BoxSection title="Music" items={musicItems} />
        <BoxSection title={`Movies & TV`} items={movieItems} />
      </Box>
    </div>
  );
}
