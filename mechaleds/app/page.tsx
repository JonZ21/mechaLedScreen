import test from "../public/test.gif";
import Image from "next/image";
export default function Home() {
  const handleClick = () => {};

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={handleClick}>Go to Page 2</button>
      <Image src={test} alt="My GIF" />
    </div>
  );
}
