/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRibbon";
  id: string;
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface BannerFragment {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: BannerFragment_image | null;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}
