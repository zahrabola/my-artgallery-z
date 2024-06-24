const mockquizdata = 
[
    {
        id:0,
      question: "The Art Institute of Chicago, founded in what year?",
      options: [" 1869", " 1879", " 1972", "1878"],
      answer: " 1879",
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
      question: "What does CSS stand for?",
      images: "",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets",
      type: "MCQ"
    },
    {
      id:4,
      question: " '______' was a Italian sculptor, architect and painter.",
      images: "https://www.artic.edu/iiif/2/b47f6d05-5116-d24a-bf81-f92a5ec7c329/full/843,/0/default.jpg",
      type: "FIB", // Fill-in-the-Blank type
      date:"1700",
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
        type: "MCQ_EXH"  // Multiple Choice Exhibition
      },
      {
        id:6,
        question: "What Famous artist Painted this Piece of Art Work?",
        images: "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg",
        date:"1889",
        title:"The Bedroom",
        options: ["Rembrandt", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Vincent van Gogh",
        type: "MCQ_EXH"
      },
    {
      id:7,
      question: "What year was JavaScript created?",
      options: ["1995", "1999", "2001", "2005"],
      answer: "1995",
      type: "MCQ"
    }
  ]
  

/*[
    {
https://www.sporcle.com/games/MrSaturn64/things-in-the-art-institute-of-chicago - 
    https://www.artic.edu/iiif/2/7690dd6e-05ed-773c-a80e-e7cc4eb879cc/full/843,/0/default.jpg
    */

export default mockquizdata;
///https://www.geeksforgeeks.org/quiz-app-in-react-using-chatgpt/ 