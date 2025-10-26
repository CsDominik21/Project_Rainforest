import amazonImage from '../assets/amazon-rainforest.jpg';
import congoImage from '../assets/congo-basin-rainforest.png';
import asianImage from '../assets/southeast-asia-rainforest.jpg';

export const rainforests = [
    {
        id: 1,
        name: 'Amazonas',
        left: '27%',
        top: '58%',
        image: amazonImage,
        info: '5,5 millió km² - A világ legnagyobb esőerdeje',
        region: 'Dél-Amerika'
    },
    {
        id: 2,
        name: 'Kongó-medence',
        left: '53%',
        top: '55%',
        image: congoImage,
        info: '3,7 millió km² - Afrika szíve',
        region: 'Afrika'
    },
    {
        id: 3,
        name: 'Délkelet-Ázsia',
        left: '81%',
        top: '55%',
        image: asianImage,
        info: '2,5 millió km² - Gazdag biodiverzitás',
        region: 'Ázsia'
    }
];