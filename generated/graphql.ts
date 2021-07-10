import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
}

export type IBlock = {
  __typename?: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<ISpan>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export type IBooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>
}

export type IDateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>
}

export type IDatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>
}

/** A Sanity document */
export type IDocument = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
}

export type IDocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<ISanity_DocumentFilter>
  _id?: Maybe<IIdFilter>
  _type?: Maybe<IStringFilter>
  _createdAt?: Maybe<IDatetimeFilter>
  _updatedAt?: Maybe<IDatetimeFilter>
  _rev?: Maybe<IStringFilter>
}

export type IDocumentSorting = {
  _id?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  _createdAt?: Maybe<ISortOrder>
  _updatedAt?: Maybe<ISortOrder>
  _rev?: Maybe<ISortOrder>
}

export type IFile = {
  __typename?: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<ISanityFileAsset>
}

export type IFileFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  asset?: Maybe<ISanityFileAssetFilter>
}

export type IFileSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
}

export type IFloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>
}

export type IGeopoint = {
  __typename?: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type IGeopointFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  lat?: Maybe<IFloatFilter>
  lng?: Maybe<IFloatFilter>
  alt?: Maybe<IFloatFilter>
}

export type IGeopointSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  lat?: Maybe<ISortOrder>
  lng?: Maybe<ISortOrder>
  alt?: Maybe<ISortOrder>
}

export type IIdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Scalars['ID']>>
  nin?: Maybe<Array<Scalars['ID']>>
}

export type IImage = {
  __typename?: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<ISanityImageAsset>
  hotspot?: Maybe<ISanityImageHotspot>
  crop?: Maybe<ISanityImageCrop>
}

export type IImageFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  asset?: Maybe<ISanityImageAssetFilter>
  hotspot?: Maybe<ISanityImageHotspotFilter>
  crop?: Maybe<ISanityImageCropFilter>
}

export type IImageSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  hotspot?: Maybe<ISanityImageHotspotSorting>
  crop?: Maybe<ISanityImageCropSorting>
}

export type IIntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>
}

export type IRealizations = IDocument & {
  __typename?: 'Realizations'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<ISlug>
  images?: Maybe<Array<Maybe<IImage>>>
  /** Znajdzie się na stronie realizacji */
  description?: Maybe<Scalars['String']>
}

export type IRealizationsFilter = {
  /** Apply filters on document level */
  _?: Maybe<ISanity_DocumentFilter>
  _id?: Maybe<IIdFilter>
  _type?: Maybe<IStringFilter>
  _createdAt?: Maybe<IDatetimeFilter>
  _updatedAt?: Maybe<IDatetimeFilter>
  _rev?: Maybe<IStringFilter>
  _key?: Maybe<IStringFilter>
  name?: Maybe<IStringFilter>
  slug?: Maybe<ISlugFilter>
  description?: Maybe<IStringFilter>
}

export type IRealizationsSorting = {
  _id?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  _createdAt?: Maybe<ISortOrder>
  _updatedAt?: Maybe<ISortOrder>
  _rev?: Maybe<ISortOrder>
  _key?: Maybe<ISortOrder>
  name?: Maybe<ISortOrder>
  slug?: Maybe<ISlugSorting>
  description?: Maybe<ISortOrder>
}

export type IRootQuery = {
  __typename?: 'RootQuery'
  Realizations?: Maybe<IRealizations>
  SanityImageAsset?: Maybe<ISanityImageAsset>
  SanityFileAsset?: Maybe<ISanityFileAsset>
  Document?: Maybe<IDocument>
  allRealizations: Array<IRealizations>
  allSanityImageAsset: Array<ISanityImageAsset>
  allSanityFileAsset: Array<ISanityFileAsset>
  allDocument: Array<IDocument>
}

export type IRootQueryRealizationsArgs = {
  id: Scalars['ID']
}

export type IRootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type IRootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type IRootQueryDocumentArgs = {
  id: Scalars['ID']
}

