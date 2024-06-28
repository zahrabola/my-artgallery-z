const mockquizdata = 
[
    {
        id:0,
      question: "The Art Institute of Chicago, founded in what year?",
      images: "https://artic-web.imgix.net/95d79296-42be-46ac-a594-fa7964f18447/logo_forvideocloseup.allred.jpg?rect=0%2C0%2C7257%2C7257&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=800&h=800",
      options: [" 1869", "1879", " 1972", "1878"],
      answer: "1879",
      type: "MCQ" // Multiple Choice type
    },
    {
      id:1,
      question: "'Nighthawks' is one of the best known works by this American artist",
      images: "https://www.artic.edu/iiif/2/831a05de-d3f6-f4fa-a460-23008dd58dda/full/843,/0/default.jpg",
      type: "FIB", // Fill-in-the-Blank type
      answer: "Edward Hopper",
      inputType: "text"
    },
    {
      id:2,
      question:
        'What style of painting is Georges Seurat,  "A Sunday Afternoon on la Grande Jatte - 1884"',
        images: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg",
        options: ["Pointillism", "Surrealism", "Dadaism", "Expressionism"],
      answer: "Pointillism",
      type: "MCQ"
    },
    {
      id:3,
      question: "his 11th century sculpture depicts this Hindu deity",
      images: "https://www.artic.edu/iiif/2/cf50f037-5fb2-e197-0e56-3ae701edb3e2/full/843,/0/default.jpg",
      options: [
        "Swahili",
        "Edo",
        "Shiva",
        "Yakshi"
      ],
      answer: "Shiva",
      type: "MCQ"
    },
    {
      id:4,
      question: " '______' was a Italian sculptor, architect and painter.",
      images: "https://www.artic.edu/iiif/2/b47f6d05-5116-d24a-bf81-f92a5ec7c329/full/843,/0/default.jpg",
      type: "FIB", // Fill-in-the-Blank type
      title:"Moses",
      answer: "Michelangelo",
      inputType: "text" 
    },
    {
      id:5,
        question: "What is the tile of this Art Exhibition",
        images: "https://artic-web.imgix.net/f248dbc9-ae32-4013-81d5-773f6fc13b7f/1982.1321MakiHakuProportionI.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=91%2C112%2C2767%2C1556",
        date:"1964",
        title:"Proportion I",
        options: ["Van Gogh", "Ink on Paper: Japanese Monochromatic Prints (2009)", "Ragnar Kjartansson / The National: A Lot of Sorrow", "Van Dyck, Rembrandt, and the Portrait Print"],
        answer: "Ink on Paper: Japanese Monochromatic Prints (2009)",
        type: "MCQ"  // Multiple Choice Exhibition
      },
      {
        id:6,
        question: "What Famous artist Painted this Piece of Art Work?",
        images: "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg",
        date:"1889",
        title:"The Bedroom",
        options: ["Rembrandt", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Vincent van Gogh",
        type: "MCQ"
      },
    {
      id:7,
      question: "This iconic painting by Grant Wood is one of the most famous works of American Art",
      images: "https://artic-web.imgix.net/1801558c-353e-49c1-acec-d771b95ce3d2/AmericanGothic2022.jpeg?rect=0%2C0%2C843%2C1019&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1000&h=1209",
      options: ["American Gothic", "Weaving", "Nightlight", "Untitled"],
      answer: "American Gothic",
      type: "MCQ"
    },
    {
      id:8,
      question: "The Roman collection includes the bust of emperor '______', who reigned from 117-138.",
      images: "https://www.artic.edu/iiif/2/4ba54d83-416b-92bf-6098-89ffec76a496/full/843,/0/default.jpg",
      type: "FIB", // Fill-in-the-Blank type
      answer: "Hadrian",
      inputType: "text" 
    },
    {
      id:9,
      question: "This work by Gustave Caillebotte portrays a street scene of this European capital",
      images: "https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/843,/0/default.jpg",
      date:"1877",
      title:"Rainy Day",
      options: ["London", "Paris", "Venice", "Vienna"],
      answer: "Paris",
      type: "MCQ"
    },
  ]
  

/*[
    {
https://www.sporcle.com/games/MrSaturn64/things-in-the-art-institute-of-chicago - 
    https://www.artic.edu/iiif/2/7690dd6e-05ed-773c-a80e-e7cc4eb879cc/full/843,/0/default.jpg
    */

export default mockquizdata;
///https://www.geeksforgeeks.org/quiz-app-in-react-using-chatgpt/ 