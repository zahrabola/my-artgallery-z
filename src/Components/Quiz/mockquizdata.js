const mockquizdata = 
[
    {
        id:"0",
      question: "The Art Institute of Chicago, founded in what year?",
      options: [" 1869", " 1879", " 1972", "1878"],
      answer: " 1879",
      type: "MCQ" // Multiple Choice type
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Management Language"
      ],
      answer: "Hyper Text Markup Language",
      type: "MCQ"
    },
    {
      question:
        'Which programming language is known as "the mother of all languages"?',
      options: ["C++", "Java", "Python", "Assembly Language"],
      answer: "Assembly Language",
      type: "MCQ"
    },
    {
      question: "What does CSS stand for?",
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
      question: "______ was a Italian sculptor and painter.",
      type: "FIB", // Fill-in-the-Blank type
      answer: "Michelangelo",
      inputType: "text" // Specify input type for user input
    },
    {
        question: "What is the tile of this Art Exhibition",
        images: "https://artic-web.imgix.net/f248dbc9-ae32-4013-81d5-773f6fc13b7f/1982.1321MakiHakuProportionI.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=91%2C112%2C2767%2C1556",
        date:"1964",
        title:"Proportion I",
        options: ["Van Gogh", "Ink on Paper: Japanese Monochromatic Prints (2009)", "Ragnar Kjartansson / The National: A Lot of Sorrow", "Van Dyck, Rembrandt, and the Portrait Print"],
        answer: "Ink on Paper: Japanese Monochromatic Prints (2009)",
        type: "MCQ_EXH"  // Multiple Choice Exhibition
      },
      {
        question: "What Famous artist Painted this Piece of Art Work?",
        images: "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg",
        date:"1889",
        title:"The Bedroom",
        options: ["Rembrandt", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Vincent van Gogh",
        type: "MCQ_EXH"
      },
    {
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
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Management Language",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        question:
            'Which programming language is known as "the mother of all languages"?',
        options: ["C++", "Java", "Python", "Assembly Language"],
        answer: "Assembly Language",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        question: "What year was JavaScript created?",
        options: ["1995", "1999", "2001", "2005"],
        answer: "1995",
    },
];*/

export default mockquizdata;
///https://www.geeksforgeeks.org/quiz-app-in-react-using-chatgpt/ 