export type IRootQueryAllRealizationsArgs = {
  where?: Maybe<IRealizationsFilter>
  sort?: Maybe<Array<IRealizationsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type IRootQueryAllSanityImageAssetArgs = {
  where?: Maybe<ISanityImageAssetFilter>
  sort?: Maybe<Array<ISanityImageAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type IRootQueryAllSanityFileAssetArgs = {
  where?: Maybe<ISanityFileAssetFilter>
  sort?: Maybe<Array<ISanityFileAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type IRootQueryAllDocumentArgs = {
  where?: Maybe<IDocumentFilter>
  sort?: Maybe<Array<IDocumentSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type ISanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export type ISanityAssetSourceDataFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  name?: Maybe<IStringFilter>
  id?: Maybe<IStringFilter>
  url?: Maybe<IStringFilter>
}

export type ISanityAssetSourceDataSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  name?: Maybe<ISortOrder>
  id?: Maybe<ISortOrder>
  url?: Maybe<ISortOrder>
}

export type ISanityFileAsset = IDocument & {
  __typename?: 'SanityFileAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  source?: Maybe<ISanityAssetSourceData>
}

export type ISanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<ISanity_DocumentFilter>
  _id?: Maybe<IIdFilter>
  _type?: Maybe<IStringFilter>
  _createdAt?: Maybe<IDatetimeFilter>
  _updatedAt?: Maybe<IDatetimeFilter>
  _rev?: Maybe<IStringFilter>
  _key?: Maybe<IStringFilter>
  originalFilename?: Maybe<IStringFilter>
  label?: Maybe<IStringFilter>
  title?: Maybe<IStringFilter>
  description?: Maybe<IStringFilter>
  altText?: Maybe<IStringFilter>
  sha1hash?: Maybe<IStringFilter>
  extension?: Maybe<IStringFilter>
  mimeType?: Maybe<IStringFilter>
  size?: Maybe<IFloatFilter>
  assetId?: Maybe<IStringFilter>
  path?: Maybe<IStringFilter>
  url?: Maybe<IStringFilter>
  source?: Maybe<ISanityAssetSourceDataFilter>
}

export type ISanityFileAssetSorting = {
  _id?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  _createdAt?: Maybe<ISortOrder>
  _updatedAt?: Maybe<ISortOrder>
  _rev?: Maybe<ISortOrder>
  _key?: Maybe<ISortOrder>
  originalFilename?: Maybe<ISortOrder>
  label?: Maybe<ISortOrder>
  title?: Maybe<ISortOrder>
  description?: Maybe<ISortOrder>
  altText?: Maybe<ISortOrder>
  sha1hash?: Maybe<ISortOrder>
  extension?: Maybe<ISortOrder>
  mimeType?: Maybe<ISortOrder>
  size?: Maybe<ISortOrder>
  assetId?: Maybe<ISortOrder>
  path?: Maybe<ISortOrder>
  url?: Maybe<ISortOrder>
  source?: Maybe<ISanityAssetSourceDataSorting>
}

export type ISanityImageAsset = IDocument & {
  __typename?: 'SanityImageAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  metadata?: Maybe<ISanityImageMetadata>
  source?: Maybe<ISanityAssetSourceData>
}

export type ISanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<ISanity_DocumentFilter>
  _id?: Maybe<IIdFilter>
  _type?: Maybe<IStringFilter>
  _createdAt?: Maybe<IDatetimeFilter>
  _updatedAt?: Maybe<IDatetimeFilter>
  _rev?: Maybe<IStringFilter>
  _key?: Maybe<IStringFilter>
  originalFilename?: Maybe<IStringFilter>
  label?: Maybe<IStringFilter>
  title?: Maybe<IStringFilter>
  description?: Maybe<IStringFilter>
  altText?: Maybe<IStringFilter>
  sha1hash?: Maybe<IStringFilter>
  extension?: Maybe<IStringFilter>
  mimeType?: Maybe<IStringFilter>
  size?: Maybe<IFloatFilter>
  assetId?: Maybe<IStringFilter>
  path?: Maybe<IStringFilter>
  url?: Maybe<IStringFilter>
  metadata?: Maybe<ISanityImageMetadataFilter>
  source?: Maybe<ISanityAssetSourceDataFilter>
}

