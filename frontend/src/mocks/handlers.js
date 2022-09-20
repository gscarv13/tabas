import { BASE_URL, PROPERTIES_INDEX } from '../utils/constants'
import { rest } from 'msw'

export const handlers = [
  rest.get(BASE_URL + PROPERTIES_INDEX, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Ido",
          address: "40676 Eric Street, Wardtown",
          cover: "path/to/cover/1",
          description: "Illo fugit voluptatem. Qui laudantium qui.",
          monthly_rate: 24410.96,
          pictures: [{id: 1, url: '/path/to/image1'}, {id: 2, url: '/path/to/image2'}, {id: 3, url: '/path/to/image3'}]
        },
        {
          id: 2,
          name: "Sea",
          address: "13328 Etta Corners, Port Victoriahaven",
          cover: "path/to/cover/2",
          description: "Illo fugit voluptatem. Qui laudantium qui.",
          monthly_rate: 32820.9,
          pictures: [{id: 1, url: '/path/to/image1'}, {id: 2, url: '/path/to/image2'}, {id: 3, url: '/path/to/image3'}]
        },
      ])
    )
  }),
]
