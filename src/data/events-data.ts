export let data: {
  id: number;
  title: string;
  summary: string;
  eventThumbnailUrl: string;
  numberOfReviews: string;
  typeOfEvent: [string, string, string];
  slug: string;
}[] = [
  {
    id: 1,
    title: "The Beekeeper",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/39fb/fb3d/e8216ac7806b93d93077513c82e8fd2a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9bJtv~01LEdGZxPNfbm0H4sxcbpUDWAr4axlNhyLwb8zRoo68yuU-pAAtdkuL4uT8~CRVggQ2595-iE4jI2fr3xjseE5I81tQXmk8mAgJdgNunbde9xzqegT7GNlp0fJHK7xqB5caH4qFr4AD3zkLQvvlYbudIbTojo7i-h6gbaSc2ew9aLoH1eZi2d1zptb9yMbve-MzyVZJoweJ~wC7bRO0PdRkWSAd0YUopn-N8FRQc9M6J5klNdQt9yRonmx0nnhtV07SjWk2tx5JrQAHuANFKkIBkMdH~WWEEKeq9jWvWFGCYMmHE483Mq7FY8J6GoTRnYbicoorkZpAyw8A__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "The-Beekeeper",
  },
  {
    id: 2,
    title: "Cabrini",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/ca99/b2b1/253ae1335bda53c7d96cbf37d2d6cf81?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADjZE1JvnS1B49DvywBNs3ldcVJwW~ivf5ABTQq6n5op4o30w1jvhuGuKVaNtTQGZlLcNI1u3goV0NMmpqVBXnkhuJGyn3OOpG0TAZln-N8FcY1VAvfO4NbAoQ93zCLLp-RJx6cyDf7et98uLYrAaebr2HqZDUkqXpQcmkMuPhf34H1zFMtEi5STCHjPYejFiz3WIJU69LpNdSfDtZpa7I3XekIx0WTVAte5-zzDN1FngZWCT2x8o1Al8x~v-gJ48nQ5ibdXDRUSneww7xSiyyqvRk5ZCrEh4PkNmM07q2hNDlNYw-NIRUx5YXDPKSu80o4NtOa7xlmvEFl6TI3l5A__",
    numberOfReviews: "4k",
    typeOfEvent: ["Biography", "Drama", "History"],
    slug: "Cabrini",
  },
  {
    id: 3,
    title: "Imaginary",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2bd7/a604/a0aacaf46ed69849ff405ff385914b2f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBobB8I-QkwWN0OgG2S8otiQs6mKm1bw6Do0z3HnEw0gJ393x3057F5lWnZDz3elXvpZ0GD1jHmIQ3wq9xK4GwOKiw-FmxhrRoqEZ8-Ek1caYz5Mb3Z-1KBxlCeT9FbxCT1bUGLhDsX6EIVEFiuv0bLatJNo1-l4nyVWkiaNbr59R7wRkcWnRTkpTCJ8kCTEwfmRobQ6zwHaCRE04nVYmEKtPcDeGAOCpbUW0rNz1Dv-9WDiv3~YFH0EvbYWwr-jDWUZK4yda05UICfr81JKpLRdedrZfWsaA9Vb-cWF4doRtOIA100L0LKeCNo5iv~527Wt7-1AVlEEH6d8BBpTfA__",
    numberOfReviews: "3k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Imaginary",
  },
  {
    id: 4,
    title: "Collateral",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/10a0/3937/018882b099ce6d5501022bba6239431f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY5GakIBX52uMdyA6-pNTi3xfdLzimilg-XBBwPPxS1ApWW29LyP9nkOX4y0m7HJ8Wce9ZNbcvfeZHHJddBMkgmuAor~JbD8gxhUxbrSzyBDLaHXezb7fsjTa9NtC9WwWQxMLlFb1qTjpHfxxORE2rsy116CxLsKrsnZkKK~nxOcY4ohYtY1W2MV2vxFXwf~NZka6U8SOghYyXDEaoe~q1SywAeqE3rs1bQ30Q4dNpeAwtqsSRESIdtWIbzTCoXY0SXoApAY3ovcyI9GFYrZQJillxWIpEXv4POVjAb~w9JecoqhRMMQPjEoBZkPvKwFCaeyl8N70DPOLNQsPFAKTA__",
    numberOfReviews: "4k",
    typeOfEvent: ["Crime", "Drama", "Mystery"],
    slug: "Collateral",
  },
  {
    id: 5,
    title: "The Family Plan",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6cdc/68bd/4a9b1092d39cbd02e345c81d22642ed1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWYaNHhbRsXNhK6GEvRHxjZaD150JYLhuZok8wEPeIBrDxs3Pum8NgsiVU5jjeYsKNd32q7fxU6LlolcYk29vnHldgmNLlSEES-zBBZlITFcHNdkOHnFp5mYC6qpKTMtM36x3t3IzZ6KqYcHP4tzO79zdo-WSfzNUMeLsQRS-usxMCbAjLUG9cwX2mCzk4Ae74dOO4qWT8N2T8ncWENOgUYBK9aYMjQjZUgjAGtBrR5FTtuUTRIeAk8qEJQRuE~cEdw772a2rkJBZB45xpqL1OITgI3fAwAthAx61Zb~Hh4eQ3QQ9LovObFLykvIbNWWDjmqJyKmbCR4SifOAjwOWQ__",
    numberOfReviews: "4k",
    typeOfEvent: ["Action", "Comedy", "Drama"],
    slug: "The-Family-Plan",
  },
  {
    id: 6,
    title: "Us",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6f67/526f/2c75abc060982adc36b84fb0c7294b33?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adkkYVJgmjHA~OenZVkFQK7BVVyGCmDPwpA7ngcgrpbHx~u2za7kxIL1u1uSTXtK0j4UBo~BfvkXidZRszr3A7EwwlvH5YyNOcf~VVstKGILuHeezX5hmYIgNJPbrpvc8a5JR8fUrO5z2Lr9xI~2QsjJscb1ca5Qiiak5EUzkyI30IE7S77ExONxxWdkyhLkL9CMPKa0c8U1aCOQq3Ilpn6YHn5k1xx5MnsMowZg2D0OC1D0IWEvVuU9sd2O8j3cx-rhNu3Vv3h4l9sxQXUOpbNioWRJn1bwuGyGbugJ54oa3hn0a3hsAj9GkI-ENQ44Gyo3Z1RJ8Dzqatc9YonDSg__",
    numberOfReviews: "4k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Us",
  },
  {
    id: 7,
    title: "Fall",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/e44e/a6d4/4a4a51d600f0349ffbacba98fe47d31a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViRQWpXZqCFB-DRHndI5H2Suy-m5c3OOEZkcIZI6aSNBLEpAnl7dbRnOVm2jrshnaVqjVpixfkTIFc8bhmPzzLRLlp0nhclQyVVrUh2mvXDc5UHkLy0FVr-2dfKikeMhHqNkkNCktGYu2dpv~4lg1UhweaOdogsuf8SO3hvTYK~9xqlEQTkHjeqkFHX69of5gfADwZBddgHM9xgEAx4B7~GFDL6BkePu14M1rYJwxZdULEf1Iztw6qB2dl4MxlGNcK~30iM-VYRkOxKPF31Xo7mwtCD3l07FBvLLpCImh2DqjiCNPkDgq4NBEu03MA7GPTJCIUmOLsfM0TdW5qmXfQ__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "Fall",
  },
  {
    id: 8,
    title: "James Franco: 127 Hours",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2372/0380/8fd8fd1f1d11f35386a72d42f68ea416?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCRTtoYGn~ksKM3axA1DMwiXkY-VpqeXAEcM~EniKW7uLmBmHLLGTvyCWOZRjTixMnbEUaxLfTjXK6GWhE-pcNiPCfd56bsP2lbDQIRW2vr4mmExIzpak7w8cuIKL2bRQRrznxPNTjXwJAcVlcmWf0Oostu2O~XIo-0~IbhzdS~cLB0peEBPYGvEROXe1Dj2BHvsWNan~Dn6E4tjAbnRoLHdG7dSY1tJpOVLd1SOL1q-ql-rtptrwGEyg475d0R3pfPYSZPTzQU9oz2JbApYzuxNOQPU1eYYqDf54akqmY9PZXMnnZnGJQLAyFzBqCxRCCwZe9zgXwsl1RU6jMOXPw__",
    numberOfReviews: "5k",
    typeOfEvent: ["Biography", "Adventure", "Drama"],
    slug: "James-Franco:-127-Hours",
  },
  {
    id: 9,
    title: "The Beekeeper",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/39fb/fb3d/e8216ac7806b93d93077513c82e8fd2a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9bJtv~01LEdGZxPNfbm0H4sxcbpUDWAr4axlNhyLwb8zRoo68yuU-pAAtdkuL4uT8~CRVggQ2595-iE4jI2fr3xjseE5I81tQXmk8mAgJdgNunbde9xzqegT7GNlp0fJHK7xqB5caH4qFr4AD3zkLQvvlYbudIbTojo7i-h6gbaSc2ew9aLoH1eZi2d1zptb9yMbve-MzyVZJoweJ~wC7bRO0PdRkWSAd0YUopn-N8FRQc9M6J5klNdQt9yRonmx0nnhtV07SjWk2tx5JrQAHuANFKkIBkMdH~WWEEKeq9jWvWFGCYMmHE483Mq7FY8J6GoTRnYbicoorkZpAyw8A__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "The-Beekeeper",
  },
  {
    id: 10,
    title: "Cabrini",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/ca99/b2b1/253ae1335bda53c7d96cbf37d2d6cf81?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADjZE1JvnS1B49DvywBNs3ldcVJwW~ivf5ABTQq6n5op4o30w1jvhuGuKVaNtTQGZlLcNI1u3goV0NMmpqVBXnkhuJGyn3OOpG0TAZln-N8FcY1VAvfO4NbAoQ93zCLLp-RJx6cyDf7et98uLYrAaebr2HqZDUkqXpQcmkMuPhf34H1zFMtEi5STCHjPYejFiz3WIJU69LpNdSfDtZpa7I3XekIx0WTVAte5-zzDN1FngZWCT2x8o1Al8x~v-gJ48nQ5ibdXDRUSneww7xSiyyqvRk5ZCrEh4PkNmM07q2hNDlNYw-NIRUx5YXDPKSu80o4NtOa7xlmvEFl6TI3l5A__",
    numberOfReviews: "4k",
    typeOfEvent: ["Biography", "Drama", "History"],
    slug: "Cabrini",
  },
  {
    id: 11,
    title: "Imaginary",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2bd7/a604/a0aacaf46ed69849ff405ff385914b2f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBobB8I-QkwWN0OgG2S8otiQs6mKm1bw6Do0z3HnEw0gJ393x3057F5lWnZDz3elXvpZ0GD1jHmIQ3wq9xK4GwOKiw-FmxhrRoqEZ8-Ek1caYz5Mb3Z-1KBxlCeT9FbxCT1bUGLhDsX6EIVEFiuv0bLatJNo1-l4nyVWkiaNbr59R7wRkcWnRTkpTCJ8kCTEwfmRobQ6zwHaCRE04nVYmEKtPcDeGAOCpbUW0rNz1Dv-9WDiv3~YFH0EvbYWwr-jDWUZK4yda05UICfr81JKpLRdedrZfWsaA9Vb-cWF4doRtOIA100L0LKeCNo5iv~527Wt7-1AVlEEH6d8BBpTfA__",
    numberOfReviews: "3k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Imaginary",
  },
  {
    id: 12,
    title: "Collateral",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/10a0/3937/018882b099ce6d5501022bba6239431f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY5GakIBX52uMdyA6-pNTi3xfdLzimilg-XBBwPPxS1ApWW29LyP9nkOX4y0m7HJ8Wce9ZNbcvfeZHHJddBMkgmuAor~JbD8gxhUxbrSzyBDLaHXezb7fsjTa9NtC9WwWQxMLlFb1qTjpHfxxORE2rsy116CxLsKrsnZkKK~nxOcY4ohYtY1W2MV2vxFXwf~NZka6U8SOghYyXDEaoe~q1SywAeqE3rs1bQ30Q4dNpeAwtqsSRESIdtWIbzTCoXY0SXoApAY3ovcyI9GFYrZQJillxWIpEXv4POVjAb~w9JecoqhRMMQPjEoBZkPvKwFCaeyl8N70DPOLNQsPFAKTA__",
    numberOfReviews: "4k",
    typeOfEvent: ["Crime", "Drama", "Mystery"],
    slug: "Collateral",
  },
  {
    id: 13,
    title: "The Family Plan",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6cdc/68bd/4a9b1092d39cbd02e345c81d22642ed1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWYaNHhbRsXNhK6GEvRHxjZaD150JYLhuZok8wEPeIBrDxs3Pum8NgsiVU5jjeYsKNd32q7fxU6LlolcYk29vnHldgmNLlSEES-zBBZlITFcHNdkOHnFp5mYC6qpKTMtM36x3t3IzZ6KqYcHP4tzO79zdo-WSfzNUMeLsQRS-usxMCbAjLUG9cwX2mCzk4Ae74dOO4qWT8N2T8ncWENOgUYBK9aYMjQjZUgjAGtBrR5FTtuUTRIeAk8qEJQRuE~cEdw772a2rkJBZB45xpqL1OITgI3fAwAthAx61Zb~Hh4eQ3QQ9LovObFLykvIbNWWDjmqJyKmbCR4SifOAjwOWQ__",
    numberOfReviews: "4k",
    typeOfEvent: ["Action", "Comedy", "Drama"],
    slug: "The-Family-Plan",
  },
  {
    id: 14,
    title: "Us",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6f67/526f/2c75abc060982adc36b84fb0c7294b33?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adkkYVJgmjHA~OenZVkFQK7BVVyGCmDPwpA7ngcgrpbHx~u2za7kxIL1u1uSTXtK0j4UBo~BfvkXidZRszr3A7EwwlvH5YyNOcf~VVstKGILuHeezX5hmYIgNJPbrpvc8a5JR8fUrO5z2Lr9xI~2QsjJscb1ca5Qiiak5EUzkyI30IE7S77ExONxxWdkyhLkL9CMPKa0c8U1aCOQq3Ilpn6YHn5k1xx5MnsMowZg2D0OC1D0IWEvVuU9sd2O8j3cx-rhNu3Vv3h4l9sxQXUOpbNioWRJn1bwuGyGbugJ54oa3hn0a3hsAj9GkI-ENQ44Gyo3Z1RJ8Dzqatc9YonDSg__",
    numberOfReviews: "4k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Us",
  },
  {
    id: 15,
    title: "Fall",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/e44e/a6d4/4a4a51d600f0349ffbacba98fe47d31a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViRQWpXZqCFB-DRHndI5H2Suy-m5c3OOEZkcIZI6aSNBLEpAnl7dbRnOVm2jrshnaVqjVpixfkTIFc8bhmPzzLRLlp0nhclQyVVrUh2mvXDc5UHkLy0FVr-2dfKikeMhHqNkkNCktGYu2dpv~4lg1UhweaOdogsuf8SO3hvTYK~9xqlEQTkHjeqkFHX69of5gfADwZBddgHM9xgEAx4B7~GFDL6BkePu14M1rYJwxZdULEf1Iztw6qB2dl4MxlGNcK~30iM-VYRkOxKPF31Xo7mwtCD3l07FBvLLpCImh2DqjiCNPkDgq4NBEu03MA7GPTJCIUmOLsfM0TdW5qmXfQ__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "Fall",
  },
  {
    id: 16,
    title: "James Franco: 127 Hours",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2372/0380/8fd8fd1f1d11f35386a72d42f68ea416?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCRTtoYGn~ksKM3axA1DMwiXkY-VpqeXAEcM~EniKW7uLmBmHLLGTvyCWOZRjTixMnbEUaxLfTjXK6GWhE-pcNiPCfd56bsP2lbDQIRW2vr4mmExIzpak7w8cuIKL2bRQRrznxPNTjXwJAcVlcmWf0Oostu2O~XIo-0~IbhzdS~cLB0peEBPYGvEROXe1Dj2BHvsWNan~Dn6E4tjAbnRoLHdG7dSY1tJpOVLd1SOL1q-ql-rtptrwGEyg475d0R3pfPYSZPTzQU9oz2JbApYzuxNOQPU1eYYqDf54akqmY9PZXMnnZnGJQLAyFzBqCxRCCwZe9zgXwsl1RU6jMOXPw__",
    numberOfReviews: "5k",
    typeOfEvent: ["Biography", "Adventure", "Drama"],
    slug: "James-Franco:-127-Hours",
  },
  {
    id: 17,
    title: "The Beekeeper",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/39fb/fb3d/e8216ac7806b93d93077513c82e8fd2a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C9bJtv~01LEdGZxPNfbm0H4sxcbpUDWAr4axlNhyLwb8zRoo68yuU-pAAtdkuL4uT8~CRVggQ2595-iE4jI2fr3xjseE5I81tQXmk8mAgJdgNunbde9xzqegT7GNlp0fJHK7xqB5caH4qFr4AD3zkLQvvlYbudIbTojo7i-h6gbaSc2ew9aLoH1eZi2d1zptb9yMbve-MzyVZJoweJ~wC7bRO0PdRkWSAd0YUopn-N8FRQc9M6J5klNdQt9yRonmx0nnhtV07SjWk2tx5JrQAHuANFKkIBkMdH~WWEEKeq9jWvWFGCYMmHE483Mq7FY8J6GoTRnYbicoorkZpAyw8A__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "The-Beekeeper",
  },
  {
    id: 18,
    title: "Cabrini",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/ca99/b2b1/253ae1335bda53c7d96cbf37d2d6cf81?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADjZE1JvnS1B49DvywBNs3ldcVJwW~ivf5ABTQq6n5op4o30w1jvhuGuKVaNtTQGZlLcNI1u3goV0NMmpqVBXnkhuJGyn3OOpG0TAZln-N8FcY1VAvfO4NbAoQ93zCLLp-RJx6cyDf7et98uLYrAaebr2HqZDUkqXpQcmkMuPhf34H1zFMtEi5STCHjPYejFiz3WIJU69LpNdSfDtZpa7I3XekIx0WTVAte5-zzDN1FngZWCT2x8o1Al8x~v-gJ48nQ5ibdXDRUSneww7xSiyyqvRk5ZCrEh4PkNmM07q2hNDlNYw-NIRUx5YXDPKSu80o4NtOa7xlmvEFl6TI3l5A__",
    numberOfReviews: "4k",
    typeOfEvent: ["Biography", "Drama", "History"],
    slug: "Cabrini",
  },
  {
    id: 19,
    title: "Imaginary",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2bd7/a604/a0aacaf46ed69849ff405ff385914b2f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBobB8I-QkwWN0OgG2S8otiQs6mKm1bw6Do0z3HnEw0gJ393x3057F5lWnZDz3elXvpZ0GD1jHmIQ3wq9xK4GwOKiw-FmxhrRoqEZ8-Ek1caYz5Mb3Z-1KBxlCeT9FbxCT1bUGLhDsX6EIVEFiuv0bLatJNo1-l4nyVWkiaNbr59R7wRkcWnRTkpTCJ8kCTEwfmRobQ6zwHaCRE04nVYmEKtPcDeGAOCpbUW0rNz1Dv-9WDiv3~YFH0EvbYWwr-jDWUZK4yda05UICfr81JKpLRdedrZfWsaA9Vb-cWF4doRtOIA100L0LKeCNo5iv~527Wt7-1AVlEEH6d8BBpTfA__",
    numberOfReviews: "3k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Imaginary",
  },
  {
    id: 20,
    title: "Collateral",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/10a0/3937/018882b099ce6d5501022bba6239431f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY5GakIBX52uMdyA6-pNTi3xfdLzimilg-XBBwPPxS1ApWW29LyP9nkOX4y0m7HJ8Wce9ZNbcvfeZHHJddBMkgmuAor~JbD8gxhUxbrSzyBDLaHXezb7fsjTa9NtC9WwWQxMLlFb1qTjpHfxxORE2rsy116CxLsKrsnZkKK~nxOcY4ohYtY1W2MV2vxFXwf~NZka6U8SOghYyXDEaoe~q1SywAeqE3rs1bQ30Q4dNpeAwtqsSRESIdtWIbzTCoXY0SXoApAY3ovcyI9GFYrZQJillxWIpEXv4POVjAb~w9JecoqhRMMQPjEoBZkPvKwFCaeyl8N70DPOLNQsPFAKTA__",
    numberOfReviews: "4k",
    typeOfEvent: ["Crime", "Drama", "Mystery"],
    slug: "Collateral",
  },
  {
    id: 21,
    title: "The Family Plan",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6cdc/68bd/4a9b1092d39cbd02e345c81d22642ed1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWYaNHhbRsXNhK6GEvRHxjZaD150JYLhuZok8wEPeIBrDxs3Pum8NgsiVU5jjeYsKNd32q7fxU6LlolcYk29vnHldgmNLlSEES-zBBZlITFcHNdkOHnFp5mYC6qpKTMtM36x3t3IzZ6KqYcHP4tzO79zdo-WSfzNUMeLsQRS-usxMCbAjLUG9cwX2mCzk4Ae74dOO4qWT8N2T8ncWENOgUYBK9aYMjQjZUgjAGtBrR5FTtuUTRIeAk8qEJQRuE~cEdw772a2rkJBZB45xpqL1OITgI3fAwAthAx61Zb~Hh4eQ3QQ9LovObFLykvIbNWWDjmqJyKmbCR4SifOAjwOWQ__",
    numberOfReviews: "4k",
    typeOfEvent: ["Action", "Comedy", "Drama"],
    slug: "The-Family-Plan",
  },
  {
    id: 22,
    title: "Us",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6f67/526f/2c75abc060982adc36b84fb0c7294b33?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adkkYVJgmjHA~OenZVkFQK7BVVyGCmDPwpA7ngcgrpbHx~u2za7kxIL1u1uSTXtK0j4UBo~BfvkXidZRszr3A7EwwlvH5YyNOcf~VVstKGILuHeezX5hmYIgNJPbrpvc8a5JR8fUrO5z2Lr9xI~2QsjJscb1ca5Qiiak5EUzkyI30IE7S77ExONxxWdkyhLkL9CMPKa0c8U1aCOQq3Ilpn6YHn5k1xx5MnsMowZg2D0OC1D0IWEvVuU9sd2O8j3cx-rhNu3Vv3h4l9sxQXUOpbNioWRJn1bwuGyGbugJ54oa3hn0a3hsAj9GkI-ENQ44Gyo3Z1RJ8Dzqatc9YonDSg__",
    numberOfReviews: "4k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Us",
  },
  {
    id: 23,
    title: "Fall",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/e44e/a6d4/4a4a51d600f0349ffbacba98fe47d31a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViRQWpXZqCFB-DRHndI5H2Suy-m5c3OOEZkcIZI6aSNBLEpAnl7dbRnOVm2jrshnaVqjVpixfkTIFc8bhmPzzLRLlp0nhclQyVVrUh2mvXDc5UHkLy0FVr-2dfKikeMhHqNkkNCktGYu2dpv~4lg1UhweaOdogsuf8SO3hvTYK~9xqlEQTkHjeqkFHX69of5gfADwZBddgHM9xgEAx4B7~GFDL6BkePu14M1rYJwxZdULEf1Iztw6qB2dl4MxlGNcK~30iM-VYRkOxKPF31Xo7mwtCD3l07FBvLLpCImh2DqjiCNPkDgq4NBEu03MA7GPTJCIUmOLsfM0TdW5qmXfQ__",
    numberOfReviews: "5k",
    typeOfEvent: ["Action", "Adventure", "Thriller"],
    slug: "Fall",
  },
  {
    id: 24,
    title: "James Franco: 127 Hours",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2372/0380/8fd8fd1f1d11f35386a72d42f68ea416?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCRTtoYGn~ksKM3axA1DMwiXkY-VpqeXAEcM~EniKW7uLmBmHLLGTvyCWOZRjTixMnbEUaxLfTjXK6GWhE-pcNiPCfd56bsP2lbDQIRW2vr4mmExIzpak7w8cuIKL2bRQRrznxPNTjXwJAcVlcmWf0Oostu2O~XIo-0~IbhzdS~cLB0peEBPYGvEROXe1Dj2BHvsWNan~Dn6E4tjAbnRoLHdG7dSY1tJpOVLd1SOL1q-ql-rtptrwGEyg475d0R3pfPYSZPTzQU9oz2JbApYzuxNOQPU1eYYqDf54akqmY9PZXMnnZnGJQLAyFzBqCxRCCwZe9zgXwsl1RU6jMOXPw__",
    numberOfReviews: "5k",
    typeOfEvent: ["Biography", "Adventure", "Drama"],
    slug: "James-Franco:-127-Hours",
  },
  {
    id: 25,
    title: "Cabrini",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/ca99/b2b1/253ae1335bda53c7d96cbf37d2d6cf81?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADjZE1JvnS1B49DvywBNs3ldcVJwW~ivf5ABTQq6n5op4o30w1jvhuGuKVaNtTQGZlLcNI1u3goV0NMmpqVBXnkhuJGyn3OOpG0TAZln-N8FcY1VAvfO4NbAoQ93zCLLp-RJx6cyDf7et98uLYrAaebr2HqZDUkqXpQcmkMuPhf34H1zFMtEi5STCHjPYejFiz3WIJU69LpNdSfDtZpa7I3XekIx0WTVAte5-zzDN1FngZWCT2x8o1Al8x~v-gJ48nQ5ibdXDRUSneww7xSiyyqvRk5ZCrEh4PkNmM07q2hNDlNYw-NIRUx5YXDPKSu80o4NtOa7xlmvEFl6TI3l5A__",
    numberOfReviews: "4k",
    typeOfEvent: ["Biography", "Drama", "History"],
    slug: "Cabrini",
  },
  {
    id: 26,
    title: "Imaginary",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/2bd7/a604/a0aacaf46ed69849ff405ff385914b2f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBobB8I-QkwWN0OgG2S8otiQs6mKm1bw6Do0z3HnEw0gJ393x3057F5lWnZDz3elXvpZ0GD1jHmIQ3wq9xK4GwOKiw-FmxhrRoqEZ8-Ek1caYz5Mb3Z-1KBxlCeT9FbxCT1bUGLhDsX6EIVEFiuv0bLatJNo1-l4nyVWkiaNbr59R7wRkcWnRTkpTCJ8kCTEwfmRobQ6zwHaCRE04nVYmEKtPcDeGAOCpbUW0rNz1Dv-9WDiv3~YFH0EvbYWwr-jDWUZK4yda05UICfr81JKpLRdedrZfWsaA9Vb-cWF4doRtOIA100L0LKeCNo5iv~527Wt7-1AVlEEH6d8BBpTfA__",
    numberOfReviews: "3k",
    typeOfEvent: ["Horror", "Mystery", "Thriller"],
    slug: "Imaginary",
  },
  {
    id: 27,
    title: "Collateral",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/10a0/3937/018882b099ce6d5501022bba6239431f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY5GakIBX52uMdyA6-pNTi3xfdLzimilg-XBBwPPxS1ApWW29LyP9nkOX4y0m7HJ8Wce9ZNbcvfeZHHJddBMkgmuAor~JbD8gxhUxbrSzyBDLaHXezb7fsjTa9NtC9WwWQxMLlFb1qTjpHfxxORE2rsy116CxLsKrsnZkKK~nxOcY4ohYtY1W2MV2vxFXwf~NZka6U8SOghYyXDEaoe~q1SywAeqE3rs1bQ30Q4dNpeAwtqsSRESIdtWIbzTCoXY0SXoApAY3ovcyI9GFYrZQJillxWIpEXv4POVjAb~w9JecoqhRMMQPjEoBZkPvKwFCaeyl8N70DPOLNQsPFAKTA__",
    numberOfReviews: "4k",
    typeOfEvent: ["Crime", "Drama", "Mystery"],
    slug: "Collateral",
  },
  {
    id: 28,
    title: "The Family Plan",
    summary:
      "Sdflkdfl sdfl djflkjsd f sdkjflkjds lfkjsl dkfjlsdj fkdf lsdfkld fldsf dsflk dfj dfsldjkf  kjdfl sjd",
    eventThumbnailUrl:
      "https://s3-alpha-sig.figma.com/img/6cdc/68bd/4a9b1092d39cbd02e345c81d22642ed1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWYaNHhbRsXNhK6GEvRHxjZaD150JYLhuZok8wEPeIBrDxs3Pum8NgsiVU5jjeYsKNd32q7fxU6LlolcYk29vnHldgmNLlSEES-zBBZlITFcHNdkOHnFp5mYC6qpKTMtM36x3t3IzZ6KqYcHP4tzO79zdo-WSfzNUMeLsQRS-usxMCbAjLUG9cwX2mCzk4Ae74dOO4qWT8N2T8ncWENOgUYBK9aYMjQjZUgjAGtBrR5FTtuUTRIeAk8qEJQRuE~cEdw772a2rkJBZB45xpqL1OITgI3fAwAthAx61Zb~Hh4eQ3QQ9LovObFLykvIbNWWDjmqJyKmbCR4SifOAjwOWQ__",
    numberOfReviews: "4k",
    typeOfEvent: ["Action", "Comedy", "Drama"],
    slug: "The-Family-Plan",
  },
];