export type ISanityImageAssetSorting = {
  _id?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  _createdAt?: Maybe<ISortOrder>
  _updatedAt?: Maybe<ISortOrder>
  _rev?: Maybe<ISortOrder>
  _key?: Maybe<ISortOrder>
  originalFilename?: Maybe<ISortOrder>
  label?: Maybe<ISortOrder>
  title?: Maybe<ISortOrder>
  description?: Maybe<ISortOrder>
  altText?: Maybe<ISortOrder>
  sha1hash?: Maybe<ISortOrder>
  extension?: Maybe<ISortOrder>
  mimeType?: Maybe<ISortOrder>
  size?: Maybe<ISortOrder>
  assetId?: Maybe<ISortOrder>
  path?: Maybe<ISortOrder>
  url?: Maybe<ISortOrder>
  metadata?: Maybe<ISanityImageMetadataSorting>
  source?: Maybe<ISanityAssetSourceDataSorting>
}

export type ISanityImageCrop = {
  __typename?: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export type ISanityImageCropFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  top?: Maybe<IFloatFilter>
  bottom?: Maybe<IFloatFilter>
  left?: Maybe<IFloatFilter>
  right?: Maybe<IFloatFilter>
}

export type ISanityImageCropSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  top?: Maybe<ISortOrder>
  bottom?: Maybe<ISortOrder>
  left?: Maybe<ISortOrder>
  right?: Maybe<ISortOrder>
}

export type ISanityImageDimensions = {
  __typename?: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ISanityImageDimensionsFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  height?: Maybe<IFloatFilter>
  width?: Maybe<IFloatFilter>
  aspectRatio?: Maybe<IFloatFilter>
}

export type ISanityImageDimensionsSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  height?: Maybe<ISortOrder>
  width?: Maybe<ISortOrder>
  aspectRatio?: Maybe<ISortOrder>
}

export type ISanityImageHotspot = {
  __typename?: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type ISanityImageHotspotFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  x?: Maybe<IFloatFilter>
  y?: Maybe<IFloatFilter>
  height?: Maybe<IFloatFilter>
  width?: Maybe<IFloatFilter>
}

export type ISanityImageHotspotSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  x?: Maybe<ISortOrder>
  y?: Maybe<ISortOrder>
  height?: Maybe<ISortOrder>
  width?: Maybe<ISortOrder>
}

export type ISanityImageMetadata = {
  __typename?: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<IGeopoint>
  dimensions?: Maybe<ISanityImageDimensions>
  palette?: Maybe<ISanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
}

export type ISanityImageMetadataFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  location?: Maybe<IGeopointFilter>
  dimensions?: Maybe<ISanityImageDimensionsFilter>
  palette?: Maybe<ISanityImagePaletteFilter>
  lqip?: Maybe<IStringFilter>
  hasAlpha?: Maybe<IBooleanFilter>
  isOpaque?: Maybe<IBooleanFilter>
}

export type ISanityImageMetadataSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  location?: Maybe<IGeopointSorting>
  dimensions?: Maybe<ISanityImageDimensionsSorting>
  palette?: Maybe<ISanityImagePaletteSorting>
  lqip?: Maybe<ISortOrder>
  hasAlpha?: Maybe<ISortOrder>
  isOpaque?: Maybe<ISortOrder>
}

export type ISanityImagePalette = {
  __typename?: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<ISanityImagePaletteSwatch>
  lightVibrant?: Maybe<ISanityImagePaletteSwatch>
  darkVibrant?: Maybe<ISanityImagePaletteSwatch>
  vibrant?: Maybe<ISanityImagePaletteSwatch>
  dominant?: Maybe<ISanityImagePaletteSwatch>
  lightMuted?: Maybe<ISanityImagePaletteSwatch>
  muted?: Maybe<ISanityImagePaletteSwatch>
}

