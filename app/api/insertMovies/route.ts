import MovieList from "@/app/components/MovieList";
import prisma from "@/lib/prisma";

export async function POST() {
  const movies = [
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      title: "Life Is Beautiful",
      description:
        "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    },
    {
      title: "Spirited Away",
      description:
        "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    },
    {
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    },
    {
      title: "Avengers: Endgame",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    },
    {
      title: "Jurassic Park",
      description:
        "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    },
    {
      title: "Titanic",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    },
    {
      title: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    },
    {
      title: "The Lion King",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    },
    {
      title: "The Silence of the Lambs",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
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
