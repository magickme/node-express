const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    "In the future, there will be no mistakes.",
    "The only way to do great work is to love what you do.",
    "It's not the years in your life that count. It's the life in your years.",
    "The only thing you have to fear is fear itself.",
    "The best way to predict the future is to create it.",
    "You will be successful in your work.",
    "You will be successful in your life."
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}

