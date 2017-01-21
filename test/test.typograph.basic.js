'use strict';

// https://github.com/samdark/Typograph/blob/master/tests/_test.typo-basic.dat

const helpers = require('./lib/helpers');
const ruTests = [
    [
        'я хочу',
        'я\u00A0хочу'
    ],
    [
        'Сегодня был создан',
        'Сегодня был создан'
    ],
    [
        'Сегодня будет создан',
        'Сегодня будет создан'
    ],
    [
        'закон "об охране". asdfasdfasdf',
        'закон «об\u00A0охране». asdfasdfasdf'
    ],
    [
        'закон "об охране".',
        'закон «об\u00A0охране».'
    ],
    [
        'вряд ли...',
        'вряд\u00A0ли…'
    ],
    [
        'о себе',
        'о\u00A0себе'
    ],
    [
        'у себя',
        'у\u00A0себя'
    ],
    [
        'some code to "change". for real...',
        'some code to\u00A0«change». for real…'
    ],
    [
        'сочетание "кавычек"... с троеточием',
        'сочетание «кавычек»… с\u00A0троеточием'
    ],
    [
        'button "English Pages".',
        'button «English Pages».'
    ],
    [
        'button "English Pages"?',
        'button «English Pages»?'
    ],
    [
        'троеточие...',
        'троеточие…'
    ],
    [
        '...троеточие?',
        '…троеточие?'
    ],
    [
        '(...троеточие?)',
        '(…троеточие?)'
    ],
    [
        '(троеточие...)',
        '(троеточие…)'
    ],
    [
        'word "go out..." doubleword',
        'word «go\u00A0out…» doubleword'
    ],
    [
        'word "go out..."',
        'word «go\u00A0out…»'
    ],
    [
        'word "...go out..." doubleword',
        'word «…go out…» doubleword'
    ],
    [
        'word "...go out"',
        'word «…go out»'
    ],
    [
        '"go out!"',
        '«go\u00A0out!»'
    ],
    [
        '"go out?"',
        '«go\u00A0out?»'
    ],
    [
        '"go out."',
        '«go\u00A0out.»'
    ],
    [
        '123 "go out!"',
        '123 «go\u00A0out!»'
    ],
    [
        '123 "go out?"',
        '123 «go\u00A0out?»'
    ],
    [
        '123 "go out."',
        '123 «go\u00A0out.»'
    ],
    [
        '123 "go out!" 123',
        '123 «go\u00A0out!» 123'
    ],
    [
        '123 "go out?" 232',
        '123 «go\u00A0out?» 232'
    ],
    [
        '123 "go out." 321',
        '123 «go\u00A0out.» 321'
    ],
    [
        '"go out!" 123',
        '«go\u00A0out!» 123'
    ],
    [
        '"go out?" 232',
        '«go\u00A0out?» 232'
    ],
    [
        '"go out." 321',
        '«go\u00A0out.» 321'
    ],
    [
        'word "quoted" word',
        'word «quoted» word'
    ],
    [
        '"quoted" word word',
        '«quoted» word word'
    ],
    [
        'word word "quoted"',
        'word word «quoted»'
    ],
    [
        'word "quo ted" word',
        'word «quo ted» word'
    ],
    [
        '"quo ted" word word',
        '«quo ted» word word'
    ],
    [
        'word word "quo ted"',
        'word word «quo ted»'
    ],
    [
        'лишние   пробелы',
        'лишние пробелы'
    ],
    [
        '"_"',
        '«_»'
    ],
    [
        '"Европа-Азия"',
        '«Европа-Азия»'
    ],
    [
        '"ICQ #"',
        '«ICQ #»'
    ],
    [
        'C++-API',
        'C++-API'
    ],
    [
        '"c:\\www\\sites\\"',
        '«c:\\www\\sites\\»'
    ],
    [
        '"Справка 09"',
        '«Справка\u00A009»'
    ],
    [
        '"новый тариф*"',
        '«новый тариф*»'
    ],
    [
        '"Её любил я; сорок тысяч братьев / всем множеством своей любви со мною не уравнялись бы" — в этих знаменитых словах Гамлета подлинное, глубокое чувство',
        '«Её\u00A0любил я; сорок тысяч братьев / всем множеством своей любви со\u00A0мною не\u00A0уравнялись\u00A0бы»\u00A0— в\u00A0этих знаменитых словах Гамлета подлинное, глубокое чувство'
    ],
    [
        '"вопрос? - ответ!"',
        '«вопрос? —\u00A0ответ!»'
    ],
    [
        '"Опять это чёртово тире...", - подумала программа "Типограф"',
        '«Опять это чёртово тире…»,\u00A0— подумала программа «Типограф»'
    ],
    [
        'Хотим на сайт "Типограф!" - кричали ребятишки.',
        'Хотим на\u00A0сайт «Типограф!»\u00A0— кричали ребятишки.'
    ],
    [
        'http://rmcreative.ru/ - это сайт "Типографа"',
        'http://rmcreative.ru/\u00A0— это сайт «Типографа»'
    ],
    [
        '!!!"',
        '!!!»'
    ],
    [
        '!!!".',
        '!!!».'
    ],
    [
        '!!!"!',
        '!!!»!'
    ],
    [
        '"Любопытно", -- подумал князь ,пережовывая бублик.',
        '«Любопытно»,\u00A0— подумал князь, пережовывая бублик.'
    ],
    [
        'Я знаю одно слово на букву "х"!',
        'Я\u00A0знаю одно слово на\u00A0букву «х»!'
    ],
    [
        '"Star Flyer Inc."',
        '«Star Flyer Inc.»'
    ],
    [
        'LO\'Лайт',
        'LO’Лайт'
    ],
    [
        'ООО "Рога и копыта"',
        'ООО\u00A0«Рога и\u00A0копыта»'
    ],
    [
        'г. Воронеж',
        'г.\u00A0Воронеж'
    ],
    [
        'г.Воронеж',
        'г.\u00A0Воронеж'
    ],
    [
        'пос. Гадюково',
        'пос.\u00A0Гадюково'
    ],
    [
        'тов. Сталин',
        'тов. Сталин'
    ],
    [
        'стр.27',
        'стр.\u00A027'
    ],
    [
        '2007г.',
        '2007\u00A0г.'
    ],
    [
        '2007 г.',
        '2007\u00A0г.'
    ],
    [
        'Скобки( Неправильные! )',
        'Скобки (Неправильные!)'
    ]/*,
    [
        '123-123',
        '123–123'
    ],
    [
        'отсутствие"пробела"',
        'отсутствие «пробела»'
    ],
    [
        '"Я сидел рядом с С. И. Танеевым"',
        '«Я\u00A0сидел рядом с\u00A0С.И.\u00A0Танеевым»'
    ],
    [
        '"I was with A. M. Thompson"',
        '«I was with A.M.\u00A0Thompson»'
    ],
    [
        '"данные:"',
        '«данные:»'
    ],
    [
        'диагональ моего монитора — 17", а размер карандаша — 1,5"',
        'диагональ моего монитора\u00A0— 17", а\u00A0размер карандаша\u00A0— 1,5"'
    ],
    [
        '100 тыс.   руб.',
        '100\u00A0тыс.\u00A0руб.'
    ],
    [
        '1000000руб.',
        '1000000\u00A0руб.'
    ]*/
];

helpers.test('typograph basic', ruTests, {locale: ['ru', 'en-US']});
helpers.doubleTest('typograph basic, double execute', ruTests, {locale: ['ru', 'en-US']});