export type ISanityImagePaletteFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  darkMuted?: Maybe<ISanityImagePaletteSwatchFilter>
  lightVibrant?: Maybe<ISanityImagePaletteSwatchFilter>
  darkVibrant?: Maybe<ISanityImagePaletteSwatchFilter>
  vibrant?: Maybe<ISanityImagePaletteSwatchFilter>
  dominant?: Maybe<ISanityImagePaletteSwatchFilter>
  lightMuted?: Maybe<ISanityImagePaletteSwatchFilter>
  muted?: Maybe<ISanityImagePaletteSwatchFilter>
}

export type ISanityImagePaletteSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  darkMuted?: Maybe<ISanityImagePaletteSwatchSorting>
  lightVibrant?: Maybe<ISanityImagePaletteSwatchSorting>
  darkVibrant?: Maybe<ISanityImagePaletteSwatchSorting>
  vibrant?: Maybe<ISanityImagePaletteSwatchSorting>
  dominant?: Maybe<ISanityImagePaletteSwatchSorting>
  lightMuted?: Maybe<ISanityImagePaletteSwatchSorting>
  muted?: Maybe<ISanityImagePaletteSwatchSorting>
}

export type ISanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type ISanityImagePaletteSwatchFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  background?: Maybe<IStringFilter>
  foreground?: Maybe<IStringFilter>
  population?: Maybe<IFloatFilter>
  title?: Maybe<IStringFilter>
}

export type ISanityImagePaletteSwatchSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  background?: Maybe<ISortOrder>
  foreground?: Maybe<ISortOrder>
  population?: Maybe<ISortOrder>
  title?: Maybe<ISortOrder>
}

export type ISanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>
}

export type ISlug = {
  __typename?: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type ISlugFilter = {
  _key?: Maybe<IStringFilter>
  _type?: Maybe<IStringFilter>
  current?: Maybe<IStringFilter>
}

export type ISlugSorting = {
  _key?: Maybe<ISortOrder>
  _type?: Maybe<ISortOrder>
  current?: Maybe<ISortOrder>
}

export enum ISortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type ISpan = {
  __typename?: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type IStringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  nin?: Maybe<Array<Scalars['String']>>
}

export type IRealizationPartsFragment = { __typename?: 'Realizations' } & Pick<
  IRealizations,
  '_id' | 'name' | 'description'
> & {
    slug?: Maybe<{ __typename?: 'Slug' } & Pick<ISlug, 'current'>>
    images?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Image' } & {
            asset?: Maybe<
              { __typename?: 'SanityImageAsset' } & Pick<
                ISanityImageAsset,
                'assetId' | 'originalFilename' | 'url'
              >
            >
          }
        >
      >
    >
  }

export type IAllRealizationsQueryVariables = Exact<{ [key: string]: never }>

export type IAllRealizationsQuery = { __typename?: 'RootQuery' } & {
  allRealizations: Array<{ __typename?: 'Realizations' } & IRealizationPartsFragment>
}

export type IRealizationBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type IRealizationBySlugQuery = { __typename?: 'RootQuery' } & {
  realizationBySlug: Array<
    { __typename?: 'Realizations' } & Pick<IRealizations, 'name'> & {
        images?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Image' } & {
                asset?: Maybe<{ __typename?: 'SanityImageAsset' } & Pick<ISanityImageAsset, 'url'>>
              }
            >
          >
        >
      }
  >
}

export const RealizationPartsFragmentDoc = gql`
  fragment RealizationParts on Realizations {
    _id
    name
    description
    slug {
      current
    }
    images {
      asset {
        assetId
        originalFilename
        url
      }
    }
  }
`
export const AllRealizationsDocument = gql`
  query AllRealizations {
    allRealizations {
      ...RealizationParts
    }
  }
  ${RealizationPartsFragmentDoc}
`
export const RealizationBySlugDocument = gql`
  query RealizationBySlug($slug: String!) {
    realizationBySlug: allRealizations(where: { slug: { current: { eq: $slug } } }) {
      name
      images {
        asset {
          url
        }
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllRealizations(
      variables?: IAllRealizationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IAllRealizationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IAllRealizationsQuery>(AllRealizationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AllRealizations'
      )
    },
    RealizationBySlug(
      variables: IRealizationBySlugQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IRealizationBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IRealizationBySlugQuery>(RealizationBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'RealizationBySlug'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
