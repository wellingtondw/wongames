import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index({ ...props }: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: [],
      newGames: [],
      mostPopularHighlight: {},
      mostPopularGames: [],
      upcommingGames: [],
      upcommingHighlight: {},
      upcommingMoreGames: [],
      freeGames: [],
      freeHighlight: {}
    }
  }
}
