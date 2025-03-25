import {
  Box,
  Button,
  Card,
  CardProps,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";

const HistorySidepanel = (props: CardProps & { onCloseClick: () => void, onSongClick: (idx: number) => void }) => {
  const { onCloseClick, onSongClick, ...rest } = props;

  return (
    <Card size="3" {...rest}>
      <Flex align="center" justify="between" mb="5">
        <Heading as="h3" size="4" trim="both">
          History
        </Heading>

        <Flex my="-1" gap="4">
          <Button
            // tabIndex={tabIndex}
            size="2"
            variant="ghost"
            onClick={onCloseClick}
          >
            Close
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" gap="4">
        {songsHistory.map((song, idx) => (
          <Flex
            align="center"
            gap="3"
            key={song.name}
            style={{ cursor: 'pointer' }}
            onClick={() => onSongClick(idx)}
          >
            <Box asChild width="48px" height="48px">
              <img
                src={song.cover}
                style={{
                  objectFit: "cover",
                  borderRadius: "var(--radius-2)",
                }}
              />
            </Box>
            <Box flexGrow="1" width="0">
              <Text as="div" size="2" truncate>
                {song.name}
              </Text>
              <Text as="div" size="1" color="gray" truncate>
                {song.artist} – {song.album}
              </Text>
            </Box>
            <Box>
              <Text as="div" size="2" color="gray">
                {song.length}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};

export default HistorySidepanel;

const songsHistory = [
  {
    name: "Sunday Rain",
    artist: "Foo Fighters",
    album: "Concrete and Gold",
    length: "6:11",
    cover:
      "https://workos.imgix.net/images/28bf3f7c-4ad7-4bd9-9064-c63d2676c8dd.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(40, 30%, 55%)",
  },
  {
    name: "Left Hand Free",
    artist: "Alt-J",
    album: "This Is All Yours",
    length: "2:54",
    cover:
      "https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(330, 70%, 64%)",
  },
  {
    name: "Last",
    artist: "Nine Inch Nails",
    album: "Broken",
    length: "4:45",
    cover:
      "https://workos.imgix.net/images/5f495e55-4bac-4573-b97f-bac55d4f3a82.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(30, 100%, 50%)",
  },
  {
    name: "13LACK 13ALLOONZ (feat. Twelve’len & GoldLink)",
    artist: "Denzel Curry",
    album: "TA13OO",
    length: "3:31",
    cover:
      "https://workos.imgix.net/images/f1b1ff42-eae9-4fcd-9c7f-c3ed92594395.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(0, 0%, 25%)",
  },
  {
    name: "Self Control",
    artist: "Frank Ocean",
    album: "Blond",
    length: "4:10",
    cover:
      "https://workos.imgix.net/images/419f09bc-99ab-4eae-8e71-d33f0577bd47.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(80, 20%, 40%)",
  },
  {
    name: "Trippy (feat. J. Cole)",
    artist: "Anderson .Paak",
    album: "Oxnard",
    length: "5:24",
    cover:
      "https://workos.imgix.net/images/daab7042-222f-433f-abcb-15811b8a43da.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(193, 15%, 45%)",
  },
  {
    name: "Nightclubbing",
    artist: "Iggy Pop",
    album: "The Idiot",
    length: "4:16",
    cover:
      "https://workos.imgix.net/images/85451af7-27bf-4bbb-88e7-088caf762ed5.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(34, 7%, 45%)",
  },
  {
    name: "Heaven Beside You",
    artist: "Alice in Chains",
    album: "Alice in Chains",
    length: "5:28",
    cover:
      "https://workos.imgix.net/images/72edfcaf-2e5b-492c-bb5b-60a031f001c9.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(289, 3%, 51%)",
  },
  {
    name: "Night After Night",
    artist: "Laura Marling",
    album: "A Creature I Don’t Know",
    length: "5:08",
    cover:
      "https://workos.imgix.net/images/0cce32ae-6890-419e-b01c-2e89d36cb883.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(40, 13%, 83%)",
  },
  {
    name: "HEAVN",
    artist: "Jamila Woods",
    album: "HEAVN",
    length: "4:23",
    cover:
      "https://workos.imgix.net/images/e865c892-5cbe-4d1f-b4eb-e2bc301087f0.png?auto=format&fit=clip&q=80&w=192",
    color: "hsl(32, 95%, 67%)",
  },
];
