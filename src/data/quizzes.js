export const QUIZZES = {
  basketball: {
    title: "Basketball Basics",
    description: "Fundamental rules and gameplay.",
    questions: [
      { id:1, q: "How many players per team are on the court in basketball?", choices:["4","5","6","7"], answer:1 },
      { id:2, q: "What is a 'double dribble'?", choices:["Dribbling with two hands consecutively or restarting dribble","Dribbling while running","Passing to two players","Taking two free throws"], answer:0 }
    ]
  },
  football: {
    title: "American Football Basics",
    description: "Essential rules and scoring.",
    questions: [
      { id:1, q: "How many yards for a first down?", choices:["5","8","10","15"], answer:2 },
      { id:2, q: "How many points is a touchdown worth?", choices:["3","6","7","2"], answer:1 }
    ]
  },
  soccer: {
    title: "Soccer Basics",
    description: "Rules and common terms in soccer.",
    questions: [
      { id:1, q: "How many players on the field per team in standard soccer?", choices:["9","10","11","12"], answer:2 },
      { id:2, q: "What is an offside?", choices:["Goalkeeper touching the ball","Attacker is nearer to opponent goal than both ball and second-last opponent when ball is played","A foul inside penalty box","Corner kick"], answer:1 }
    ]
  }
}
