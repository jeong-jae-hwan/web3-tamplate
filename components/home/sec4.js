import React from "react";

//styled
import styled from "@emotion/styled";
import Image from "next/image";
import { css } from "@emotion/react";
import { skeletonURL } from "theme/config";

//
export default function Sec4({ contectRef }) {
  return (
    <View ref={contectRef}>
      <strong data-aos="fade">
        DEEP은 다양한 브랜드를
        <br />
        책임졌습니다.
      </strong>

      <p data-aos="fade" data-aos-delay="200">
        조금만 기다리면 다영한 브랜드를 확인할 수 있습니다.
      </p>

      <Brand>
        {brandimgs.map((item, i) => {
          return (
            <Image
              key={i}
              src={item.img}
              alt="로고"
              width={item.width}
              height={60}
              placeholder="blur"
              loading="lazy"
              blurDataURL={skeletonURL}
              css={css`
                width: ${item.width};
                height: auto;

                @media (max-width: 600px) {
                  width: calc(${item.width} - 80px);
                }
              `}
            />
          );
        })}
      </Brand>
    </View>
  );
}

//styled
const View = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1080px) {
    padding: 120px 0;
  }

  @media (max-width: 600px) {
    padding: 100px 0;
  }

  strong {
    font-size: 40px;
    text-align: center;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 26px;
    }
  }

  p {
    white-space: pre-line;
    text-align: center;
    font-size: 15px;
    color: #aaa;
    margin: 30px 0 80px;

    @media (max-width: 600px) {
      margin: 20px 0 60px;
      font-size: 14px;
    }
  }
`;

const Brand = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 50px;
  width: calc(200px * 81px);
  animation: scroll 80s linear infinite;
  transition-timing-function: linear !important;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-240px * 27));
    }
  }
`;

