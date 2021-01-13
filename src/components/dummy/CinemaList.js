import Ebv from '../../assets/ebv.jpg'
import Cineone21 from '../../assets/cineone210.jpg'
import Hiflix from '../../assets/hiflix.jpg'

const cinemaList= [
    {
        id: 1,
        image: Ebv,
        name: 'ebv.id',
        address: 'Whatever street No.12, South Purwokerto',
        time: [
            {
                id: 1,
                readable: '08:30am'
            },
            {
                id: 2,
                readable: '10:30am'
            },
            {
                id: 3,
                readable: '12:30pm'
            },
            {
                id: 4,
                readable: '14:30am'
            }
        ],
        price: 10.0
    },
    {
        id: 2,
        image: Cineone21,
        name: 'CineOne21',
        address: 'Downcare street No. 21, East Purwokerto',
        time: [
            {
                id: 1,
                readable: '08:30am'
            },
            {
                id: 2,
                readable: '10:30am'
            },
            {
                id: 3,
                readable: '12:30pm'
            },
            {
                id: 4,
                readable: '14:30am'
            }
        ],
        price: 10.0
    },
    {
        id: 3,
        image: Hiflix,
        name: 'hiflix Cinema',
        address: 'Colonel street No. 2, East Purwokerto',
        time: [
            {
                id: 1,
                readable: '08:30am'
            },
            {
                id: 2,
                readable: '10:30am'
            },
            {
                id: 3,
                readable: '12:30pm'
            },
            {
                id: 4,
                readable: '14:30am'
            }
        ],
        price: 10.0
    }
]
export default cinemaList