import React from "react";
import Image from "next/image";

//style
import styled from "@emotion/styled";

//assets
import { skeletonURL } from "theme/config";
import { BannerImg } from "assets/images";

//
export default function Sec1({ handleFocus }) {
  return (
    <View>
      <Image
        src={BannerImg}
        alt="배너"
        placeholder="blur"
        loading="lazy"
        blurDataURL={skeletonURL}
      />

      <Typo>
        <h1 data-aos="zoom-in">{`블록체인 WEB 3.0\n다크모드 템플릿`}</h1>

        <p data-aos="zoom-in">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo conse
        </p>

        <button
          type="button"
          onClick={handleFocus}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          문의하기
        </button>
      </Typo>
    </View>
  );
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Typo = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    row-gap: 30px;
  }

  h1 {
    font-size: 50px;
    color: #fff;
    white-space: pre-line;
    text-align: center;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 15px;
    color: #ddd;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  button {
    font-size: 16px;
    width: 200px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64, 21, 93, 0.8);
    border-radius: 100px;
    color: #e0e0e0;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: rgba(64, 21, 93, 1);
    }

    @media (max-width: 1080px) {
      font-size: 15px;
    }
  }
`;
