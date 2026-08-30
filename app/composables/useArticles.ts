const articles = [
  {
    splash: '/car_fs.jpg',
    title: 'Participation à la Formula Student',
    description: 'L\'équipe a participé pour la toute permière fois à la Formula Student. Si les premiers tests ont été concluants (tech, tilt, noise, brake), nous avons eu des problèmes avec l\'accélération, le skidpad et l\'endurance. Nous reviendrons l\'année prochaine pour donner encore plus de nous.',
    additional_images: ['/articles/001.jpg', '/articles/002.jpg'],
    date: new Date()
  }
  // {
  //   splash: '/car_fs.jpg',
  //   title: 'Participation à la Formula Student',
  //   description: 'L\'équipe a participé pour la toute permière fois à la Formula Student. Si les premiers tests ont été concluants (tech, tilt, noise, brake), nous avons eu des problèmes avec l\'accélération, le skidpad et l\'endurance. Nous reviendrons l\'année prochaine pour donner encore plus de nous.',
  //   additional_images: ['/articles/001.jpg', '/articles/002.jpg'],
  //   date: new Date()
  // }
]

export const latestArticle = () => {
  const len = articles.length
  if (len === 0) {
    return null
  }
  return [articles[len - 1], len - 1]
}

export const allArticles = () => {
  return articles
}

export const articleById = (id: number) => {
  if (id >= articles.length) {
    return null
  }
  return articles[id]
}
