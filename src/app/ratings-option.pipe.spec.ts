import { Ratings } from './hunter';
import { RatingsOptionPipe } from './ratings-option.pipe';

describe('RatingsOptionPipe', () => {
  it('create an instance', () => {
    const pipe = new RatingsOptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display ratings in a list', () => {
    const rating: Ratings = { 
      "charm": 0, 
      "cool": 0,
      "sharp": 0,
      "tough": 0,
      "weird": 0
    };
    const pipe = new RatingsOptionPipe();

    const result = pipe.transform(rating);

    expect(result).toEqual("Charm 0, Cool 0, Sharp 0, Tough 0, Weird 0");
  });

  it('should display ratings above 0 with a +', () => {
    const rating: Ratings = { 
      "charm": 1, 
      "cool": 2,
      "sharp": 3,
      "tough": 0,
      "weird": 0
    };
    const pipe = new RatingsOptionPipe();

    const result = pipe.transform(rating);

    expect(result).toEqual("Charm +1, Cool +2, Sharp +3, Tough 0, Weird 0");
  });

  it('should display ratings below 0 with a -', () => {
    const rating: Ratings = { 
      "charm": -1, 
      "cool": 0,
      "sharp": 0,
      "tough": 0,
      "weird": 0
    };
    const pipe = new RatingsOptionPipe();

    const result = pipe.transform(rating);

    expect(result).toEqual("Charm -1, Cool 0, Sharp 0, Tough 0, Weird 0");
  });
});
