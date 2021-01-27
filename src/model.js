import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet assumenda deserunt dolorem, eos excepturi expedita ipsum, iste magni maxime molestias nulla obcaecati praesentium quas quos recusandae repellendus voluptates.`

export const model = [
    new TitleBlock('Constructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'white+23' +
                '',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae dignissimos dolore doloremque dolorum exercitationem fuga itaque labore libero magni, quaerat quas quasi quibusdam reprehenderit rerum sequi, ut vel',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae dignissimos dolore doloremque dolorum exercitationem fuga itaque labore libero magni, quaerat quas quasi quibusdam reprehenderit rerum sequi, ut vel',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae dignissimos dolore doloremque dolorum exercitationem fuga itaque labore libero magni, quaerat quas quasi quibusdam reprehenderit rerum sequi, ut vel'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]