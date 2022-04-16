import s1 from './public/images/snickers1.jpeg';
import s2 from './public/images/snickers2.jpeg';
import s3 from './public/images/snickers3.jpeg';
import h1 from './public/images/clothes1.jpeg';
import h2 from './public/images/clothes2.jpeg';
import h3 from './public/images/clothes3.jpeg';
import th1 from './public/images/test1.webp';
import th2 from './public/images/test2.webp';
import th3 from './public/images/test3.webp';
import th4 from './public/images/test4.webp';

export const fakeNavOption = ['BEST100', 'NEW10%', '1 + 1', 'TOP', 'OUTER', 'PANTS', 'OPS/SKIRT', 'KNIT/CARDIGAN', 'SALE'];
export const fakeNavLogin = [
    {
        name: '회원가입',
        path : '/login'
    },
    {
        name: '로그인',
        path : '/login'
    },
    {
        name: '고객센터',
        path: '/faq'
    }
];

export const fakeNavProfile = [
    {
        name: '로그아웃',
    },
    {
        name: '마이페이지',
        path : '/myPage'
    },
    {
        name: '고객센터',
        path: '/faq'
    }
];

export const fakeSlideImage = [s1, s2, s3];

export const slideImage = [
    h1, h2, h3
];

export const thumb = [ 
    {
        image: th1,
        title: '프루티에 실켓 반팔티',
        price: '17,900원',
        firstPrice: '',
        clothesSize: 'S, M, L, XL',
    },
    {
        image: th2,
        title: '[루즈핏/캐주얼] 엠빅 맨투맨',
        price: '17,900원',
        firstPrice: '24,500원',
        clothesSize: 'FREE',

    },
    {
        image: th3,
        title: '[남여공용/캐주얼]인디비쥬얼 반바지',
        price: '19,500원',
        firstPrice: '28,900원',
        clothesSize: 'S, M, L, XL',
    }, 
    {
        image: th4,
        title: '[아방핏/베이직]마인 브이넥 맨투맨',
        price: '14,500원',
        firstPrice: '',
        clothesSize: 'FREE',
    }
 ];