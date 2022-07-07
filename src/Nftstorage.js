import React, { useState } from "react";
import { NFTStorage} from "nft.storage";

const Nftstorage = () => {
  const [NFT, setNFT] = useState();
  const APIKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI3ZGMxQUVCM0ZGZTMyMjE0ODVEYTRiRmMzNDlFQjRENTUzMkM0QUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NzExMjc3OTMxOSwibmFtZSI6Ik5mdCJ9.xxsyYcDUXcG0Q1KiJvZCwRQyMrHyTpXbK6MYNDXGock";
  const client = new NFTStorage({ token: APIKey });

  async function main(e) {
    const file = e.target.files[0];
    const metadata = await client.store({
      name: "Pineple",
      description: "This is a Fruit",
      image: file,
    });
console.log(metadata.url)
    setNFT(file);
  }
  return (
    <>
      <h1>NFT Storage</h1>
      <input type="file" onChange={main} />
      {NFT && (
          <img src={URL.createObjectURL(NFT)} width="550px" />
      )}
    </>
  );
};

export default Nftstorage;