const brandimgs = [
  {
    width: 136,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/2c9463d8-ce6a-41e0-4d55-0aee3e4e3f00/public",
  },
  {
    width: 109,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8de01eb-4f34-4ade-0373-e8851c1dd000/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ad6c3362-5b75-44c7-f4c8-206a24eb6e00/public",
  },
  {
    width: 113,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/c938392b-64f8-4e7f-7fb1-28e13a8d6600/public",
  },
  {
    width: 102,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3f6f7f2f-99d1-4e4f-ac16-8c7c891e6800/public",
  },
  {
    width: 121,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/254de272-207f-4aa3-51e6-efe04052a600/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/61ad044e-e7b1-4d6a-1516-6c49072c3d00/public",
  },
  {
    width: 120,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e33e2e19-6e5b-4b06-bdb0-a52ade8ba000/public",
  },
  {
    width: 147,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/be4eab52-0de8-43bc-0bf7-a47cae4c4c00/public",
  },
  {
    width: 68,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/06517537-6183-48ab-cf6f-7a7f54b93600/public",
  },
  {
    width: 193,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/462fa353-6aab-4202-b46b-12c00f458600/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/faf95b8d-c835-490e-48cf-a00f164b4300/public",
  },
  {
    width: 143,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e03281ca-037b-49d2-b047-4c299f82b500/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/df728900-b248-48fe-c2c6-002b8b99ec00/public",
  },
  {
    width: 119,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/cda59589-c3e6-47f1-44b6-15a1cfd90200/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/53764af8-46c1-4521-b6eb-baae96b41500/public",
  },
  {
    width: 242,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a70bea16-53b9-464f-78b9-063efd6b0900/public",
  },
  {
    width: 139,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/b9d2c148-4a54-432d-0e33-50cfc043f000/public",
  },
  {
    width: 78,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9d16a8eb-de56-4af4-6023-c1cc69f93100/public",
  },
  {
    width: 116,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/698ee9ae-2f26-44d5-02ac-82d5636d3300/public",
  },
  {
    width: 180,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ed041ebb-9494-4823-2143-481597287f00/public",
  },
  {
    width: 97,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a0bc9d23-d932-4c50-8800-7b95b0d6d000/public",
  },
  {
    width: 214,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e71c0715-710e-46a0-e00f-60573aff3600/public",
  },
  {
    width: 161,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8dd7b0a-b124-403f-9227-9aeea70f4000/public",
  },
  {
    width: 138,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3486e70e-6998-4c7a-c048-7a9556e94b00/public",
  },
  {
    width: 133,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9f129289-ead4-4862-5673-b167ba2d6400/public",
  },
  {
    width: 154,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e8882f07-108b-49a4-87c9-886f2431b900/public",
  },
  ////    /////    /////
  {
    width: 136,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/2c9463d8-ce6a-41e0-4d55-0aee3e4e3f00/public",
  },
  {
    width: 109,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8de01eb-4f34-4ade-0373-e8851c1dd000/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ad6c3362-5b75-44c7-f4c8-206a24eb6e00/public",
  },
  {
    width: 113,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/c938392b-64f8-4e7f-7fb1-28e13a8d6600/public",
  },
  {
    width: 102,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3f6f7f2f-99d1-4e4f-ac16-8c7c891e6800/public",
  },
  {
    width: 121,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/254de272-207f-4aa3-51e6-efe04052a600/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/61ad044e-e7b1-4d6a-1516-6c49072c3d00/public",
  },
  {
    width: 120,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e33e2e19-6e5b-4b06-bdb0-a52ade8ba000/public",
  },
  {
    width: 147,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/be4eab52-0de8-43bc-0bf7-a47cae4c4c00/public",
  },
  {
    width: 68,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/06517537-6183-48ab-cf6f-7a7f54b93600/public",
  },
  {
    width: 193,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/462fa353-6aab-4202-b46b-12c00f458600/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/faf95b8d-c835-490e-48cf-a00f164b4300/public",
  },
  {
    width: 143,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e03281ca-037b-49d2-b047-4c299f82b500/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/df728900-b248-48fe-c2c6-002b8b99ec00/public",
  },
  {
    width: 119,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/cda59589-c3e6-47f1-44b6-15a1cfd90200/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/53764af8-46c1-4521-b6eb-baae96b41500/public",
  },
  {
    width: 242,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a70bea16-53b9-464f-78b9-063efd6b0900/public",
  },
  {
    width: 139,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/b9d2c148-4a54-432d-0e33-50cfc043f000/public",
  },
  {
    width: 78,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9d16a8eb-de56-4af4-6023-c1cc69f93100/public",
  },
  {
    width: 116,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/698ee9ae-2f26-44d5-02ac-82d5636d3300/public",
  },
  {
    width: 180,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ed041ebb-9494-4823-2143-481597287f00/public",
  },
  {
    width: 97,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a0bc9d23-d932-4c50-8800-7b95b0d6d000/public",
  },
  {
    width: 214,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e71c0715-710e-46a0-e00f-60573aff3600/public",
  },
  {
    width: 161,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8dd7b0a-b124-403f-9227-9aeea70f4000/public",
  },
  {
    width: 138,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3486e70e-6998-4c7a-c048-7a9556e94b00/public",
  },
  {
    width: 133,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9f129289-ead4-4862-5673-b167ba2d6400/public",
  },
  {
    width: 154,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e8882f07-108b-49a4-87c9-886f2431b900/public",
  },
  /////    /////    /////
  {
    width: 136,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/2c9463d8-ce6a-41e0-4d55-0aee3e4e3f00/public",
  },
  {
    width: 109,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8de01eb-4f34-4ade-0373-e8851c1dd000/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ad6c3362-5b75-44c7-f4c8-206a24eb6e00/public",
  },
  {
    width: 113,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/c938392b-64f8-4e7f-7fb1-28e13a8d6600/public",
  },
  {
    width: 102,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3f6f7f2f-99d1-4e4f-ac16-8c7c891e6800/public",
  },
  {
    width: 121,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/254de272-207f-4aa3-51e6-efe04052a600/public",
  },
  {
    width: 100,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/61ad044e-e7b1-4d6a-1516-6c49072c3d00/public",
  },
  {
    width: 120,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e33e2e19-6e5b-4b06-bdb0-a52ade8ba000/public",
  },
  {
    width: 147,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/be4eab52-0de8-43bc-0bf7-a47cae4c4c00/public",
  },
  {
    width: 68,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/06517537-6183-48ab-cf6f-7a7f54b93600/public",
  },
  {
    width: 193,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/462fa353-6aab-4202-b46b-12c00f458600/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/faf95b8d-c835-490e-48cf-a00f164b4300/public",
  },
  {
    width: 143,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e03281ca-037b-49d2-b047-4c299f82b500/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/df728900-b248-48fe-c2c6-002b8b99ec00/public",
  },
  {
    width: 119,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/cda59589-c3e6-47f1-44b6-15a1cfd90200/public",
  },
  {
    width: 184,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/53764af8-46c1-4521-b6eb-baae96b41500/public",
  },
  {
    width: 242,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a70bea16-53b9-464f-78b9-063efd6b0900/public",
  },
  {
    width: 139,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/b9d2c148-4a54-432d-0e33-50cfc043f000/public",
  },
  {
    width: 78,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9d16a8eb-de56-4af4-6023-c1cc69f93100/public",
  },
  {
    width: 116,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/698ee9ae-2f26-44d5-02ac-82d5636d3300/public",
  },
  {
    width: 180,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/ed041ebb-9494-4823-2143-481597287f00/public",
  },
  {
    width: 97,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/a0bc9d23-d932-4c50-8800-7b95b0d6d000/public",
  },
  {
    width: 214,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e71c0715-710e-46a0-e00f-60573aff3600/public",
  },
  {
    width: 161,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/d8dd7b0a-b124-403f-9227-9aeea70f4000/public",
  },
  {
    width: 138,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3486e70e-6998-4c7a-c048-7a9556e94b00/public",
  },
  {
    width: 133,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/9f129289-ead4-4862-5673-b167ba2d6400/public",
  },
  {
    width: 154,
    img: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/e8882f07-108b-49a4-87c9-886f2431b900/public",
  },
];
