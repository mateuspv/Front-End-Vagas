import timeStrFromDate from './index';

test('no base parameter should consider now as base', () => {
  const date = new Date();

  expect(timeStrFromDate(date)).toBe('agora')
})

test('now', () => {
  const date = new Date('Sat Oct 13 2018 19:07:44 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 19:07:44 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('agora')
})

test('1 minute ago', () => {
  const date = new Date('Sat Oct 13 2018 19:07:44 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 19:08:44 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('1 minuto atrás')
})

test('$ minutes ago', () => {
  const date = new Date('Sat Oct 13 2018 19:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 19:10:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('10 minutos atrás')
})

test('1 hour ago', () => {
  const date = new Date('Sat Oct 13 2018 18:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 19:00:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('1 hora atrás')
})

test('$ hours ago', () => {
  const date = new Date('Sat Oct 13 2018 10:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 20:00:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('10 horas atrás')
})

test('yesterday', () => {
  const date = new Date('Sat Oct 12 2018 10:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 10:00:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('Ontem')
})

test('* days ago', () => {
  const date = new Date('Sat Oct 11 2018 10:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 13 2018 10:00:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('2 dias atrás')
})

test('weeks ago', () => {
  const date = new Date('Sat Oct 01 2018 10:00:00 GMT-0300 (Brasilia Standard Time');
  const now = new Date('Sat Oct 12 2018 10:00:00 GMT-0300 (Brasilia Standard Time');

  expect(timeStrFromDate(date, now)).toBe('2 semanas atrás')
})