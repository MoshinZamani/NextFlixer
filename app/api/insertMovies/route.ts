import prisma from "@/lib/prisma";

export async function GET() {
  const movies = [
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      videoId: "YoHD9XEInc0",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      videoId: "PLl99DlL6b4",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      videoId: "2LqzF5WauAw",
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      videoId: "UaVTIH8mujA",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      videoId: "EXeTwQWrcwY",
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other history unfold through the perspective of an Alabama man with an IQ of 75.",
      videoId: "bLvqoHBptjg",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      videoId: "s7EdQ4FqbhY",
    },
    {
      title: "Life Is Beautiful",
      description:
        "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      videoId: "8CTjcVr9Iao",
    },
    {
      title: "Spirited Away",
      description:
        "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      videoId: "ByXuk9QqQkk",
    },
    {
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      videoId: "5xH0HfJHsaY",
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      videoId: "m8e-FF8MsqU",
    },
    {
      title: "Avengers: Endgame",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      videoId: "TcMBFSGVi1c",
    },
    {
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      videoId: "owK1qxDselE",
    },
    {
      title: "Jurassic Park",
      description:
        "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
      videoId: "lc0UehYemQA",
    },
    {
      title: "Titanic",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      videoId: "CHekzSiZjrY",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      videoId: "vZ734NWnAHA",
    },
    {
      title: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
      videoId: "qvsgGtivCgs",
    },
    {
      title: "The Lion King",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      videoId: "7TavVZMewpY",
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      videoId: "qtRKdVHc-cE",
    },
    {
      title: "The Silence of the Lambs",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      videoId: "W6Mm8Sbe__o",
    },
  ];

  try {
    const insertedMovies = await prisma.movie.createMany({
      data: movies,
      skipDuplicates: true,
    });

    return Response.json({ movies: insertedMovies });
  } catch (error) {}
}
