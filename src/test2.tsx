interface Test2 {
  a: number;
  myref: React.RefObject<HTMLInputElement>;
}
export const Test2 = ({ a, myref }: Test2) => {
  return <input type="text" className="outline-2" ref={myref} />;
};
