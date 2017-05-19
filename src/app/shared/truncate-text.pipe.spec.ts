import { TruncateTextPipe } from './truncate-text.pipe';

describe('TruncateTextPipe', () => {

  it('create an instance', () => {
    const pipe = new TruncateTextPipe();
    expect(pipe).toBeTruthy();
  });

   it('should return original value if lower', () => {
    const pipe = new TruncateTextPipe();
    let val1 = "Calwen";
    let transform = pipe.transform(val1,20)
    expect(transform).toBe("Calwen")
  });

  it('should truncate as intended when longer', () => {
    const pipe = new TruncateTextPipe();
    let val1 = "Calwen";
    let transform = pipe.transform(val1,4)
    expect(transform).toBe("Calw...")
  });

  it('null value should accepted', () => {
    const pipe = new TruncateTextPipe();
    let val=null;
    let transform = pipe.transform(val,1)
    expect(transform).toBe("");
  });

   it('undefined value should accepted', () => {
    const pipe = new TruncateTextPipe();
    let val=undefined;
    let transform = pipe.transform(val,1)
    expect(transform).toBe("");
  });

});
