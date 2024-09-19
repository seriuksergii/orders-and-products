import { OrderDescriptionTypes } from '../types/OrderTypes';

export const orders: OrderDescriptionTypes[] = [
  {
    id: 1,
    title: 'Довга довга назва надходження Order 777/23546',
    date: '2024-06-29',
    products: [
      {
        id: 2,
        title: 'Monitor Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        code: 'SN-12.3456789',
        photo: '/monitor.jpeg',
        status: 'У вільному продажу',
        price: [
          { value: 100, symbol: 'USD' },
          { value: 2600, symbol: 'UAH' },
        ],
      },
      {
        id: 3,
        title: 'Laptop Dell latitude e7250 i5-5300u 4gb nvidia 128gb intel',
        code: 'SN-12.3456789',
        photo: '/laptop.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 150, symbol: 'USD' },
          { value: 3900, symbol: 'UAH' },
        ],
      },
      {
        id: 4,
        title: 'Mouse bungee razer mouse bungee v3 rc21-01560100-r3m1',
        code: 'SN-12.3456789',
        photo: '/mouse.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 50, symbol: 'USD' },
          { value: 1300, symbol: 'UAH' },
        ],
      },
      {
        id: 5,
        title: 'Headset Sandberg 126-30 słuchawki/zestaw',
        code: 'SN-12.3456789',
        photo: '/head.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 80, symbol: 'USD' },
          { value: 2100, symbol: 'UAH' },
        ],
      },
      {
        id: 6,
        title: 'Camera Canon EOS 4000D BK 18-55 (3011C004AA)',
        code: 'SN-12.3456789',
        photo: '/camera.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 200, symbol: 'USD' },
          { value: 5200, symbol: 'UAH' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Довга довга назва надходження Order 777/68687',
    date: '2024-06-29',
    products: [
      {
        id: 7,
        title: 'Monitor Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        code: 'SN-12.3456789',
        photo: '/monitor.jpeg',
        status: 'У вільному продажу',
        price: [
          { value: 120, symbol: 'USD' },
          { value: 2900, symbol: 'UAH' },
        ],
      },
      {
        id: 8,
        title: 'Laptop Dell latitude e7250 i5-5300u 4gb nvidia 128gb intel',
        code: 'SN-12.3456789',
        photo: '/laptop.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 180, symbol: 'USD' },
          { value: 4500, symbol: 'UAH' },
        ],
      },
      {
        id: 9,
        title: 'Mouse bungee razer mouse bungee v3 rc21-01560100-r3m1',
        code: 'SN-12.3456789',
        photo: '/mouse.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 55, symbol: 'USD' },
          { value: 1400, symbol: 'UAH' },
        ],
      },
      {
        id: 10,
        title: 'Headset Sandberg 126-30 słuchawki/zestaw',
        code: 'SN-12.3456789',
        photo: '/head.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 90, symbol: 'USD' },
          { value: 2300, symbol: 'UAH' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Довга довга назва надходження Order 744/27846',
    date: '2024-06-29',
    products: [
      {
        id: 11,
        title: 'Monitor Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        code: 'SN-12.3456789',
        photo: '/monitor.jpeg',
        status: 'У вільному продажу',
        price: [
          { value: 130, symbol: 'USD' },
          { value: 3100, symbol: 'UAH' },
        ],
      },
      {
        id: 12,
        title: 'Laptop Dell latitude e7250 i5-5300u 4gb nvidia 128gb intel',
        code: 'SN-12.3456789',
        photo: '/laptop.jpeg',
        status: 'Зарезервовано',
        price: [
          { value: 190, symbol: 'USD' },
          { value: 4700, symbol: 'UAH' },
        ],
      },
    ],
  },
];
