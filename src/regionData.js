import { readable } from 'svelte/store'

const regions = [
  {
    address_parts: [
      'Bronx',
      'NY'
    ],
    bounds: {
      points: '}fexFxagbMntAiAhRzAnQ{BjSqO~RcNcAyKPkK|@gFjCeExJmGbJgYfHmQdLeL_d@ac@kRe\\eDam@dQq[nIk\\lCwm@Pyi@{f@eZpMic@`Emo@}Qcv@dL{z@aIqg@sYbNoQu{@dEku@f[um@xVcv@^{`@}WoKkX|Gql@ng@}Ttq@mq@`PwV~f@yx@uCcb@gGcDmVvIwSbAyYgFuWrk@mZna@oYkBs`@kZaIkd@{Bc]PcX|^w^sMq`@Yqa@mG_d@cJkUv[{e@|{CyDlc@rG~h@eDvAmDdNyEtEyE`UyEiBiFb@HzGwJv\\wDxDcCxHKnHuDxThChTeg@nOuXnu@bLzHnHxHjIbE{BpM_FjIuBbJuD~IbElAcs@trDsC?e@hIsAlLyAdJVl@yRhaAb\\j@lZzHdbCho@rn@rW|@oRfE_LnLsR{B}OoFyCqEqDeDuGkE{FjBiDfGaN~E{Fr@sArH_@xHzBiAtI}C`FpEpGbI_FvHt@`YjGra@|^rWlX|PzMh]hR`TzK|bAh^jJzAn\\qA'
    },
    children: [
      {
        address_parts: [
          'Baychester',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'c}lxFb_uaMpC}GbByDrE}Kh@gAXw@|IeRnCoGtAyBvBkA`CcAbCoAnDcGxCsFuJhCaKnI{KpFwVrK_GtBkGtBaGvAaTdAwBlGmBzGqArDy@nC{@dC~BtBtDpCxGvFdGxE~BbB~J~Ip@\\n@n@zAeEdAyBbAcCzBiFjBaFhA{B'
        },
        children: [],
        id: 243,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Baychester, New York City'
      },
      {
        address_parts: [
          'Bedford Park',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '_xmxFv_`bMzDtCfKbJt@Lh@Cp@@d@dA\\qBh@wDb@uF{EkD}B{AgFuDU[oB{FcA}BbCuE~HaPtByDfGwG|FcEtAcEpEmDaEgB{AwCq@eBq@aAOmAMs@m@sAaAcByB{C{Br@oBbAcBt@{CbAgBt@s@VkHtBsBr@yErAeH~AeDj@eATgBp@yA|@_C`AaALcBNcA`@]XoCdDs@d@gJpDKtB[p@M`@?hABf@zAv@xK~HfApAjAdBjAjA|ThPlVxQ'
        },
        children: [],
        id: 221,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bedford Park, New York City'
      },
      {
        address_parts: [
          'Belmont',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '{bjxF~o~aMXgBbEaTh@aDpCaNub@_IaALk@tAi@`C_@jAkAnGYtCi@tC}@`CgA|BoOf^bF|EfCnCxUvM|@_D`EmMdAiCbBoDi@e@I_@AmA\\Y~@s@x@c@b@?x@HHi@'
        },
        children: [],
        id: 218,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Belmont, New York City'
      },
      {
        address_parts: [
          'Bronxwood',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'y|jxF`|zaMuAsFg@uGLaBEsB{@geAwAm@yImHkOuLUvd@qGrCkAl@aDfCUXcElDeKwLgAaByAeBeCcCkBuAwBgBMda@]xp@E`Fh[`@|GFdIfA|Pd@jH`@bI`BfCkE'
        },
        children: [],
        id: 265,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bronxwood, New York City'
      },
      {
        address_parts: [
          'Castle Hill',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'acfxFfhyaM|j@eS|GsBd}@qM_@cEzB}Bx@wFk@sFD_FvIsPlKoDl@cH}z@mf@wKuAwj@~Q@fFa@tGu`@|nB|Fu@'
        },
        children: [],
        id: 229,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Castle Hill, New York City'
      },
      {
        address_parts: [
          'City Island',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '}tjxFbrkaM`@DDm@jUZzEyG|EjC|Gn@bQjEfWqRfHwDzCqAvBs@~IwKxGiUqMmW{EwEiNNsRxFeKpDoMdEsLbHgBvKkBdDiIdFsA`CmDlEmFbBkCZaAXW?oARgAFgAl@b@hD~Ap@TB~@jB~@bAKpA\\Pf@@|Ab@dATh@\\EhA'
        },
        children: [],
        id: 236,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'City Island, New York City'
      },
      {
        address_parts: [
          'Concourse',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'anhxFdbabMy@~Yk@t[FnOtj@z^bR|\\vNjGxSxRvBrFjAfGTlL`u@}C\\gMbGy]gCkAuEmE}HkJ}EyIkEiHsEuJsDmGaIoMqB}C_C{Byp@gZeMiHoNaGyUcL'
        },
        children: [],
        id: 211,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Concourse, New York City'
      },
      {
        address_parts: [
          'Co-op City',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '_{jxFzrqaMqCsQaJoOcK_H{^jD}TnIqT{@_TMoh@cNoSgDP`C\\fDpDbUfEtTnBtInClItBvFbCpFbAnBtA~BlBlC`BpBjCfC|ClC|BdAbDlApCn@dD`@~GJ~DWhKmC~GyA`HcCtVqJbKoGlNyJbKgC`K}AgBeR'
        },
        children: [],
        id: 234,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Co-op City, New York City'
      },
      {
        address_parts: [
          'Country Club',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'ofgxFndoaMmr@qF_Mb]JtAVjB?nAB`BtB~VmBfAdKbUxCfH`@vAt@OHFjJc@hF@zBPxDW`JW`D]fDWdDa@vD}@k@uAx@y@pAu@rCwBE}AGg@q@oEc@qDyEc[WqCwLw['
        },
        children: [],
        id: 273,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Country Club, New York City'
      },
      {
        address_parts: [
          'Crotona Park East',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'urexFja`bMjUbHnAcIHaABkEo@_EqB}JAsQJwKoBwEsBwEm@wA]{DHsA{@g@uCFuDlBwBe@{DoAkA[aA{DcAeAeDoCaJ_AeD_AkFcCkAvDyOh]wChG{EjKeBhEo@dCa@`Ck@`FvD|DdAx@tApA|A~@pIvEtCpA|AnAbChBrAp@rAd@n@D^PbAD`BKxA_@fBaAx@k@bDkC|HfAzDd@dEpA'
        },
        children: [],
        id: 209,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Crotona Park East, New York City'
      },
      {
        address_parts: [
          'Eastchester',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'anpxFl_qaMsDyRiRcB_K~AvApGmHfDaGtPjc@~KgEjQkBi@~EkOuSyCTjW_@hIaDnJfSlAlILpE[lKb@x@pIpCfIvHhJhJv\\lFfK~GoSbIqXnBcFu@g@kFq@{C_AqEqB}@i@kFkFoEaGyCoFcCqFeGeQuCyLaDoQ'
        },
        children: [],
        id: 246,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Eastchester, New York City'
      },
      {
        address_parts: [
          'East Tremont',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'amhxFd{`bMXsF|@eOZmDn@mK`@mIv@yG`@_Cl@cCfBkEfFcLjCoFhJiSnDaIjAwDo@a@mAsAk@y@mAw@iBo@yBg@iA{@u@sAOCuEuC_Bo@oE_AgBy@sAzDeSh\\cCbDkCg@y@Vc@Zk@ScEo@}Ck@oC|Mk@dDcE`Tc@pCcAIW?}@d@}@n@]\\@jAH^h@d@cBnDgAnCuDnLgAvDxBrAvGjDpGrDdDbBj@`@h@ThHdEjIzDbCvAnPrHlAr@TyF'
        },
        children: [
          {
            address_parts: [
              'West Farms',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: '_qhxFlu}aMf\\tDhJgSnDaIjAwDo@c@mAqAk@{@mAu@iBo@yBi@iAy@u@uAOAuEuC_Bo@oEaAgBw@sAzDeSh\\cCbDkCg@uAl@jWnM'
            },
            children: [],
            id: 219,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'West Farms, New York City'
          }
        ],
        id: 216,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'East Tremont, New York City'
      },
      {
        address_parts: [
          'Edenwald',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'gxoxFv|vaMnFyQ`@eAdIoWmFgKiJw\\wHgJqCiIy@oImKe@qE\\uGGiEQoN_AuAlEiA~EWxAUd@mDbEq@|Ao@lBQvA[vHIl@wBfLe@lDSh@|DlZ~C`O`[sIp@wA~OnHz\\|RLY'
        },
        children: [],
        id: 276,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Edenwald, New York City'
      },
      {
        address_parts: [
          'Fordham',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'w{kxFt{`bM|AbA`FdCtH`EbA\\xB}I`AiEfAaEt@qDzByILcFh@wByUwMgCoCcF}EpOm^bAwB|@aCj@wCXuChAmGvBeH}Bh@mDGsKeAaBz@uBnCuFfFeOlLwAdE}FbEgGxGqD|GaGzLa@p@aB`DlAzCdB|ETZdFrDpCjBfJzG`EpCvEfDfDdCpEzDlBxA'
        },
        children: [],
        id: 214,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Fordham, New York City'
      },
      {
        address_parts: [
          'Highbridge',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '}fexFtagbMQsLkAeGyBuFySmRuNmGuRy]_j@{]MdLLrN|@dUIbRoCjP|bAj^jJzAn\\uA'
        },
        children: [],
        id: 210,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Highbridge, New York City'
      },
      {
        address_parts: [
          'Hunts Point',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '_lbxFxa`bMvPjWpGrIt[_DnJgJeD_m@dQs[nIi\\lCym@cEsYcHqLiHyEcN_KsK_D}SzJ{Y`SuIxg@yP`\\oGrDwMbFdA`Q|B~CvH`Nph@hj@'
        },
        children: [],
        id: 204,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Hunts Point, New York City'
      },
      {
        address_parts: [
          'Kingsbridge',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '{eoxF`sbbMs@pAoAeCyBrB_DyFgLkIaFgAYeAgNqQeEmCsE}BFYIsDt@sBa@iByAuBa@sB^qFxQfH`MukAhGdEFaB`O`KdEpFfp@lf@xNtLdCFf@fA{BpMiDjGqE`DaJQ_@F[ZgB~Es@tEqH}B}HTm@|A_FzFgG`N'
        },
        children: [
          {
            address_parts: [
              'Kingsbridge Heights',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'c}oxF~i~aMiGeEeIly@|[rZfQpNlJlBjSvIxB{Gz@c@`JPpEaDhDkGzBqMg@gAeCGmMkKsq@wg@eEqFaOkKGjB'
            },
            children: [],
            id: 220,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Kingsbridge Heights, New York City'
          }
        ],
        id: 224,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Kingsbridge, New York City'
      },
      {
        address_parts: [
          'Laconia',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'aalxF~kxaM@AVud@wCoCeCkBeEqD_CaBeA}@oGwEaCuBsEsD{GgFyEaEmCgCaD}BkByAw@{@wMcKyCeCa@c@mBtGYj@mDdL`JvLhFhUz@jDhA~Ct@nA|NhT`BzBjCnCz@t@tAv@~CbClBjBdAnAlAjBbK|LlEyDPSdDmCvI{D'
        },
        children: [],
        id: 241,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Laconia, New York City'
      },
      {
        address_parts: [
          'Longwood',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'izcxFlf`bMJw_@IoOW}EkHoLa@iO}IrAsIc@oKeCDzDNfATdAfArBvD|IKzK@nQpB|Jn@~DCjEKfAmA`IrBj@pVzHhAmIfCFFgD'
        },
        children: [],
        id: 205,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Longwood, New York City'
      },
      {
        address_parts: [
          'Melrose',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'i|bxFb_dbMiAqC{BqCiA}Ao@s@m@w@wAcB{AyAuBeBuB{A}CiBiFqCo@{Ei@kDgAqB}Ag@kCiAsGzZqOgG~B~BvB~DnF~IdFhJjJvQrCxE~DbGpBlCtB`C~EbFxBlBpH}c@x@qFb@_CWo@'
        },
        children: [],
        id: 202,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Melrose, New York City'
      },
      {
        address_parts: [
          'Morrisania',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'gudxFpacbMlBsIp@oDzA{G~@yFf@gD~Gqd@sV}HsKaDmRaG}De@}HgAsCzBOPkAv@yAt@wAZ_BLcAG_@Qs@EoAe@sAq@gCkByAoA{CqA}D{BeCqAeBgAwAqA}@s@kAgAqBwBKn@a@pIm@lK]lDsAhVUbGxStJj@ZzFdCnG`CbBbAtFtCpBpA|@d@hBj@vLvFbAj@fDtAjRbJzDdA`A\\nFbCnDpAV{A'
        },
        children: [
          {
            address_parts: [
              'Claremont',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'ckfxFphbbMzCeNvBwI~DoQbAoDL}ApEmG|BiGkHaC{NmBsC|BqDzByA\\aBNcAGcD}@sAs@aFwDuCsAoLwGsIcIKl@oA~U]hDmBr^n[|NdIxCvEpCdTfK'
            },
            children: [],
            id: 208,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Claremont, New York City'
          }
        ],
        id: 207,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Morrisania, New York City'
      },
      {
        address_parts: [
          'Morris Heights',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'qrhxF~}ebMfBmLJwP_AuVK{NHuKgb@cXeRcPCtJu@rA}@lAkA`FhBnChBjAa@pM}@zDsBvEi@h@iA_@}@Jm@hAyVk@d\\h[jz@th@f@yB'
        },
        children: [],
        id: 212,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Morris Heights, New York City'
      },
      {
        address_parts: [
          'Morris Park',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'qdixFrzxaMrRuJrG{EnBqHf@uCqEqWcDeN_GcLiFyEaGaEaMqHa@bFU\\Et@@`KTrBAb@Mb@HlLvCnIiKnHtS`m@~@`EjAcD'
        },
        children: [],
        id: 237,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Morris Park, New York City'
      },
      {
        address_parts: [
          'Mott Haven',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '}l`xFzjfbMpGiOg@uLbA}PrKmFbCaDdBiDcOqIkIgKeGePgMc^sIuQsBmDsDoCcEOaGvDuHbk@iFrWaHpQ}Nz_AcBtJ_@rKA`BrO|@lFGfAu@`G`DhCFdDnAbWFxEuCxPqOzFwCUk@'
        },
        children: [
          {
            address_parts: [
              'North New York',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'a``xFj_fbMkBuEa@sGGsKzBoHbFwCnAe@hBgAv@aBrAqDiDuB}C{BkKuGsCsBqCqMsBcGqAkEcGkP_@gAyEaNsKqOkANwGl@w@RqBvCa@dAg@pDo@hFyB|Py@dHu@jDaAxDi@nCeBnHiF`P~BjBpL~HvCdBpDfC`SvM~B`BrBnAh@|@fE|BlChBV\\Tj@`A`DdGxPjBy@tFcBnCu@iBeE'
            },
            children: [],
            id: 271,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'North New York, New York City'
          }
        ],
        id: 201,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Mott Haven, New York City'
      },
      {
        address_parts: [
          'Norwood',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'oamxFpm|aMoCsCo@oDvAsDxCaDdDk@pE{RoS?mSeAap@oN`Bva@aI_@iBxT{LmBePt@zYlSoIbe@`I~FFqBt@uCN_ClJiDzDsE~CmAnDcAdFuBpFmAxWgHrXyJyBuC'
        },
        children: [],
        id: 260,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Norwood, New York City'
      },
      {
        address_parts: [
          'Parkchester',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'kkgxFb_{aM`BzF~BvHxAzFx@lCVv@`BfEh@yMFwHRiGdAsMnKsj@|BkKpJgf@tF}WiHjAmIlAiIrBwSxBuWvCa@BeB?}AHvCnPpBpVhAvUxC~PhDdLz@xDnCnJ'
        },
        children: [],
        id: 231,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Parkchester, New York City'
      },
      {
        address_parts: [
          'Pelham Bay',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'yrhxFvpuaMfF_FpGeHpFaDcB{Di@_BuB_FcBcDFu@E}BM}Pg@sJUeCoDwP{BgHIq@sB^sBl@oC~@gEjByBXgDRsDQ_NyC_Ek@gBNuA@wBNyAEwDL{BXeAP{A\\aJfOl@`@Xl@zAjFlB|J|D|NzAtEF~@lAAb@a@nA|@nBvCdCnHlAzB~A|BtAvAvAnAbFlDbBt@hDzBrL`HhIxF`IsM'
        },
        children: [],
        id: 233,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Pelham Bay, New York City'
      },
      {
        address_parts: [
          'Pelham Gardens',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'qbkxFj|waM{Aq^OqFD_KJyDb@{JXsEpCk]z@eJcBwG}D{NiEkRYk@u@S[FyFhCaB|@sAzBkCnGaJdRYv@i@bAaGzNu@|AqC~G_AhBuBrFoAxCk@nAcA`CeAzBaBbEvJrH|GtF~HbGhIxGnBfB`@b@fL`J`EbDvE`Ej@`@tAl@EmA'
        },
        children: [],
        id: 266,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Pelham Gardens, New York City'
      },
      {
        address_parts: [
          'Pelham Parkway',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'k|ixFxmzaMpHoNdAiDp@iChCyIrAgFd@{AaAgEsS{l@hKoH{CoIEoLLa@?c@SuBAaKDs@R]b@cFiD_B{KyHaBuBqA_CeA_BkAyBcAsEgEiEc@^YLS?_@IiA~LuArPgAnOc@zJKzDCvDAdELbEbBlb@BhA|@pfAMbBxB`ZpFq@zN}BlB}JtDqF'
        },
        children: [
          {
            address_parts: [
              'Bronxdale',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'k|ixFxmzaMpHmNdAiD}Zq_@oJaM}AkDoB{B{BkA`AxhAMbBf@tGtArFlFdHzN}BlB}JtDqF'
            },
            children: [],
            id: 239,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bronxdale, New York City'
          }
        ],
        id: 238,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Pelham Parkway, New York City'
      },
      {
        address_parts: [
          'Port Morris',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'uqaxFxdabMdKrO`M`^bGhQnClMfZzRvFqQnHoRfEuUa]qYkRg\\oJfJu[~C'
        },
        children: [],
        id: 203,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Port Morris, New York City'
      },
      {
        address_parts: [
          'Riverdale',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '_joxFlqbbM}BlB_D}FeL_IcFiAUmAgNoQwD_CaF_CJg@MkDv@sBc@iB}AuB[sB^qFaYmJkc@nCcTgCeLWcLXc\\`@oE@?bEr@F_@rDw@hBRtBy@rBBrBg@xAEzDa@zKaPzl@|jF~uAIqMvKwOxB}GdBaJ{Zel@'
        },
        children: [
          {
            address_parts: [
              'Fieldston',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: '_mqxF~aabMtAjA|DEVu@KcDr@{Ba@qB}AmB[}Bb@gFcLgEoLmDac@pCaD[kC~N[|GSfK^pGvAfFnDzFvDlCfExAzLj@xNLtNVAaB{@{Ba@uAfAgDjBaBZsB_AyCwBcCc@kBVgBvAb@'
            },
            children: [],
            id: 227,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Fieldston, New York City'
          },
          {
            address_parts: [
              'Spuyten Duyvil',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'yunxFlocbM{FoEeDuGkE{Fv@wAoAeCyBpB_DyFgLiIaOiDwDPuD|@mK~EvExHlD|GzJvGvF~HaC~QmFd_@bq@|PAwLnKiP|B_Hp@iUeE{B'
            },
            children: [],
            id: 249,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Spuyten Duyvil, New York City'
          }
        ],
        id: 225,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Riverdale, New York City'
      },
      {
        address_parts: [
          'Schuylerville',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'upexFdjtaMrCm@g@eFmA{Hc@cCaCmEoAgCgCoEyCsEcByDqAkD{CaHwB}CsAuBeDoA{Cr@yDb@qCRaD`@aJR{DXyBQiFA}Jb@lCtInDtPTdCf@rJJnPFjCGt@~@bB~@xBxFjAbGt@`GZ`GLjLShDSbE]xKyAnEs@pAYfBe@'
        },
        children: [],
        id: 274,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Schuylerville, New York City'
      },
      {
        address_parts: [
          'Soundview',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '}_exFjxxaMuc@lOmEj@wFnXwAvHgAdH]|D_@zFQ`GGbIi@hMa@fEc@rCy@`EtAvA~BjAtCz@rJhAbFrEdApDvJzCdEwBrCJ|MnEjQiAbGqCzGgBnGsDtPa\\xIyg@zYcSlBk_@xGyBhDqKjKkBzC}L|AqHMiNTwNwA_CqBIfAsCPqCOmHoF?qLdL{VkDwIrPE|Ej@tFy@tF{B~BR~AJ`Be}@pMwP~F'
        },
        children: [],
        id: 228,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Soundview, New York City'
      },
      {
        address_parts: [
          'Throgs Neck',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'kh`xFf}raM}XqF}OmRgEc\\yA_t@zQ{]j\\u|@MknA{{BrcBgJhP}P|VcJxWaKtKkFzBaBh@gEd@iCb@{DbAZrDlExYf@xDl@zDJ|@DxA_HhFr@hBlCtAbCbDlEvKlFfKpFvJbFnKnBrLp@fLFpKVjMr@]xQgGrS}HpOZxLjFxEbBvKdDxBz@jDhB~B`A\\T~q@qe@vDcl@'
        },
        children: [
          {
            address_parts: [
              'Locust Point',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'ctaxFdxmaMnCoJD_B`OwXvQiV_EQml@r@sRjKoM|[uChRy@tSeCdTdZ}Lp\\aY'
            },
            children: [],
            id: 267,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Locust Point, New York City'
          }
        ],
        id: 232,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Throgs Neck, New York City'
      },
      {
        address_parts: [
          'Tremont',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'qphxFnlbbM`@cT\\eLViFeAk@oPuHaBaAoJsEk\\}QoDiBqBmAi@vBM`F{B|Iu@nDgA`EaAhEyB|InEdCr@d@rEdClBnApLtJxPzN~CvBtGbEvDhCfJ`GhChBJeRLoI'
        },
        children: [
          {
            address_parts: [
              'Mt. Hope',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'ufixFpzbbMhTtNJmUn@m[t@mSuRcJErCiAh@yA`BYdEyBtNiCjBkB`DmFbKdEjDtL|H'
            },
            children: [],
            id: 215,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Mt. Hope, New York City'
          }
        ],
        id: 248,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Tremont, New York City'
      },
      {
        address_parts: [
          'University Heights',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'klkxF|{cbMtQf@hDBTs@NS`@Q`Bj@`@_@f@{@T}@lAsCn@{CX{CL_I{@_@w@q@eBeCjA_FpAwAZy@PoA@s@GcCAeBDg@mKuIqA_Ak@WeMgHeA_@sH_EqFmC}AgA}AmAmFqEgFwD{MmJc@tFi@vD]nBs@vEs@jDa@~A{@jB_A`Bw@`AwCzB[L_AB}FOi@?_@H[XgB|EaAtGm@nFKd@Uj@sClE~AfChA`BxJqIrP~BfRpKze@v^'
        },
        children: [],
        id: 213,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'University Heights, New York City'
      },
      {
        address_parts: [
          'Van Nest',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'wohxFzy{aMrJlEpE~@~Al@tEtCNBr@rAjAz@vBf@jBn@jAt@j@z@nArAl@`@Xe@t@}Df@yC\\_EaBgEqAgEyA{FuCoJ{EsP{@yDiDaLyCaQgAwUqBoV{@sEa@pBuBtIqEhDcBfAqQ~IkA`De@~AmAvEoDxLQv@eAhDeIlOaDrEmB|Jvt@pW'
        },
        children: [],
        id: 240,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Van Nest, New York City'
      },
      {
        address_parts: [
          'Wakefield',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '{wpxFl_zaMZmAh]m~A}\\}RgPuH]|AIAc[rIs@kDu@iDs@iDe@sD}FbBkNvDcK|CeCn@u@~@a@~@g@~Ac@hAiIpUeE|KeEjLrDfCjAr@rDtC`AbA|A|AhIhHrC~AzAp@|@\\vAZfCBrAInBY`EkA~DXdB`A~GpF~AjBfClCvAfApEzBzHfCn@Z|Ah@dAT~Ax@zAd@r@Z`AXP_A'
        },
        children: [],
        id: 245,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Wakefield, New York City'
      },
      {
        address_parts: [
          'Westchester Village',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'csexFfyvaMbAiEr@{DtAcGjB}I`@uGAgF{@wJsAgT_JpBoCb@}@HmCd@iFr@_FZ{L`@{MQy@GuD[qBYqDu@yAc@q@G~ArDd@vAbBzDoF`DiG|GqFfFeIzMxDpD|FzKbDbNrBtL`CQx@Dt@Exk@qGrIqBfK}AhDk@r@Id@iC'
        },
        children: [
          {
            address_parts: [
              'Westchester Square',
              'Bronx',
              'NY'
            ],
            bounds: {
              points: 'gvfxF`staMiXa@uD[qBYqDu@yAc@q@G~ArDhCrGoF`DiG|GqFfFeIzMxDpD|FzKbDbNrBtL`CQt@Fx@Gxk@oGjDqAoHeoA'
            },
            children: [],
            id: 235,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Westchester Square, New York City'
          }
        ],
        id: 272,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Westchester Village, New York City'
      },
      {
        address_parts: [
          'Williamsbridge',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'e`oxFbvzaMxVxFrM~BpBILcNn@krAu@m@eCeCaB{ByBiDaJoMwA_CiA_D{@kDiFeUiIwKWc@iIhWa@dA}FzRu^lbBzZlJ~LpDbMxCD['
        },
        children: [],
        id: 242,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Williamsbridge, New York City'
      },
      {
        address_parts: [
          'Woodlawn',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: 'ilrxF`b|aMYeP{DaVtDec@hDmPgFaE_EYaEhAcEb@sDNk@m@yCoAwBtJcFpGkBxJoD|HnFlAtEtErDhGlMt[~HbHlGnB'
        },
        children: [],
        id: 244,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Woodlawn, New York City'
      },
      {
        address_parts: [
          'Woodstock',
          'Bronx',
          'NY'
        ],
        bounds: {
          points: '}mbxFt|bbMx@{DfAmJbC_Rh@uEXgBh@oAhBoCz@OfGk@dBWiDgFgBkB_BkCoIoMoEmGcAiAgDgDkVqWwBiByC}CmDgGV|EHnOI|]I`FgCGoAdJ}Hxh@cA`GxB~@pBn@hArBVbB|@~GpE`CfFbDbBnA`BxAhCjClC`DtAnB|AjBdBbE`DeKbAyCJk@zBuJ`A}D'
        },
        children: [],
        id: 270,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/200-Bronx.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Woodstock, New York City'
      }
    ],
    id: 200,
    locality_scope: 'ny:nyc',
    picture: '/static/images/regions/200-Bronx.jpg',
    region_type: 'borough',
    root_priority: 1,
    text: 'Bronx, New York City'
  },
  {
    address_parts: [
      'Brooklyn',
      'NY'
    ],
    bounds: {
      points: 'szswFvxkbMrC~HlCpFdHxEvHlFlClAdCATlFbCMOkE~F_BbNm@zHv@|IlBp[fOfAt@|EvBtFjElEpBdAkC|LjEzUbItLtObDfH~HlLt@bOXpUvBbW`BtVnApZZTfB~@`B`FxMbOj@|AbAfAbm@d]fe@|XfZph@pOxYpIrDrJa@`E{@hEz@dUeEn]yC~H{Dz@q\\pOlSdzBddCnFyIhC~BjF~Bnc@rPtQrGpLx@vIb@tUr@~`@iC|P_G`\\yVtCgFxDsCnHcIjHuP`BwXxByYrMuw@x\\kr@pN_Kjl@kWdArFnBfAvEtIzHj@nD[nAbO_@rJ~@bPvIpSnInErDFnF}AlDY~DcClB_FvBoKBsHxG_YbCaEzCQa@mPRad@yCkw@{Ja}AcDyc@sAmm@TwLUeGqB{d@aBiLf@{Ga@ye@iAq@FqAh@eDMoVaC{Ai`@zHv@x`A_Hri@bApUkBVs@sKaAi^^sMCuMb@[JcLZw@]wHR{FpAeX[mJaAeCBi]~AsRlBsIVoMhBsNUcEj@_EUwPeB_AkGdAyD`EiGx@nBcLgBeEeCyEq@{G\\qI^gHoAcFaCqE`AaW}{@xbAoJeIyFsMeEcMoJ}L_EmB_Fq@]gJuFeMmEgOcLoBaGqPeFsB{FnCuHnGwBnKU|HyBvFoHdCgI{@eF{@}JjCq@eIoGiKyHgJqGuEiGmLy@mI|EiGaJqQ{EbHcFi@eHcOcHmJsIgIkIr@eF|DjCqFhF}DvCsF^kJaCwFyE{FuD_D_DI}AqEl@oFgByIuHoOmCwEk@kIy@oHqA}IiEcCaIz@mFnCoDKoEgBqJo@}DpCgDpF{O~J{AlByPpPqGsP}AcPyS`DsAcP}f@zHwGhAnAdPop@bKJrDeShDxAxJsGdAuKt@cRpDoPzBl@`FxArIhBxHxGbSsN|M_@rB@hBVvCQhBuDnKnBdSrB~QeInc@zC|j@{JlTsHiH_[tl@wDoDgGfLmEyEcg@xbAmKyKqOrXyEdAyBaDi@{CsF`AiEhFcK\\mB~@f@bCuJjDga@zOyAtKgBvVuB`K{DtI}CdE{EtBiGhBoEtBuCbCaCrDqGdXwFrVgBxIi@zDU~FH`Hl@vH'
    },
    children: [
      {
        address_parts: [
          'Bath Beach',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'o_zvFvcwbMnOpPx@M~@aBvMaa@x\\kr@pLaMao@}p@mbAznBt^~_@jDoH'
        },
        children: [],
        id: 336,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bath Beach, New York City'
      },
      {
        address_parts: [
          'Bay Ridge',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '{a}vFtg|bM|GM|BLhDcApZiE|Aw@|HmEpHaIfEyCvBAnCmBeE}RuEeLgF{G_W{Qaj@qg@}g@wP_UsEcFd@iEjDqKzRsCjDaEhBqEHeE{ApC~GvAlGRxF_@|EiEbOuApGYpEL~En@hG~ArFnAdChC~BjF~Bnc@rPtQrGz`@lCpJ_@'
        },
        children: [
          {
            address_parts: [
              'Fort Hamilton',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'i~{vFnd|bM|P_G`\\wVuEoTuCoHaDgFiBeCeCwAwP}LyVwTsIdR_G`LaOjbAoBtNtUr@~`@iC'
            },
            children: [],
            id: 333,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Fort Hamilton, New York City'
          }
        ],
        id: 331,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bay Ridge, New York City'
      },
      {
        address_parts: [
          'Bedford-Stuyvesant',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'eflwFzxibMbCze@`Fjt@vw@}Jny@cJlFy`@`NevGwJa@iKqNak@vlAotA|tCtCv_@'
        },
        children: [
          {
            address_parts: [
              'Ocean Hill',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: '}sgwFjvcbMhD{qAoGmTg}@fsBl`A}J'
            },
            children: [],
            id: 353,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Ocean Hill, New York City'
          },
          {
            address_parts: [
              'Stuyvesant Heights',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'kuiwFjbdbMotAvtCbApNt_CoXRoJjKXlAc{@tC_pAm`A~J'
            },
            children: [],
            id: 312,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Stuyvesant Heights, New York City'
          }
        ],
        id: 310,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bedford-Stuyvesant, New York City'
      },
      {
        address_parts: [
          'Bensonhurst',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'cayvFj|rbMo_@y`@kIo~A}aBvbDjiAllAlbA{nB'
        },
        children: [],
        id: 334,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bensonhurst, New York City'
      },
      {
        address_parts: [
          'Bergen Beach',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}qyvFx~_bMuFeMmEqOcLgBaGoPeFsB{FlCuHnGwBpKUzHyBvFoHfCgI}@eFy@}JhCw{@bdCy@{AmDvEpBtDbuAiH|PkSgMkUeCwB|EyFxArB|`@uh@nFgDbKWvLh@rHkCFoL]gJ'
        },
        children: [],
        id: 363,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bergen Beach, New York City'
      },
      {
        address_parts: [
          'Boerum Hill',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'sdjwFj{qbMph@`[hDoLbDqL}FgD`Owh@yZ{P}Am@eAf@aDfKq@e@qS~s@'
        },
        children: [],
        id: 306,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Boerum Hill, New York City'
      },
      {
        address_parts: [
          'Borough Park',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'ww~vFlcvbMvjAq|Bk`A{_AaDwIgjAdMpEbOqS~_@xAxCaQb^dbB|dB'
        },
        children: [
          {
            address_parts: [
              'Mapleton',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: '}_~vFdpobMiL`Thb@la@n\\d]v_AsjBgsB|T'
            },
            children: [],
            id: 335,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Mapleton, New York City'
          }
        ],
        id: 338,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Borough Park, New York City'
      },
      {
        address_parts: [
          'Brighton Beach',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'ckuvF|ekbMsK|@AtLb@jI`C|Z|@xV`cA`NaD{c@u@eZ]gRTwLUcGeZ~CwZ|DBl@'
        },
        children: [],
        id: 342,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Brighton Beach, New York City'
      },
      {
        address_parts: [
          'Brooklyn Heights',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'gllwFj{sbMj@|AbAfAbm@d]pTkjAqXkKoSfEcIFcGeAgCu@w@mBeDvE_IlKqEnG~AhA~BlLzLvH'
        },
        children: [],
        id: 305,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Brooklyn Heights, New York City'
      },
      {
        address_parts: [
          'Brownsville',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'kgcwF|}bbMMuIkEgl@mGqLgBqB_@qBeDi@cJh@m_B|WljAllDbv@q|@t@e{@'
        },
        children: [],
        id: 354,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Brownsville, New York City'
      },
      {
        address_parts: [
          'Bushwick',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'kuiwFfbdbMf}@csB}CwH{AcAiLoCyKm@qMoKs_@qZaDkGeInc@vCbk@{JfTqHgH_[~l@uD}DcGhLkEsEig@rbArVrZrPhl@zDnTxEv]jtAytC'
        },
        children: [],
        id: 313,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bushwick, New York City'
      },
      {
        address_parts: [
          'Canarsie',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'u~|vFnm_bMoGiKyHgJqGuEiGmLy@oI|EgGaJsQ{EdHcFk@eHaOcHoJsIgIkIt@cFvDwB|H}Wh[mEtLaHrGmDjBcEr@_KvLePfRaOxJ{SpDbBhV`@nBfBfBxGrM`Erk@LxIq@`{@zCuDneC}LuBwDnDuEz@xAv{@{cCq@kI'
        },
        children: [],
        id: 359,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Canarsie, New York City'
      },
      {
        address_parts: [
          'Carroll Gardens',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'o`iwFjesbMqHhb@xb@~Otl@k\\k_@gNhD{JsBoAhDiJaNeKmNyIaO~g@'
        },
        children: [],
        id: 321,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Carroll Gardens, New York City'
      },
      {
        address_parts: [
          'Clinton Hill',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'gxkwFhlnbMrcBaSvJmy@ipAjOi^vEgABnBpT_@t`@'
        },
        children: [],
        id: 364,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Clinton Hill, New York City'
      },
      {
        address_parts: [
          'Cobble Hill',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'kqjwF`~sbMnIsBx[xLtH{a@dD}Lyb@gWsEbSwJvi@'
        },
        children: [],
        id: 322,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Cobble Hill, New York City'
      },
      {
        address_parts: [
          'Columbia St Waterfront District',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'mzjwFx~tbM`e@zXvb@qTtIcHe`Ak^gIhBaHz_@'
        },
        children: [],
        id: 328,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Columbia St Waterfront District, New York City'
      },
      {
        address_parts: [
          'Coney Island',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '{}rvFr`tbMf@wKNgZqC{v@sE}t@gDcg@ccAcNXjIx@nNxCvV\\~Oa@fJ[fFeBrRbQhU`FtBsPvuAnAbO`bA_LlAqN'
        },
        children: [],
        id: 341,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Coney Island, New York City'
      },
      {
        address_parts: [
          'Crown Heights',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'uohwFhdmbM|dBoRvH`C]iGiDs}AjCciAAeKv@@mmAgsDsAp`@aNhvGqFba@yFzd@'
        },
        children: [
          {
            address_parts: [
              'Weeksville',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'qcewFpygbM`A{RM_Mv@@}Waw@s{@{DuCnwAzuAfF'
            },
            children: [],
            id: 327,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Weeksville, New York City'
          }
        ],
        id: 325,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Crown Heights, New York City'
      },
      {
        address_parts: [
          'Ditmas Park',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'iq~vFpyjbMos@tGaYtWwMbA`GfjAtt@yNdQ{CmBgFhXmCoGkmA'
        },
        children: [
          {
            address_parts: [
              'Fiske Terrace',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'ip~vFptlbMgBc[uMbAfB~[tM_B'
            },
            children: [],
            id: 352,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Fiske Terrace, New York City'
          }
        ],
        id: 343,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Ditmas Park, New York City'
      },
      {
        address_parts: [
          'Downtown Brooklyn',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'cflwFhoqbMS`OqCtEx@lBzDbAnEv@zHEpScEzExBhQjGpEaSuDuBpSgt@n@f@dDkKsUpOcFtBX_Q}VnBy@d@kBdCu@^oBPgFFYlBs@jBiVjXGvGvBu@'
        },
        children: [],
        id: 303,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Downtown Brooklyn, New York City'
      },
      {
        address_parts: [
          'DUMBO',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'wdmwF|erbMnApZZT~T_[rCyER_OwBr@J}GbVuWt@{Bb@iBoJVcOSqEfD_DoDgAW_JaEkGu@XpUvBbW`BtV'
        },
        children: [
          {
            address_parts: [
              'Vinegar Hill',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'qkmwFbvpbMvBbWdEFRaKzBHBaBzABCdBxOb@A|BbVuWt@{Bb@iBoJVcOSqEfD_DoDkAM{IkEkGu@XpU'
            },
            children: [],
            id: 308,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Vinegar Hill, New York City'
          }
        ],
        id: 307,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'DUMBO, New York City'
      },
      {
        address_parts: [
          'Dyker Heights',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'sjzvFl}zbMxDsCnHcIjHuP`BwXxByY}bCshC_y@b`BiI|LzEsD|FeAp}@fXbi@dg@vWxQ~FrH`DfJtEnTtCgF'
        },
        children: [],
        id: 332,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Dyker Heights, New York City'
      },
      {
        address_parts: [
          'East Flatbush',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}ccwFhtdbMs{@rbAm@GFbLoC`hAXbPnnEkUPbE`{@q~@ecA{gBmeC~L'
        },
        children: [
          {
            address_parts: [
              'Farragut',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'epawFbmebMgGk@|@v_@pBMN|Dx@rD`AjJrAj{@zrA{GaBsL{BuL}Qub@{Oia@kl@aG'
            },
            children: [],
            id: 309,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Farragut, New York City'
          },
          {
            address_parts: [
              'Wingate',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'e_dwF|wgbMe]nB{Dk@_Bxr@XbPli@yCeCgaA'
            },
            children: [],
            id: 330,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Wingate, New York City'
          }
        ],
        id: 358,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'East Flatbush, New York City'
      },
      {
        address_parts: [
          'East New York',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'a`dwF~o`bMhDh@oBeV~ScEnOaKt[m_@zDm@zD}BxGaGzEoMxWa[nBoHjCqFhF{DvCsF^mJaCwFyE{FuD_D_DI}AoEl@oFgB{IuHoOmCwEk@kIy@oHqA}IiEcCaIz@mFnCoDGoEkBqJm@}DnCgDpF{O~J{AlBaThP_EgOgAkPkSnC}AqPuo@fKjAjPop@~JJrDeShDxAxJsGdAuKt@cRpDoP|Bl@~ExArIhBxHxGbSrRng@nPfd@}MzKlJpR{IjFbJxHzCvAjJj@hLnCzAbA|CvHnGpT|ApEl_B}WdJi@'
        },
        children: [
          {
            address_parts: [
              'City Line',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'aafwFvqzaMyImiAyGz@jAjPop@~JJrDeShDxAxJsGdApLnl@`PqCvBiAh|@_NiBkD'
            },
            children: [],
            id: 316,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'City Line, New York City'
          },
          {
            address_parts: [
              'New Lots',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'wxbwF|g_bM`JyKcFqFsVwv@o_@ekAaAmIwFkw@iIt@}AqP{f@jIbDjc@tD`e@jJhNjx@pdCbBbDdC~IvJwAnOaK'
            },
            children: [],
            id: 315,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'New Lots, New York City'
          },
          {
            address_parts: [
              'Starrett City',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'a|awFng~aMzDm@zD}BxGaGzEoMxWa[nBoHiPcIkc@yLei@`a@gA|AmFnD|Wry@jFjGnPaS'
            },
            children: [],
            id: 317,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Starrett City, New York City'
          }
        ],
        id: 314,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'East New York, New York City'
      },
      {
        address_parts: [
          'Flatbush',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '_lcwFdglbM~ChKzWcC`QkB~MaBq@aK|DS~Gu@dL_KlEkEdCkCfAYbYwC`Y_DoCso@cdBxImt@jDnCjmA'
        },
        children: [],
        id: 346,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Flatbush, New York City'
      },
      {
        address_parts: [
          'Flatlands',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 's|zvFljebMab@mu@wF`HcuAfH~bAtgB|{@qcA'
        },
        children: [],
        id: 360,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Flatlands, New York City'
      },
      {
        address_parts: [
          'Fort Greene',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'kxkwFhlnbMm@td@g@dV|T{@dAq@zAuBd@[lWyBUvP|FeC|V}O|Al@fCoJjKuv@ucB`S'
        },
        children: [],
        id: 304,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Fort Greene, New York City'
      },
      {
        address_parts: [
          'Gerritsen Beach',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'okvvFtgfbMtEqElKcOOsMPaKsAkMuBqFsbArjAnL~SbJgLnVi@rEwI'
        },
        children: [],
        id: 370,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Gerritsen Beach, New York City'
      },
      {
        address_parts: [
          'Gowanus',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}vewF|gsbMbH{OkYeVkKaIaW{Rg[{RkN~g@xRnLnQxMiDhJrBnAiD|Jd_@zMx`@aS'
        },
        children: [],
        id: 320,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Gowanus, New York City'
      },
      {
        address_parts: [
          'Gravesend',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'uavvF`xsbMdApFnBfAvEtIzHj@lDQxPavA_FsBiQkUdB_R|@iRe@yOqCiW_AcNWiIiy@mL{uAtOrBh`@aMzAxIt~ApqAztAjl@kW'
        },
        children: [],
        id: 337,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Gravesend, New York City'
      },
      {
        address_parts: [
          'Greenpoint',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'qqswFhjlbMhG|GRjE~Ha@lCnAdCCTlFbCMS_GxFiBbNuBdIb@vKdCfAcCxb@_y@nAGaBw]}@kB~Dm@gPs\\aGgKgIuPsF}[aBaEmAqCwG}HyA`IWrCoAbRuB`K{DpI}CdE{ErBiGjBoErBuCdCaCvDqG~WwFxVgBrIi@`EU~FHzGl@xHrC~HlCtF'
        },
        children: [],
        id: 301,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Greenpoint, New York City'
      },
      {
        address_parts: [
          'Greenwood',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}mewFxvrbMuGfPk\\zPjP`FvPx^hElb@bD~MpOjSxdA{qBrBhBta@{x@}AoCyNch@_@sGaq@dHyFfMoDuD}F~KeDbGwDrCgNrK}NvU'
        },
        children: [],
        id: 367,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Greenwood, New York City'
      },
      {
        address_parts: [
          'Kensington',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'cw`wFrxpbMqEcOhjAgMbDxIjHuMrAoDm\\i|@eQ|CwpAvVdC|Im@rLfC`g@|Nvg@pS_`@'
        },
        children: [],
        id: 340,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Kensington, New York City'
      },
      {
        address_parts: [
          'Manhattan Beach',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '{wsvFrsibMaBcLf@aHY}\\tACA_BwA@IaFgAqACaAx@mBMoVaC{Aw^pH\\tz@WlEwFri@x@fUeEj@LpB`v@eJUaB_Bqa@'
        },
        children: [],
        id: 350,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Manhattan Beach, New York City'
      },
      {
        address_parts: [
          'Marine Park',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'uh{vFzfibM`e@wi@d@^`AD~D}@~@zBrS_VeByCji@qm@jDxHlv@g}@cCcHLiIx@iIrEaEnBcLgBeEeCyEq@{G\\qI^gHoAcFaCqE`AaWi{@`bAkcAhhAm}AdjBfGpTx^t[lO_B'
        },
        children: [],
        id: 361,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Marine Park, New York City'
      },
      {
        address_parts: [
          'Midwood',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'wdzvFxnlbMeA{CkAcE{FsPwGeVy@uGeE_F}Ui`@c[eXaCeCcGuSis@jv@rKnwBt{AaQlf@}E'
        },
        children: [],
        id: 348,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Midwood, New York City'
      },
      {
        address_parts: [
          'Mill Basin',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}azvFvkdbMzaA{fAmJeIyFsMeEcMoJ}L_EeBaFs@KfLiHhC_Mi@cKXkFnDaa@th@sAwB{EzFzBpBjp@nkArO{Q'
        },
        children: [],
        id: 362,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Mill Basin, New York City'
      },
      {
        address_parts: [
          'Ocean Parkway',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'u~~vFrsmbMr\\h|@xjAyMzu@aIsBi`@rHgAiMod@mzCh\\lBhF'
        },
        children: [],
        id: 339,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Ocean Parkway, New York City'
      },
      {
        address_parts: [
          'Old Mill Basin',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'gu{vFthcbMmIjJ`b@ju@dIyJya@}t@'
        },
        children: [],
        id: 365,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Old Mill Basin, New York City'
      },
      {
        address_parts: [
          'Park Slope',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '_~dwF~_rbMfNsKvDqCdDeG|F_LqFaGyMiKi`A_v@sCsByAKDwBaJvBe{@lj@oAvDzr@ra@dy@|o@pGvF|NwU'
        },
        children: [],
        id: 319,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Park Slope, New York City'
      },
      {
        address_parts: [
          'Prospect Heights',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'abiwFtuobMp{@{j@tImBXwCrGgE{ImC~CcQlFxA`CFt@kAT_DQsB^cEsJtAwR|Aef@`GoO|iAaAhE'
        },
        children: [],
        id: 326,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Prospect Heights, New York City'
      },
      {
        address_parts: [
          'Prospect Lefferts Gardens',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '}kcwFjglbMmCqmAio@fDsCTjC|lAh@hJnB`BrA`@rq@aGaDuK'
        },
        children: [],
        id: 329,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Prospect Lefferts Gardens, New York City'
      },
      {
        address_parts: [
          'Prospect Park South',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'emawF~hlbM}UrC}UtB}OhBpIjZlMyHjO`i@`[eGsEa~@'
        },
        children: [],
        id: 355,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Prospect Park South, New York City'
      },
      {
        address_parts: [
          'Red Hook',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '_~gwFtbxbMrJa@`E{@hEz@dUeEn]yC~H{Dj@i]sCoMiEia@sPm_@iQqFmp@d_@uItHqb@|SjZxh@pOxYpIrD'
        },
        children: [],
        id: 318,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Red Hook, New York City'
      },
      {
        address_parts: [
          'Seagate',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'cqsvFjfvbMvBoKBsHvByJ`DeMbCaE}aA~Kf@|HnDbD^pP~BhMjIzGrDFnF}AlDY~DcClB_F'
        },
        children: [],
        id: 345,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Seagate, New York City'
      },
      {
        address_parts: [
          'Sheepshead Bay',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'ytwvF|`gbMgLgTvJyKgDaIei@jm@dBbDuSbV}@yB}Dx@iAGc@i@_e@`j@eO`BxUh`@fCtBlBhIbGlUrGnRhEzOxIj_@jlAoMhy@lLy@yVaCuZg@aI?_MtKw@QiDz@Gs@sKi@sPWuL^qM?_ICwCb@[JcLZw@]wHR{FpAeX[mJaAeCCmGl@aPx@kWlBsIVoMhBuNUcEj@}DUyPeB_AkGdAyDbEkGv@wEjEs@`IQbIzFvOxApMQjKN|L{KvOeE|DuE|IoVb@eJjL'
        },
        children: [
          {
            address_parts: [
              'Homecrest',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: 'wdwvFhdkbMiEwu@mCwg@sBwc@yRc^k]db@nDbHsm@ps@{i@hGbT~\\nE~EtDzOhPbi@fC~IdaBqGoCgg@'
            },
            children: [],
            id: 344,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Homecrest, New York City'
          },
          {
            address_parts: [
              'Madison',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: '{wxvFzwhbM{_BbQlL|RtEbHtAfCfCtBtD~OlfA{KiFgz@'
            },
            children: [],
            id: 366,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Madison, New York City'
          }
        ],
        id: 349,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Sheepshead Bay, New York City'
      },
      {
        address_parts: [
          'Sunset Park',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'or`wF|a{bMeAqC}AyEo@qGQgFZwEj@gCrFgS\\_FQsF}AqGaCoGxDlAvEC`EkB|C{DdKiRdIoMfOkZ{aBmeBoOxYmBkBudAxqB`zBhdCdF{I'
        },
        children: [],
        id: 323,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Sunset Park, New York City'
      },
      {
        address_parts: [
          'Williamsburg',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: '{ykwF`{lbMqImoAgEqq@{Ew]{DoTeKq]oDwM{NiRcSaToOxY{E\\yBaDi@aDsFfAiEhF_KXqB|@f@fCuJlDga@zOfMdVrF|[fItPhXzh@qEr@nA~A`Bx]sAJyb@dy@pChAfCtA|ErBfCnCfGjDsBvDfAv@hAuBlAv@dArDtFlElEnBdAkC|LlEzU`IVmAnHhBrGQpDkBdAoFbO_FdXw^`LhC'
        },
        children: [
          {
            address_parts: [
              'East Williamsburg',
              'Brooklyn',
              'NY'
            ],
            bounds: {
              points: '}tlwFhzgbMjB_@{DoTeKq]oDwM{NiRcSaToOzY{EZyBaDi@aDsFfAiEhF_KXqB|@f@fCuJpDu\\bNoAhGdKpOrFz[lMdWvSiB|MpHpGNdEgBzFuBlFuBxCa@h_@gDtC_@fBwArC}E`Bu@`CaA'
            },
            children: [],
            id: 373,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/300-Brooklyn.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'East Williamsburg, New York City'
          }
        ],
        id: 302,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Williamsburg, New York City'
      },
      {
        address_parts: [
          'Windsor Terrace',
          'Brooklyn',
          'NY'
        ],
        bounds: {
          points: 'ardwFhepbMnLrJ|LnMdG}Lzp@uHgBw]j@sLeCeJcT`EiTtE_RdDcAbA{N~_@'
        },
        children: [],
        id: 324,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/300-Brooklyn.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Windsor Terrace, New York City'
      }
    ],
    id: 300,
    locality_scope: 'ny:nyc',
    picture: '/static/images/regions/300-Brooklyn.jpg',
    region_type: 'borough',
    root_priority: 1,
    text: 'Brooklyn, New York City'
  },
  {
    address_parts: [
      'Manhattan',
      'NY'
    ],
    bounds: {
      points: 'ecnwFxhxbM|n@r@`Wc\\xB}o@ue@a}@}Oea@yE}fAuS{y@wtAuf@wn@vBsi@Iaf@gOeYce@oh@yj@w|@up@kW{WuQ}CgX|Gob@mEgk@_\\wc@gh@kk@z@ef@da@ghAeAmoAnFijA_c@qz@uj@sa@i[gf@ye@e]qEcI~EqEoG|CcFhAuIyHyBsH^s@rA_FzFgG`NkBhDjEzFdDtGpEpDnFxCtBnI{E`OmI~K_G`]pBf[vi@h[|k@|Lzt@f`@bSfa@ht@dCfr@xOnn@li@pmGb`ExfDl{Bfi@xQ~hAjI|uAxMdbBz['
    },
    children: [
      {
        address_parts: [
          'All Downtown',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: 'ijqwFlbwbMtm@zIzf@hFdg@~GbGoAzBqClE_AjHmFjCmDjBcEzAmEZ{B?qMsByMaEsKgT{`@eEoHoEkGeD{H_BaK_Dqh@kDks@sAeLsCgFsCoCq[iLkNgCkO_DgMkBaRuBeHYwE?mDnAwCfEyBrB{Br@cDb@aLdAsKj\\kOre@kVaPcThq@aCwAgr@~xBf`@tNnm@lGteBfM'
        },
        children: [
          {
            address_parts: [
              'Battery Park City',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'gxowFzqvbMkBlZzf@hFv^fFlGv@bGoAzBiC[_Da@aByAcBo_@cLyRoCyBi@yGiA_RoC'
            },
            children: [],
            id: 112,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Battery Park City, New York City'
          },
          {
            address_parts: [
              'Chelsea',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'o_vwFvkvbMnm@hGdAyXd^{iA{|@il@gr@~xBf`@tN'
            },
            children: [
              {
                address_parts: [
                  'West Chelsea',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'uetwFpdubMk}@il@{[bdAl`@jNnm@jGdAyXbHwT'
                },
                children: [],
                id: 163,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'West Chelsea, New York City'
              }
            ],
            id: 115,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Chelsea, New York City'
          },
          {
            address_parts: [
              'Chinatown',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'i{nwFlvsbMj@s@{Bym@wB?uD_B_Jnb@sCfMnE|Bc@`BoE}BwAhFm@[s@~BzJpIrCaIdAb@rDdC^u@\\GvBA|DiKm@iB'
            },
            children: [],
            id: 110,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Chinatown, New York City'
          },
          {
            address_parts: [
              'Civic Center',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'cqnwF|uubMl@c@Tk@@u@uBwL[eA~OiTqFqDyMaN_@t@}DnK{B@[F_@t@qDeCgAk@mArDeAtCjBjBcAlCpB`B`AqCtB|AgCjH|HlGfCeHhBpAmCdHnLnJ'
            },
            children: [],
            id: 103,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Civic Center, New York City'
          },
          {
            address_parts: [
              'East Village',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'wyrwFfcrbMhOnBjCVhCr@xHxArBHpUvGfYwuA|BqHhCqXkO_DgMoBaRqBep@psBjBK'
            },
            children: [],
            id: 117,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'East Village, New York City'
          },
          {
            address_parts: [
              'Financial District',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '_enwFj_wbMp_@`KvAhBbAxFlE}@jHoFjCkDjBeEzAmEZ{ByBoOaBqHfBiBaEsKqQy[{GqMcFdG{EaKe[`c@\\fArBbLC`AQh@i@b@xBbBqClHoI`VfVxD'
            },
            children: [
              {
                address_parts: [
                  'Fulton/Seaport',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'o`mwFhptbM{GmMcFdG{EaKcJnMaPlT\\hArBdLC`AQh@i@b@jIrGnIeMfDeGnEiEfFsFrG}H'
                },
                children: [],
                id: 114,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Fulton/Seaport, New York City'
              }
            ],
            id: 104,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Financial District, New York City'
          },
          {
            address_parts: [
              'Flatiron',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'c}rwFrcrbMcEZ{\\qUdCeIgZcSiTlq@~|@jl@jQyj@'
            },
            children: [
              {
                address_parts: [
                  'NoMad',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'ydtwF|}pbMkRiMcTrq@bR`MvGsSyBqA`CmHtBxAtGqS'
                },
                children: [],
                id: 159,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'NoMad, New York City'
              }
            ],
            id: 158,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Flatiron, New York City'
          },
          {
            address_parts: [
              'Gramercy Park',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'gcswFndrbMbE[fRol@sa@gXmOze@eCdIz\\pU'
            },
            children: [],
            id: 113,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Gramercy Park, New York City'
          },
          {
            address_parts: [
              'Greenwich Village',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '{vswFdatbMlKxGfN_H|AY|ObKhGvCtFpBhQud@fA{G~DaPqUwGsBIyHyAiCs@kCWiOoBkBJwXp|@'
            },
            children: [
              {
                address_parts: [
                  'Noho',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '_eqwF|nsbMdAqGdEgPuU{GsBIyHyAoCjIf_@lZ'
                },
                children: [],
                id: 118,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Noho, New York City'
              }
            ],
            id: 116,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Greenwich Village, New York City'
          },
          {
            address_parts: [
              'Little Italy',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'y}owFfbtbMr@_Cj@XxAgFnEzBb@aBoE_CrCeMqEkB{EaBaIxV|JlI'
            },
            children: [],
            id: 108,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Little Italy, New York City'
          },
          {
            address_parts: [
              'Lower East Side',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'gyowFfbsbMfFdC|Iob@nD`Bv@F|@O|B`n@k@r@f@jBf@}@bMdMhGlEzIgMkC_J}Fkt@`Fk@uD{u@sAeLsCgFsCoCq[iLkNgCiClXyBnHkY`vA`\\|IlEdA'
            },
            children: [
              {
                address_parts: [
                  'Two Bridges',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'qonwF|`tbMzCbDhGjEzIgMcA}CgAaE}Fet@gBuYgG^aJv@o@?ULyBPlEvlAk@p@f@lBf@}@fH`H'
                },
                children: [],
                id: 111,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Two Bridges, New York City'
              }
            ],
            id: 109,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Lower East Side, New York City'
          },
          {
            address_parts: [
              'Nolita',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'ybqwFxesbMhCfBrDbDrFzArFvE|HwViDgAyV}G_E|O'
            },
            children: [],
            id: 162,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Nolita, New York City'
          },
          {
            address_parts: [
              'Soho',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '}{qwF|evbMrGNyA`YxJ|@lAiYzUg_@~Vo`@wC}BoRiPeFcBoI{FgAhHcH~QaHnQqC~o@'
            },
            children: [
              {
                address_parts: [
                  'Hudson Square',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '}{qwF|evbMrGNyA`YxJ|@lAiYzUe_@fAkBi@ByAYqE{AwJsCeQkFqC|o@'
                },
                children: [],
                id: 166,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Hudson Square, New York City'
              }
            ],
            id: 107,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Soho, New York City'
          },
          {
            address_parts: [
              'Stuyvesant Town/PCV',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '{irwFbvpbMv\\}eA_Ha@wE?mDnAwCjEyBrB{Bn@cDd@aLbAsKj\\ta@hX'
            },
            children: [],
            id: 106,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Stuyvesant Town/PCV, New York City'
          },
          {
            address_parts: [
              'Tribeca',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'ijqwFlbwbMlm@rInAaZb\\vFvIeVdCoHyBcBoLoJlCgHiBqAgCdH}HkGfCmHuB{AaAnCqB_BbAeCoIaIim@|_A{AbZ'
            },
            children: [],
            id: 105,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Tribeca, New York City'
          },
          {
            address_parts: [
              'West Village',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'gvqwFt`wbMbAiYuFUnCap@uFqBeGuCaPcK}AVgN~GmKyGmUdt@g@x@QbAw@xXryApK'
            },
            children: [],
            id: 157,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'West Village, New York City'
          }
        ],
        id: 102,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'group',
        root_priority: null,
        text: 'All Downtown, New York City'
      },
      {
        address_parts: [
          'All Midtown',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: '}zvwFdulbMcFgHsNyJs{@vmCj@v@ChBz@b@iFrPeCyAkVlv@sAr@wDpMn{AneA~WjIlr@uxBxBfAfToq@nVlPb\\qcAKeCkDuCmSSmWwCmJqFmHaIaIiFoSeOaTwQ'
        },
        children: [
          {
            address_parts: [
              'Central Park South',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '}lywFrppbMh@?|Mqb@PHx@eCSMXaAz@f@jCuI_C_BmUrs@XXP\\'
            },
            children: [],
            id: 121,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Central Park South, New York City'
          },
          {
            address_parts: [
              'Midtown',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '}rwwF~mnbMgWgQwKp]bC`BkCrI}@m@UfALJo@bCUIaNzb@e@?G`Bz@b@rfA~r@xMgb@wFcEzSaq@ij@s^'
            },
            children: [],
            id: 120,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Midtown, New York City'
          },
          {
            address_parts: [
              'Midtown East',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '{evwFzgmbM_TyQeFgHsNwJyWxz@pV`Qhj@t^kGzRl^|UtGqS|i@z^b\\qcAKaCkDuCmSSmW{CmJqFmH_IaIkFoScO'
            },
            children: [
              {
                address_parts: [
                  'Kips Bay',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '{guwFxcpbMjVnP?HpRbMb\\qcAKaCkDuCmSSiWaDqT`r@'
                },
                children: [],
                id: 133,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Kips Bay, New York City'
              },
              {
                address_parts: [
                  'Murray Hill',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '_pvwFnapbMl^|Ub]mfAmJsFmH}HaIkFs]lhA'
                },
                children: [],
                id: 130,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Murray Hill, New York City'
              },
              {
                address_parts: [
                  'Sutton Place',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '}rwwFxmnbM~Vuw@cFgHsNyJcX~z@zVvP'
                },
                children: [],
                id: 131,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Sutton Place, New York City'
              },
              {
                address_parts: [
                  'Turtle Bay',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'iquwFbxmbMqSgO_T{QaW|w@hj@t^hUot@'
                },
                children: [
                  {
                    address_parts: [
                      'Beekman',
                      'Manhattan',
                      'NY'
                    ],
                    bounds: {
                      points: 'mhvwFpembMmQoOqFzPtR|LhEiN'
                    },
                    children: [],
                    id: 134,
                    locality_scope: 'ny:nyc',
                    picture: '/static/images/regions/100-Manhattan.jpg',
                    region_type: 'neighbourhood',
                    root_priority: null,
                    text: 'Beekman, New York City'
                  }
                ],
                id: 132,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Turtle Bay, New York City'
              }
            ],
            id: 123,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Midtown East, New York City'
          },
          {
            address_parts: [
              'Midtown South',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'extwFropbMyNsJsGlSk^wUmKf]tFzD{M`b@df@~[|Meb@hTar@'
            },
            children: [],
            id: 122,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Midtown South, New York City'
          },
          {
            address_parts: [
              'Midtown West',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'uvywFxcqbMkVnv@sAp@wDrMn{AneA~WfInc@{uAumBkoAkFtPeC{A'
            },
            children: [
              {
                address_parts: [
                  'Hell\'s Kitchen',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'uvywFzcqbMkVlv@sAr@wDpMpgAjv@n]cjALYTYHMpEqNwbAap@kFrPeCyA'
                },
                children: [],
                id: 152,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Hell\'s Kitchen, New York City'
              },
              {
                address_parts: [
                  'Hudson Yards',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'gnwwFdvrbMUXMXo]bjA|R`N~WhInc@}uA}i@e^{E~N'
                },
                children: [],
                id: 146,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Hudson Yards, New York City'
              }
            ],
            id: 124,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Midtown West, New York City'
          }
        ],
        id: 119,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'group',
        root_priority: null,
        text: 'All Midtown, New York City'
      },
      {
        address_parts: [
          'All Upper East Side',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: 'io}wFp~jbM_KqGyAfF}b@_Ye@vAvjEhsCtd@cyAkZo]sUmSiVaRgNwOcNiNyDsA{Gc@_OnCwInCyEc@gCyAuOtf@{BwAwKd]'
        },
        children: [
          {
            address_parts: [
              'Upper East Side',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'io}wFp~jbM_KqGyAfF}b@_Ye@vAvjEhsCtd@cyAkZo]sUmSiVaRgNwOcNiNyDsA{Gc@_OnCwInCyEc@gCyAuOtf@{BwAwKd]'
            },
            children: [
              {
                address_parts: [
                  'Carnegie Hill',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'kc|wFpklbMxO_g@_o@eb@gNpc@gAs@q@vBfq@nc@'
                },
                children: [],
                id: 143,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Carnegie Hill, New York City'
              },
              {
                address_parts: [
                  'Lenox Hill',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'owxwFhznbMvd@cyAmZo]_WsRiWeRyRzl@kVfv@dpAhy@'
                },
                children: [],
                id: 141,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Lenox Hill, New York City'
              },
              {
                address_parts: [
                  'Upper Carnegie Hill',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'at}wFnckbMjAn@lAkE}JsGyAdF}b@{Xi@rAvl@f`@l@uB'
                },
                children: [],
                id: 164,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Upper Carnegie Hill, New York City'
              },
              {
                address_parts: [
                  'Yorkville',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'cvzwFjxkbMfYa~@uMkO_NyMyDsAwGi@kO|CoIfCwEc@gC{AuOvf@pgAft@'
                },
                children: [],
                id: 142,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Yorkville, New York City'
              }
            ],
            id: 140,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Upper East Side, New York City'
          }
        ],
        id: 139,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'group',
        root_priority: null,
        text: 'All Upper East Side, New York City'
      },
      {
        address_parts: [
          'All Upper Manhattan',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: 'kmfxFrigbM}JsBob@}SaReG}a@_Wm]uS{V_Vg\\mZk`@yVaRgAmKpJmBtXCpMaHnSoIjHiBtTpKrSl`@bUpUa@dL~EdIlFjGnFzWvP`KxHxL|ExG|GvDjIjCvHzAhB|QbBbPsCl\\zN|]tEvBd@xi@d[yA`Hz_@vTrFkDlp@re@fq@vb@ny@glC|b@pYxAgFdKvGlKg]~B~AvOog@yHqRsMkLeO_HsIoHeI}PiHsKeIuEqLXgMb@}PzFyF~CcMlLeEpCeC~AgDl@yCNqFu@kOk@{Qa@aJFsT|@eMXiHHsJZ{f@r@'
        },
        children: [
          {
            address_parts: [
              'Central Harlem',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'ytexFfmhbMVNnAiBb@SjAPjb@vXdPbGdU|Nd@j@vEtBtE`BhJbGxIdJhKfHgGpRjCjB~@[~@ZtGlC`C`BdKvGbH~AxLxCx]eiA}ZgSrGcS}^aVci@c^_MgA{Qa@aJFsT|@eMXiHHsJZiNfd@'
            },
            children: [
              {
                address_parts: [
                  'South Harlem',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'kzaxF|zjbMbG|DgGpRjCjB~@[~@ZtGlC`C`BdKvGbH~AxLxCx]eiA}ZcSrGeS}^cVub@tsA'
                },
                children: [],
                id: 165,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'South Harlem, New York City'
              }
            ],
            id: 154,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Central Harlem, New York City'
          },
          {
            address_parts: [
              'East Harlem',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'uv`xFlfhbMv^pUgGhSzZtSf@sA`c@~XtAgF~JnGvKg]xBxAvOwf@qHqRuM_MmOeHgIcI{J_RqFuIaJ{DuLQiLl@{KdEoJhGeTvP_IbC{CC}H_@bi@h^'
            },
            children: [],
            id: 155,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'East Harlem, New York City'
          },
          {
            address_parts: [
              'Hamilton Heights',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'kccxFj|ibMaUcOePiGqb@wXg@K[Cc@VsAbBWIg[daAbj@`[uAnHz_@tT|FoDp\\{fAc@]'
            },
            children: [],
            id: 148,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Hamilton Heights, New York City'
          },
          {
            address_parts: [
              'Inwood',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'wfkxFlaebMbLc@xCZpBoCuK}IuEiGsPsMsHcJeTyQaKyFeVqDwJdHuFnVi@lL\\xHmFfOoF|CaCtG]`Kb@lNlFfHhIfH`OfHlNbC~NIlDoLhEwFn@wMth@}Y'
            },
            children: [],
            id: 150,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Inwood, New York City'
          },
          {
            address_parts: [
              'Manhattanville',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'utcxFrjkbMeJpYvUvQtCcInAH`Cq@M_CbAi@h@kAhA}Dc[iS'
            },
            children: [],
            id: 161,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Manhattanville, New York City'
          },
          {
            address_parts: [
              'Marble Hill',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'menxFntbbMkBkExBaDb@cAhAuIyHyBsH^s@rA_F|FgG~MkBhDjEzFdDvGzFnEdEzBdIy]'
            },
            children: [],
            id: 226,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/200-Bronx.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Marble Hill, New York City'
          },
          {
            address_parts: [
              'Morningside Heights',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'gb`xFrolbM}UqFeKwGgCgBmIcDcAXmCiByAzEiGcEkF~PmJeGkAtDi@pAcAf@L~BmAd@y@NgAOyChIfTtSpMpIhR~KdRtOt[idA'
            },
            children: [],
            id: 147,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Morningside Heights, New York City'
          },
          {
            address_parts: [
              'Washington Heights',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'imfxFxigbM{JyBab@wSkRmG_K_Gmt@sc@oBxCiDWoK`@ki@hZ]zK_ExGoDjMfL`FlIfFjGzFfW|O`K`IvMjF~FrGzDdIrC|HlAnBbRrAfPgChHxCbS~Ifa@vFrj@ofB{f@z@'
            },
            children: [
              {
                address_parts: [
                  'Fort George',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'spixFjqgbM~Sqo@}[eRwM_J{HcEoBpC_DQ{KXai@jZbBxCfAxCrAlBnB`B|AV~EGrCpArCfA|GnBbPhHnFpBzEbAzWvK'
                },
                children: [],
                id: 151,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Fort George, New York City'
              },
              {
                address_parts: [
                  'Hudson Heights',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'enhxF~dhbMgVaFeBeC_GgGwWsKcFoAuGeCyNuGcHkBeHwC{EFaBYoB_BqAmBiA_DeByCa@vL_EbGiDhMlL|E|H~ErGbGjKzGbKlGrJpH~MnFbG~GnMnXlNcBxTqr@'
                },
                children: [],
                id: 145,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Hudson Heights, New York City'
              }
            ],
            id: 149,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Washington Heights, New York City'
          },
          {
            address_parts: [
              'West Harlem',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: 'utcxFpjkbMpf@n[jF{PlG`E`JqY}FyDgCkBsBkB_FmFoJoGyLmEiQxk@'
            },
            children: [],
            id: 153,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'West Harlem, New York City'
          }
        ],
        id: 144,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'group',
        root_priority: null,
        text: 'All Upper Manhattan, New York City'
      },
      {
        address_parts: [
          'All Upper West Side',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: '_fzwFhhrbMhNkc@dCxAhFoPq@s@?aBc@m@q@O}@b@ap@_b@goB_qA{f@k\\_b@zpAhgEz|CfNyc@'
        },
        children: [
          {
            address_parts: [
              'Upper West Side',
              'Manhattan',
              'NY'
            ],
            bounds: {
              points: '_fzwFhhrbMhNkc@dCxAhFoPq@s@?aBc@m@q@O}@b@ap@_b@goB_qA{f@k\\_b@zpAhgEz|CfNyc@'
            },
            children: [
              {
                address_parts: [
                  'Lincoln Square',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: '{mzwFf{rbMjVkv@zBzAhFmPu@i@BkBQc@USc@Ge@FYZy[mSkSuMqd@~xAtp@|c@pD{MzAm@'
                },
                children: [],
                id: 136,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Lincoln Square, New York City'
              },
              {
                address_parts: [
                  'Manhattan Valley',
                  'Manhattan',
                  'NY'
                ],
                bounds: {
                  points: 'oz~wFdlmbMlCqGjByG{f@e\\gUnt@nGbEzLt@vC`@fCjAtJrGfJyY'
                },
                children: [],
                id: 138,
                locality_scope: 'ny:nyc',
                picture: '/static/images/regions/100-Manhattan.jpg',
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Manhattan Valley, New York City'
              }
            ],
            id: 137,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/100-Manhattan.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Upper West Side, New York City'
          }
        ],
        id: 135,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'group',
        root_priority: null,
        text: 'All Upper West Side, New York City'
      },
      {
        address_parts: [
          'Roosevelt Island',
          'Manhattan',
          'NY'
        ],
        bounds: {
          points: 'eyxwFbhjbM`DrD|G|F|FbCbCtClCdC`RrOnMfLzA`C~BdBzElApDzDnDhAdBnAxBOFaCmDwDyAkDeC}C{DiGwFeGcIcHgGqIwF}DaDkAyAaCmEoDqDuEiZsV_JyGuGyFgEsHgCmAuCsByCKmDJaCa@e@lA~AtIvAxChEtDtCfEzC|DfDpA|E`FbD|BxIvFzBlC'
        },
        children: [],
        id: 101,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/100-Manhattan.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Roosevelt Island, New York City'
      }
    ],
    id: 100,
    locality_scope: 'ny:nyc',
    picture: '/static/images/regions/100-Manhattan.jpg',
    region_type: 'borough',
    root_priority: 1,
    text: 'Manhattan, New York City'
  },
  {
    address_parts: [
      'Queens',
      'NY'
    ],
    bounds: {
      points: 'szswFvxkbMm@wHIaHT_Gh@{DfByIvFsVpGeX`CsDtCcCnEuBhGiBzEuB|CeEzDuItBaKfBwVxAuKfa@{OtJkDg@cClB_AbK]hEiFrFaAh@zCxB`DxEeApOsXlKxKbg@ybAlExEfGgLvDnD~Zul@rHhHzJmT{C}j@dIoc@sB_RoBeSnDqKVgBWwCAiB^sBrN}MyGcSiByHyAsIm@aFnP{BbRqDtKu@rGeAyAyJdSiDKsDnp@cKoAePvGiA|f@{HrAbPxSaD|AbPpGrPxPqPzAmBzO_KfDqF|DqClGiFbf@eKgJktAd`@kSfTqLvLqG`N}A`ShInMkFxNjNbS`GrK_@`GzElGfDhIeXnWvAvLpMvQ}EvQiYbM[nNt[iBlVhRt\\x{@p]jHpYpfAfgCtJpZ|@pk@Sl_@fS~`@dJd]LxUaJnWQbTpLje@jC|ZhIv[jPbVdDt\\~LpY|Q~Gp[eEzh@pCjCoH{@eLsqAynE{Beh@oz@eiEk|AsrGub@}gCcQ{|AaMgmAgBe|@tEyv@OwHuLeJ}HcMsDeSb@uj@LgJoCmDuEZkO|EaIr@wHpCsEF{EhAoB`BqYdYcRhPrAxEwBfAb@nAjAzNzEjT{@hd@qEzKcFpLgO`Q`@nLwBtF{JY}UgO{Y_GaQeYek@ifBsKwHi@{Ev@wEtBu@tF`EzC|@x@eAGqDUiG}BmBcNpFyCpBuFjEkAiDaE|BoCmAi\\m@kEuJmJuZqB{[oGcXcA}F_Mo@oNrBs`AjLug@aCo_@mI{Xz@yu@lC_eAjAig@t@_B]}]`F}HrByVkPqLuCoJuAsIwf@eBaNu@}LqAuRiPwnAws@fR_D}C}qA|GcClF_h@vaA}mCdeF{@`CpAhDnBdD|AjBlCj@pFtDdCPfGhCdDPp@d@x@{@p@GhCmBrDy@jFkB`ARpA~ApEnK`El_@u^n]_YpKsK|Ga\\b\\kAqMsJuDaPtDkd@r\\pIxh@|SnKlGrm@kKhByLCef@tjDpTtW|CpLgI|_AjY~nBb]KrGvRrSpLvYg`@EkZffAoBxXeTNyZzPr_@rLhs@i@`DaClH_CnDwSdPsHjGyBiW{KqMuQoKmu@llBcGyEc@cEiGqEsIdAiCbHf[tWoHrRhF`EjFi@hCdc@dGf@`[yC`Cb_@kNmAk]zKeRt]aIoFmWp^mPl~@x~A~uBeKhPhBlWbThPpQw@jF}PpJnSfOtUbThOjm@xg@|h@rg@x`@jUzQnG|MT~@iPmCqFsC_I'
    },
    children: [
      {
        address_parts: [
          'Astoria',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ydywFln_bMpAwIwDw]yJdC}@dAeWpC_ReAk]zKeRt]aIoFmWp^mPf~@x~AdvBeKbPhBrWbThPpQu@jJaSpTdh@xWnRz\\wfAv^{dA{CqSi@mI^iIlAgLv@wLBqCw@yBkHuFwRqE_KyFcJaD_FgCeH}ElAiDgUjG}Bk@lIk{@'
        },
        children: [
          {
            address_parts: [
              'Ditmars-Steinway',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'otzwFf{dbMrU_`@dNe{AdFqi@~@gU{BeUof@nF_@dEaEiAuGm@yIdBzEdHoDpCmHeGuDfHeCgFwD|DeFnJ~@nEcDrF?`@x@`B?p@~AbDx@tBAj@O~@@DDAFa@TtI`@fAzAxBdCxAz@JNHLP?PEPKNO@Oh@oBIoBeAqBsB}AiCEOCSMsLEWS_@{L{PMM}BrA{@`AqBlAGJAb@Kj@aCnDyDpGs@`AgA`A?FD?q@zBQlBUfBCHMtBQxA?l@MbAUzAoAhMMl@GNoB|QBxA\\d@Pb@~AnCv@GHFZfACHQT?Rj@l@B@PKF?V^fAbDhCzDf|@pfAhZeT'
            },
            children: [],
            id: 474,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Ditmars-Steinway, New York City'
          }
        ],
        id: 401,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Astoria, New York City'
      },
      {
        address_parts: [
          'Auburndale',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'wtswFrulaMoDs_@{CmWqTgrAsBaTqi@fLiP|AyI~D_TnEmVbH{^lRuWzKw\\vDlKfm@~EdVfXaW`\\qUfD{FpGkIfGiA`RyHta@n_@}End@de@PzA~Ur@d_@lA?bGnFtFs@lL?zQ|@b@og@'
        },
        children: [],
        id: 431,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Auburndale, New York City'
      },
      {
        address_parts: [
          'Bayside',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'wqywFpheaM}HpFyI_K_LhKwo@jq@a\\b\\kAkMsJwDaPvDkd@j\\pIzh@|StKzKtj@fb@ue@f\\qGbVw@rJQxMwA`QkIvTiIbVmLfMyCde@}J`PmGdK{BzYyLgEwOyGua@eMie@iIwm@}AwH}CgHkHiMaOlLgNtNcEtJsCfLeCvM_MnJcIpHwKrB_I~C'
        },
        children: [
          {
            address_parts: [
              'Bay Terrace (Queens)',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'gd|wFvbgaM{\\b^q@kOsJuDaPtDe^|W}A|StElUpTrNzKvj@zKiIjHcN|ImJnPcGxLgAzQc@fCSiF}UeDcQgByJqCqByMuXRiJ'
            },
            children: [],
            id: 480,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bay Terrace (Queens), New York City'
          }
        ],
        id: 428,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bayside, New York City'
      },
      {
        address_parts: [
          'Bellerose',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qlqwFbf_aM^wC|@yKt@qChBqFxBmEAwAyFa\\{C{[{Z`B_KjB}NbEaAwHwo@jUvHnV~Gv]uE~IeKpWdDhDpEtG|N~QPwAtH`@rBtWfMxPzDvGhDzDfCxDnDaBz@WjCgEfJaq@hGyb@dDoO'
        },
        children: [],
        id: 443,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Bellerose, New York City'
      },
      {
        address_parts: [
          'Briarwood',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'm_mwFlgpaMM}Cs@cF}Hmb@wIod@aBt@i@h@m@v@c@z@eAxCu@nA_Ar@oFbDq@^YH}B\\aEb@kCx@yBtAu@^yAXcD\\c@xORbO?x]k@rGy@~Fg@vEPnFpDfRvFwElJmGpMyPfM_IhWsKGqC'
        },
        children: [],
        id: 446,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Briarwood, New York City'
      },
      {
        address_parts: [
          'Brookville',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '_oewFpsaaMi@xd@\\v`ApS`KnQtHvR}LlRjNbAg_A`Bis@yQ`@IlEGnAk@pDsAxLwF{Ei\\{VuCqCqIkMsCcCo@lEg@xF'
        },
        children: [],
        id: 479,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Brookville, New York City'
      },
      {
        address_parts: [
          'Cambria Heights',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '_ckwF~kbaMzAo@`Bg@jFcCfIsF`@_@`JoFdD{Bp@kCdAwEbCyLh@wCnDqPxB_L|BqKh@{CxB}KaB_@kB[kIH}HTkNX}CNeNZuNVgHFiJNmFLaBAeLNaAzeAKnGEdCGTAtBxJ`m@`Bo@`Be@pEeBz@UtG{BrNeFrBm@jAc@'
        },
        children: [],
        id: 437,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Cambria Heights, New York City'
      },
      {
        address_parts: [
          'Clearview',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '{}zwF|xlaM|HwH`CqFp@aA_AcK_DaJmKim@cVz@yLfAoP~FiL|MgF~IlJlYhBtRyC~}@rGsMpa@aWvXsR'
        },
        children: [],
        id: 459,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Clearview, New York City'
      },
      {
        address_parts: [
          'College Point',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qt~wF~ywaMb]MdO~[zMY|W}ZEkZffAmBxXgTLi[oCsReLqGsM{OyMgX_JaJcNoGcF|Ic_@fCiUxC{R~EkWwIaPyGgBgNmIjaAjYznB'
        },
        children: [],
        id: 418,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'College Point, New York City'
      },
      {
        address_parts: [
          'Corona',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'a}xwF|iuaMzPr_@rLhs@zAxFlFuMfKyE|ViHfId`@xCdPlAzOrCtf@vG{D`]mE`LPzi@gQoOut@aEs^kb@inAaNqNwUcGqVrNqO`Hw^PsKhDcRMnChR'
        },
        children: [],
        id: 409,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Corona, New York City'
      },
      {
        address_parts: [
          'Douglaston',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'q{xwFp}caMk^vj@fPwE|OcErOsOzE_MnCiOtEmLbHcHxEiGxAcLu@yJYaGwTgd@cFeTyLaVgG_UyHzD}IfXcElEc@rH_G`K{AfMQnQsLbLiD~EuFrDuFYyNjHeIdOX|@eDtGiHhIm@hADxAXnAb@xAn@nA~@p@hCpC`B@lFfDvCHt@b@nANvDzArA?f@z@f@Gh@s@r@IlAyAtGqBhBSnCwAx@LjBpChCxKhIeE`QQ`KeI'
        },
        children: [],
        id: 429,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Douglaston, New York City'
      },
      {
        address_parts: [
          'East Elmhurst',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'oywwFzdxaMoCzWlAdELvJlB|ZhBbf@iZzCgR`jBaDy\\aAoE_EmP{BgGmIiRkBmEkAwEu@uFYyFSkHL{D`@wEdAmFnC{H|FeKnHcKhGsGrHkGvSeP~BoD`CmHh@aD`C~D'
        },
        children: [],
        id: 406,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'East Elmhurst, New York City'
      },
      {
        address_parts: [
          'Elmhurst',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'evswFls~aM`\\mMpQ{EtJyBfCg@s@uHOcNsAkLqHmZkF{VaMoj@ui@~QkDHgG[o\\lEwGrDdCzi@nK~sB`CiD|]uP`N_G'
        },
        children: [],
        id: 408,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Elmhurst, New York City'
      },
      {
        address_parts: [
          'Floral Park',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'exswFbvy`M~EnKrJvWbJdXgBj@fGvT|FuAfM_AtDa@~JSq@yKaAsKqD}WcIqp@qZbIwZrI'
        },
        children: [],
        id: 442,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Floral Park, New York City'
      },
      {
        address_parts: [
          'Flushing',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'yaxwFvqtaMv^QpOcHpVqNvU`G`NrNEaCm@wJhFc_ArSi}@|@{JXmSd@ob@{Q}@mL?uFr@cGoFmA?s@e_@{A_Vee@Q|Eod@ua@o_@aRxHgGhAqGjIgDzFa\\pUgX`Wq@`AaCpF}HvHwXrRqa@`WsGrMsEfn@}G|SsCbNBdJ~JtBrWbDpK|AnL~ExP|IbNrGrIdJvOdZ`LvMdLrGdRf@rKiD'
        },
        children: [
          {
            address_parts: [
              'East Flushing',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'mfuwFnyoaMsOmZqGmLr@aW~I{DpIrBs@e_@{A}Uee@Q|Eod@qa@{^wUdJuCHqGhIz@tP`ClExLnWxMpLrYpYE~PaAnc@QrSgZxm@xJhb@rO_Vvo@qs@'
            },
            children: [],
            id: 456,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'East Flushing, New York City'
          },
          {
            address_parts: [
              'Murray Hill (Queens)',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'mczwFfeoaMa@zO`AdLhFvy@`EgClYsDtB{@zQcHbHqChF}AyLckAaGodAgAs`@gVsAcGk@R~HqI}EgX`Wq@`AaCpFdIfPhHvQ_@pS_An\\'
            },
            children: [],
            id: 457,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Murray Hill (Queens), New York City'
          }
        ],
        id: 416,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Flushing, New York City'
      },
      {
        address_parts: [
          'Forest Hills',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '{nowFdjxaMbFWxGIfHs@pK}@~MiBbEyCvBiDoI_b@EmC`@mEF{DUmE{AkImGqRcBgOKkGYgAwC}B_@ZeOa^qFq^aDjLwB~LoCbG_NjN_J|G}PzIeTjIk^|\\aMvEa[~B`Ong@nBfHHgAj@jEd@YfCvLjPcHWiApByA_BkItBcAdBvIdCmAeBuIhCaAdBtIjKeFlCL`C`K|G|DbWhNXzFn]wB'
        },
        children: [],
        id: 415,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Forest Hills, New York City'
      },
      {
        address_parts: [
          'Fresh Meadows',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '_~owFtgkaM}Ak@o@[s@QaFO{FF}AFaPlG}Sq`AqWxJ|I|_@vFr_@wEh@yAH_DyA}B\\uPsAoFQ}Fk@oEeXwH{g@sDmQgAyOP}@s@iDjE}BfDoAjEqArOyDjBm@hJ{DlDkBlEmCxPeLpAu@xFoDlI}F|ChT`E`UhHvSfNdQbBpKrAtKBxMjBx^'
        },
        children: [],
        id: 419,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Fresh Meadows, New York City'
      },
      {
        address_parts: [
          'Glendale',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'arnwFfeyaM_F~m@BjTXfM`Ex{@UdWdg@~JhIdClTzQxXpWb]~RsCck@dIoc@sB_RoBeSnDqKVgBWwCAiB^sBrN}MyGcSiByHyAsIm@aFsSfGk@yDoQhLi@sBwBiDeBq@aLoCuCwB}AwCoAgGe@mHRmIv@yHLmFnKr@`@iKeCOi@kOeH\\x@kQsOzLeBs@{GAbG`WyBfC{C~@gTtAcHl@aAbM'
        },
        children: [],
        id: 413,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Glendale, New York City'
      },
      {
        address_parts: [
          'Glen Oaks',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'cltwFv__aMtE_JqKmd@qBaIaCaG}CqGcCmGoTqf@uEwI}D_JaDuKgCqFc@j@yDxGcFtCcMdAgERwFyA}@]h@dEd@fKM~JwApWH`I@lDl@zH^fC|@rDtAjDvBbDrBbCdA|@dAp@bDtAzE~BhE`DhIzPxGfHnBjAhMfDtW~RnEsJdDaK'
        },
        children: [],
        id: 439,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Glen Oaks, New York City'
      },
      {
        address_parts: [
          'Hillcrest',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qkpwFh}maMsZwnAg`@|K}AD_DwA}B\\gNkAiTk@nC~P~@|Pm@xQYnQl`A|AdL{@lYcA'
        },
        children: [],
        id: 453,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Hillcrest, New York City'
      },
      {
        address_parts: [
          'Hollis',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'aimwFdshaM|AwP}AuRiCwXcANaCePjAmCj@qEb@sMBmDr@}Dd@cGuFge@qg@lPoUtP}UjOdKh\\|GnNfNbj@rFfZ~Dh\\b`@oNpLcDIcK'
        },
        children: [],
        id: 434,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Hollis, New York City'
      },
      {
        address_parts: [
          'Howard Beach',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'cjawFlhwaMt@_r@cE}p@sM{|@qIf[aK~@tDsDpFaNnBiHi{@xOsp@hWit@joD~RyCu@sIYuEnGiAvVyDtO}BxAhPlUqDHbSrDpM`YwSn_Amm@'
        },
        children: [
          {
            address_parts: [
              'Hamilton Beach',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'stcwFhvraMzArG\\x@t@b@jAPx@h@|@dApApArQsCtC_CpGuOnBiHsX`FwVhEE`B'
            },
            children: [],
            id: 467,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Hamilton Beach, New York City'
          },
          {
            address_parts: [
              'Lindenwood',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'atdwFdawaMyHeQyKi[sDkLiQvCub@htB|GaA`JwAu@sIYuEnGiAvVyDtO}BpArPtU{DHbSrDpM~TeQ`CqAoD}E}b@wm@'
            },
            children: [],
            id: 470,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Lindenwood, New York City'
          },
          {
            address_parts: [
              'Old Howard Beach',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'sbfwF`juaMbb@wHh_AwN~M{B|[wEtCmAsM{|@qIf[aK~@kUlEeRvDq@cCgB{Rym@|UsP`z@'
            },
            children: [],
            id: 471,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Old Howard Beach, New York City'
          },
          {
            address_parts: [
              'Ramblersville',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'k}cwF~osaMzCq@fOsCvNuC}LlBoCwCy@k@kAQu@c@]w@e@gBu@kDDaBaC^uHvBfBzRp@`C'
            },
            children: [],
            id: 468,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Ramblersville, New York City'
          },
          {
            address_parts: [
              'Rockwood Park',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'cjawFjhwaMt@_r@cE{p@or@|L}l@pJi_@hG`H|SjHtSxHdQzPrVpV`]n_Amm@'
            },
            children: [],
            id: 469,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Rockwood Park, New York City'
          }
        ],
        id: 425,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Howard Beach, New York City'
      },
      {
        address_parts: [
          'Jackson Heights',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '}xuwFprzaM_NfH{NhG_YbM{\\jDgTduBpHvC|m@vb@n`@}SbKaApU{KoK_tBeC{i@'
        },
        children: [],
        id: 405,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Jackson Heights, New York City'
      },
      {
        address_parts: [
          'Jamaica',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'exlwFphpaMpQuGlJ_EyAgPmJof@oBeJmDiNiBqKoAyK_EoS{BePyBkLaBcKcBuLP_LPgHj@cIAUaLfEwCz@m[|K|Eh[F`@BjAGb@o@fDEt@NvAvDhObAjDrClJtDbSpAjGvYv}Ad@|CLfATnH~EmB'
        },
        children: [],
        id: 432,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Jamaica, New York City'
      },
      {
        address_parts: [
          'Jamaica Estates',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'yjnwFhpkaMgEkPMwAPeBb@yBBa@?oAGc@cBgKkHef@gAuHwDqVkFwSgEgQeAkC{FqL{DgLeDyKmAiDsCrBiAlA_AnAeA`BaAhB[r@iDrIgBfEgApAqAbAqDzBf@|FdCzNlDrRfHlSfNhQbBpKvAx\\rBxMGtM`AXd@bAdA|Aj@b@fAl@l@PPBxFZ`Bt@vC|AhBfAr@LtAL\\ARErDyAxAUxBG|B@FALUq@iC'
        },
        children: [],
        id: 447,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Jamaica Estates, New York City'
      },
      {
        address_parts: [
          'Jamaica Hills',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ednwFpalaMIo@wCmJKRMDsBE}BHyATiCdAm@TQB_@@{@GkASiBgAyAw@}Aw@aAa@a@GeFYq@SgAi@i@c@eA{Ag@gA_DaAm@[s@QaCKeBC_HHuAHaANi@NoBpAeClAgDpA`DvMzHr\\lE~Q~FxUfFxTlHyAnFmA|GsA|Dc@vBq@|BuAlBu@tGs@dB]pCiB~BsAfAu@h@y@pAqDdAqBvCcBaEyTeBoIcCsMS{@'
        },
        children: [],
        id: 421,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Jamaica Hills, New York City'
      },
      {
        address_parts: [
          'Kew Gardens',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ajlwFplraMaAwJsB}LyAqMkAsNI}Lga@zPgM~HqMvPoJlGwFvEtFx^dOx]`JgKxErLbAvA`KnG~B?zH_EhAJrCnGrSen@{B}T'
        },
        children: [],
        id: 424,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Kew Gardens, New York City'
      },
      {
        address_parts: [
          'Kew Gardens Hills',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'amowFjpqaMQoF`BuMj@uGEie@MsG`@yOyXvFi[`IyMTmFpAkFg@yy@{BQlS}@xJsSj}@gFj_Ap@lJxGIjUyD~Su@tn@qVhFcEjJ{O`IyG~IyEpD{@vLbA`Eb@rFyBqDiR'
        },
        children: [],
        id: 420,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Kew Gardens Hills, New York City'
      },
      {
        address_parts: [
          'Laurelton',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qoewFxvdaMQ_f@EmUViWZ_JQeAs@cCu@aBcAcBaAeAqFwEoBeAqEsCkHkE_HmEsAu@iBoA_Ay@oBwAkBiBmEuDmP}O{GqEoHqEsIuE{BxKe@pCiCxLwBtK_DbOuBvKWr@aAfFiA|Ea@jAqC`BcJzFoA`A}GvE_EhBvPvKtEbCrEjChOlKpIxDzIpC|B|@tBfAfFnDjMhIzExApE`AnKt@~JfAdHa@|Ex@~E`AtDxAjFbCEiC'
        },
        children: [],
        id: 436,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Laurelton, New York City'
      },
      {
        address_parts: [
          'Little Neck',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'sqwwF|w`aMzH~Q|@tAbA`PrFwDbFoCnDiB`DuBdIqJrDgBbDaDvI}LdE}@dCkDRiDm@sGoCgGgTaKqEuAoD_CaH{KiCiGiDqCwSsC}HF}HnAoUlEbFdQbFbLfH`Of@rDlCdL|HpN'
        },
        children: [],
        id: 430,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Little Neck, New York City'
      },
      {
        address_parts: [
          'Long Island City',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qsswFr{lbMhBuPcHgKgBiMt@mSyFwAeKs]eOuc@}Kkd@yOmzA_Eu\\gB}WoAkLgGzBM_AoEng@`BrOhB|OoTdj@sYn{@yMff@pn@vg@rh@jg@ja@|U|VhIhHu@'
        },
        children: [
          {
            address_parts: [
              'Hunters Point',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'aluwFrogbMqNjOod@lrArh@~f@ba@~UlWxIhHs@hBsP_HiKgB_Mr@mSiF_BqKq]aO}b@eLce@'
            },
            children: [],
            id: 478,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Hunters Point, New York City'
          }
        ],
        id: 402,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Long Island City, New York City'
      },
      {
        address_parts: [
          'Maspeth',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qqpwFvuebMtJkDg@cClB_AbK]hEiFrFaAh@zCxB`D`FaA`DkqAn@eWbCkoBkIgC_MeFgUeH}O{BiNJ_ThCeCl@wJrBqQzEa\\lMaN~F}]tPaChDfDuApFH|RpV~KfPxLha@xH|cALxHp@bG`@|B~AdHnD|HtBrC~C|BnPhKhHpGfa@yO'
        },
        children: [],
        id: 410,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Maspeth, New York City'
      },
      {
        address_parts: [
          'Middle Village',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'axnwFxx{aM[oNCaT`Hc|@sHa@gCQcDbB{MbOcMnLq]n[aDpAwOrF_IdB}LQrArGxCbNvHh[jAvJN~Nr@tH~SiChNK|OzBfUdH~LdFjIfCXgWcEyz@'
        },
        children: [],
        id: 411,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Middle Village, New York City'
      },
      {
        address_parts: [
          'New Hyde Park',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'exswFbvy`Mw@wA`B`L|@pHjBjN~Dn[dE~Z|FiB~FyAgGyTfBk@wU}p@_FoK'
        },
        children: [],
        id: 449,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'New Hyde Park, New York City'
      },
      {
        address_parts: [
          'North Corona',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'g~uwFhcyaMw@aHyCePgIg`@_WjHeKvEgE|KoCzWlAbELxJlB|ZhBbf@pAO~XcMzNiG~MgHiDgn@'
        },
        children: [],
        id: 407,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'North Corona, New York City'
      },
      {
        address_parts: [
          'Oakland Gardens',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ktwwF~scaM~C~EtA~LrB|NtC`e@lBvVlA|IrAjIbFtS`BpKg@fXhcAe_@~PsFrOyDrFeBrGkDbWkOxWoQ\\aP|AyRo@mMkAiJuBoHyC}IiCiFmCyDkDeGmC_C{HwKmHqFiFsIgM{PsBuWuHa@`Hl]qPhArHfu@cNjNgHax@uSvHaCsLoPvFqGnCsAXmBhFiDxAqOjGiKxHsB`BkApF'
        },
        children: [],
        id: 451,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Oakland Gardens, New York City'
      },
      {
        address_parts: [
          'Ozone Park',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'c`gwFtjxaMnSmbAvFcXhDeRlK_k@iLxE_JzC{i@vTqRhHg@nGo@hFSvDp@lEN`LLrB^~OJrC\\fPNdB?|BXvGb@lSb@dMLzExAYrBWpFy@nIiAjCi@lE}S'
        },
        children: [],
        id: 426,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Ozone Park, New York City'
      },
      {
        address_parts: [
          'Pomonok',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'qepwF`pnaM_EwQsf@~BkKG_JQyf@o@oBYIpM]fTv_@|@vOd@xHPzC`@`@@~@IjAStBs@XG`IAjCQhCk@jLcD|Bi@jE}@_BqH'
        },
        children: [],
        id: 454,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Pomonok, New York City'
      },
      {
        address_parts: [
          'Queens Village',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'm}owF`v~`MpK~InUpAtWyFtMWpNg@vIJiA`hAG|EGnBEV?lBDd@lCzOdFd[qb@vNyg@lPiRbNyX|QoGtFiDlGeCtG}CfH_IxGLyP|AyRo@oMkAgJ{C}K{CwIoF{HkDeG{FiHmEmFtB[x@Q\\[xBkDzR_vAp@aCj@eClAiGlAaO|@iD~AcF~JlAhEt@bE|@lFvApFrC'
        },
        children: [],
        id: 438,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Queens Village, New York City'
      },
      {
        address_parts: [
          'Rego Park',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ktqwF||zaMvOsF`DqAp]o[bMoLzMcObDcBfCRrH^bHm@QgHeAaDcBREy@_QzAyGHsd@pCY}Fa`@gTaCaKmCKkKbFeBuIiCbAdBtIeClAeBwIuBbA~AjIqBxAVhAkPbHgCyLe@Zk@kEi@dIlQd|@`Mnj@|LP~HeB'
        },
        children: [],
        id: 414,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Rego Park, New York City'
      },
      {
        address_parts: [
          'Richmond Hill',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'w`kwFpioaMod@rUcNbENdMx@hLx@fIn@bFvBdMtCxYj@fEgBxF}AzDaDfJqDbL{BjHh@fAlArB`ItKHw@nOiGxi@cSrGoC|OmGSe@og@qmC'
        },
        children: [],
        id: 423,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Richmond Hill, New York City'
      },
      {
        address_parts: [
          'Ridgewood',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 's~jwFvqabMzJgTg]_SyXqWmT{QiIeCeg@_KcCjoBo@dWaDjqAhOwXlKxKjg@ubAhEtEbGiLrDzD`[}l@pHfH'
        },
        children: [],
        id: 412,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Ridgewood, New York City'
      },
      {
        address_parts: [
          'Rockaway All',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'cgmvF~bibMypGm~Ze_@ckDsBk~@`Fst@sAeMqJuEqNma@b@sj@aCqOaVrFaIr@wHpCsEF{ElA}\\j\\}GrfB}AGqEzKfB`CgB`G{@hHiHOaAlDaAlFjHh\\tCxCvBbSetAxtAsc@dbEiv@dOxLvg@yLpVxb@{D`PgCvbBd_@dI{RuD{KoAcHhDqVzAsGpTsNLho@fOre@vQ_FvQgY`q@pxA~Yal@bzEv|TznA}j@'
        },
        children: [
          {
            address_parts: [
              'Arverne',
              'Queens',
              'NY'
            ],
            bounds: {
              points: '}xuvFpcmaMcQ{|A_SlBot@dAuBfJsHsDuDmEyBjDbUv`@hBnT^xNnBtWbHnQrKcHr@GxKuLho@oF'
            },
            children: [],
            id: 448,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Arverne, New York City'
          },
          {
            address_parts: [
              'Bayswater',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'ae{vFbpgaMtCxChC{@tEmEhF}LhCbAnEbDzo@lEtCc@n@iGj@sHqPg\\yBwMd@yU{AmIsM{@gKtb@yZuHqEzKfB~BgB`G{@jHiHOaAjDaAnFjHf\\'
            },
            children: [],
            id: 462,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bayswater, New York City'
          },
          {
            address_parts: [
              'Belle Harbor',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'edtvF~_yaMnl@mXw^qpA}k@vXLvKnAfLfAnDfKpUvLdZ'
            },
            children: [],
            id: 463,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Belle Harbor, New York City'
          },
          {
            address_parts: [
              'Breezy Point',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'chpvF`ufbMxX_LiMql@kEdBa@es@cBuYcWkAc[vMdQze@~A~Gh@bLOtEFlJ|BxJvNzB`ClIhDrO'
            },
            children: [],
            id: 464,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Breezy Point, New York City'
          },
          {
            address_parts: [
              'Broad Channel',
              'Queens',
              'NY'
            ],
            bounds: {
              points: '}i_wFtlsaM`PgC~T|EvlAfXdI{RuD{KoAcHhDqVzAsGpTqNLho@fOre@vQ_FvQgY`q@pxA~Yal@fQeu@mk@qiAi^yeAsTmq@kz@cmCetAxtAsc@fbEiv@bOxLvg@yLrVxb@}D'
            },
            children: [],
            id: 441,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Broad Channel, New York City'
          },
          {
            address_parts: [
              'Edgemere',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'yqwvFlmjaMff@iDqMuoAe^hAnEtrA'
            },
            children: [],
            id: 466,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Edgemere, New York City'
          },
          {
            address_parts: [
              'Far Rockaway',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'y_yvFzpdaMXtDe@xUj@rAlAbK`B|BnMfXfBNy@lHQrHdAjDz@tEnTPfVcAgBe|@tEyv@sAeMqJuEeFsOkGwPb@sj@aCqOaVrFaIr@wHpCsEF{EjAoB`BmYhY}GtfBzWlHfHcZ~AoGrMx@`AxC'
            },
            children: [],
            id: 440,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Far Rockaway, New York City'
          },
          {
            address_parts: [
              'Hammels',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'qmuvFjroaMAqNk@mG}Hyu@io@pF_DpDwD`EcCxLy@xHva@js@pCxKpHtItOaKjOqH_CaKq@eE'
            },
            children: [],
            id: 473,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Hammels, New York City'
          },
          {
            address_parts: [
              'Neponsit',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'uvrvFjfxaMsl@rXzJ`QxCuAbElO`Bq@b@jAp`@yQ}Mmf@'
            },
            children: [],
            id: 465,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Neponsit, New York City'
          },
          {
            address_parts: [
              'Rockaway Park',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'sqtvF|lraMm`@|PjHv_@ChL|@|EtCr@VtIjd@aTqSe}@'
            },
            children: [],
            id: 452,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Rockaway Park, New York City'
          }
        ],
        id: 477,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Rockaway All, New York City'
      },
      {
        address_parts: [
          'Rosedale',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'cyewFd}~`Mug@aCo_@mI{Xz@gA|Dbj@z^rQlQ`VrNjIvEfOdQvAcKrCbCpIlMvh@hb@~BmRP{Gps@oBgPmj@aByUaDoUkHyUe{AlP'
        },
        children: [],
        id: 444,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Rosedale, New York City'
      },
      {
        address_parts: [
          'South Jamaica',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '}rewFh`maMLsHDyKGmOK{He@kUaGcAaYqEkNmGcLoPeBcHsFmImD}GsAaCmEcRM[yAcFkBkFuHaLaCqAqHpOcHhL}HhLkGrEwPpLmTrPcApAwDpFkAjCqCbJ{EdGk@f@}KhL}@r@c@RGx@UVcA~@gGjEvFxYnAtKjBtKjDfNpBhJlJlf@xAdP|GgDhDmBhDaBbO}GxTkKbEsBrMaGtd@eQtAm@pAe@dDqArE_BnK}DdEmAvCi@hCQrDKtD?fHLvDPzJbAH{I'
        },
        children: [],
        id: 433,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'South Jamaica, New York City'
      },
      {
        address_parts: [
          'South Ozone Park',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'endwF|vqaM_Lqu@_@}KmBeKwHeVlCu`@_]gEkNBuFLuFf@}Bv@mFnBgGdC}HpCuErByBv@cE`AsBz@yFxBrBnKtFnZ|ElWn@|CjHd`@pBrJ`BzI}AtQw@hG[hDqCjRsCbPiAfPGp@bw@}Z`c@gPd_@{Mu@we@'
        },
        children: [],
        id: 427,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'South Ozone Park, New York City'
      },
      {
        address_parts: [
          'South Richmond Hill',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'miiwFjjuaMvXqKlBxPpBaXtB}Sr@kDxDmW~Du`@sEkUe\\keBsIjEtBjOaCaOuOjHuh@bShv@x_E'
        },
        children: [],
        id: 450,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'South Richmond Hill, New York City'
      },
      {
        address_parts: [
          'Springfield Gardens',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'waewFdbjaMrB_M~BeLrFeQfGqUbEgJbGkNzYip@mRiNwR|LaMcFoSaKqPqHuDc@gGwAsIPqIw@wFKeQeEwC_BgRqMcVqIsSkNlB`IvAlErD|K`BjErQth@lStEkOna@yGdO`CnAvHbLv@tB|C~JjEvQdAjBvDnHbBnCrCbEdB~GbLpPjNlGz`@rGnH`DjD|BvB}^'
        },
        children: [],
        id: 445,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Springfield Gardens, New York City'
      },
      {
        address_parts: [
          'St. Albans',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'eeiwF`lgaM|CmGrCsIrG}MvJ_XqE}@{C}@uGyAmD}JsCwGqGqRgGsRuBwHgBuFqNgIaMgIeGlBqEhAcFbBeDrAyFjBqElBwEhAsThIuBp@gNzEnAfIdBdPlApL}ApJMlKu@nLwA`E~B~NhAY`AvMj@nI~@hKf@tHi@rHg@pFDzJi@`IOlFSxM`BvLbBbKxBnLfAfIzHkFfAaDvEoCfAcBtCyDjBwBtDyDxAcF`CeGfB}BlCcEdLuIlEsDnAe@bEoD|B}AbDmB~CiCpEkDbEqGlFuIvHwM'
        },
        children: [],
        id: 435,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'St. Albans, New York City'
      },
      {
        address_parts: [
          'Sunnyside',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'cbtwFfxjbMdF`B~Kki@dDiNfCqHnBoCrF{BxBk@lEyA|EsBxCkEbEuInB_K|A_VbAoHf@c@sH}IsPqK}C}BsBoCcBwCmAiD{@gDeA{Fq@cGMaIyEoAqAFwWsGl@uG}J}BT{DyTwCE|@cL_Bl@uK{At@w@?wB{@aIqAyDxArAbLfBvWbGfh@tMnoAdL`e@zOhe@zJd['
        },
        children: [],
        id: 403,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Sunnyside, New York City'
      },
      {
        address_parts: [
          'Utopia',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'yiqwFfdkaMsMcm@oBoIqWxJ|I~_@vFv_@pQ{GfG_ByAaH'
        },
        children: [],
        id: 455,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Utopia, New York City'
      },
      {
        address_parts: [
          'Whitestone',
          'Queens',
          'NY'
        ],
        bounds: {
          points: 'ga_xF~vraMlh@pRpEcDrb@uEb_@iCbF}IyP_JcJ{DoLqBae@iHsOnAnOoACeJvCcN|G}SlE_k@zCqaAeBiRmJiYuPnLwJpB_MF_f@hjDlUjVlC`O`BrK'
        },
        children: [
          {
            address_parts: [
              'Beechhurst',
              'Queens',
              'NY'
            ],
            bounds: {
              points: 'sj_xFhinaMxfA|HxC_~@uBkSaJwXaP|LwJnBmMIsQ`qA'
            },
            children: [],
            id: 461,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Beechhurst, New York City'
          },
          {
            address_parts: [
              'Malba',
              'Queens',
              'NY'
            ],
            bounds: {
              points: '{j}wFluqaM_KuBwKtAwBEc\\nRfBfNtTnIvR`HvJqCfN_CdLuAba@yCbF}IiS{J_JeEqK{AsWeD'
            },
            children: [],
            id: 460,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/400-Queens.jpg',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Malba, New York City'
          }
        ],
        id: 417,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Whitestone, New York City'
      },
      {
        address_parts: [
          'Woodhaven',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '{thwFf}yaMuAuJbSkDkFgtB}BmQ]uEwXpKeMap@Sk@Nr@{tAlh@xAzF|GlNnIth@RdF|AvVbNtiAd@dDvSmGbPwBtRoDhKo@vGkA'
        },
        children: [],
        id: 422,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Woodhaven, New York City'
      },
      {
        address_parts: [
          'Woodside',
          'Queens',
          'NY'
        ],
        bounds: {
          points: '{kywFtu`bMa@jFgAvLzBf@hIqBzJsCkAdDdH~EdFhCzIzC`KxFjOvDpEhBlGdGBr@dLmEhFNdHbBfAQe@jKzK~AFeAzTvCUxD`K|Bo@tGfWpFvCj@dDfAyH{cAyLka@_LgP}RqVwFQ_[dOwJt@o`@~S_d@cZuGmIyI_B}Ezf@'
        },
        children: [],
        id: 404,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/400-Queens.jpg',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Woodside, New York City'
      }
    ],
    id: 400,
    locality_scope: 'ny:nyc',
    picture: '/static/images/regions/400-Queens.jpg',
    region_type: 'borough',
    root_priority: 1,
    text: 'Queens, New York City'
  },
  {
    address_parts: [
      'Staten Island',
      'NY'
    ],
    bounds: {
      points: 'srdvFjoedMtQ_^gKs^kB}\\aMkPoGi^eAqMaCy|@i[om@oa@ef@gEvCeEbBfEeBfEwCpTk}@wt@ubAsAyM{Us_AqI|BsIrEgA|@eA`AcDbCfDkC`A}@`Aw@tIuErI}B{Lmf@ePod@mA~@lAcAwl@e{Aq~@}y@cQrJuNnNwE{FsHwNiDkFwEeGoGeKqMiOz]{r@jCbEpIyF`\\_i@ae@_u@cb@_JiDzMhD}Mo_@ev@mDrB_E~IiJvUaJzU{H~SaEqGu@iIoHDeDnGuDyCk@aAbJiQzS}g@~KqT|GqW_]i^oToSoTqc@?A_f@wk@@Aat@sv@{_@s_@eVgBsWGaYdXaj@|WcKhI{_@`u@kUpEj@tYTxEWoEa@iRqbAaN{Hj@f@hMk@iMsCZqe@vKiD`L_Mz`@wAbKXlLqApGk@zJpJfYnFt^Pv]\\th@KrFdJuEgJxEsGx@tRj_AfGlw@g@tGnHngBpEt@vFzi@uIdm@yJt`@wFIiLng@B`d@z@`m@lX~a@|c@xc@?B`^n_@th@vGhb@uIhRk@hAeSzFiKbLpBtO`MlPCk@iUj@fUv{@_Ktg@`s@h`AzKpAcJiBsJf@gTf@eYnNo\\gBuOkFuGrAq`@uCcF{KgB_SdPeTx@gOmCgSgKiNmPgScG}BrFGfX`Fj`@xEn_@{L{`ADmX@BdEcKhGmN~O{]nCgH|@gFRwCZcGV}BFWTKh@CfAVx@ZxHtLlJrJbAp@|@R~JlBjBTjXnBvWfBtKTfITzHZpIc@Eu@uWak@wLyWuCeGqGyNoCsFoCaF}@{@_EaD{@}@sBoCyBkCiCkD{AyBuHwJeKcHcAmMg@wH}Ci@hAuFG{A@sABc@JYdEsHtDcIPKnBgEdAyAb@STGVAdANp@P|@H^Cx@_@b@c@j@{@Tk@RgAPuBxJnUvLxNfOnk@xMh@|NiBT~Do@pJhCrFjBnNvCdDhLfJnAk@bBrEpXr_@D?G?{DvLpBzVsDnn@yN~f@bAlHmFzVxEhTpBtLTzPnQtQjNhOABdH|IfEdJfCvJBC{@pHh@vMjBbNyGjGvFj`@{Jrz@nL_DiL~Cle@hgAlSr\\|NbZ``@fHjj@aUx{@gG?GrSsGbKrIhI~LbHrPhDrNhSlNjLPjErI~N~Cbc@_HpVuS'
    },
    children: [
      {
        address_parts: [
          'East Shore',
          'Staten Island',
          'NY'
        ],
        bounds: {
          points: 'ygwvFbakcMeBqb@pFx@~T`CjH{GhFSvGtBrFtCvHtEfBpAbCRfB]?Az@v@jCnCjAzAf@|@PlAHzBH~@nAjAoAiA{@rCkHd@cGxDiDfFkVpYrPpg@}@pB_@jBzJpUvLxNfOnk@xMh@|NiBT~Do@pJhCrFjBnNvCdDhLfJnAk@|x@}z@CDlJKdI_AjB]@OjCaEv@WfAkAdT{\\sHwNiDkFwEeGoGeKqMiOz]{r@jCbEpIyF`\\_i@ae@_u@cb@_JiDzMhD}Mo_@ev@mDrB_E~IiJvUaJzU{H~SaEqGu@iIoHDeDnGuDyCk@aAbJiQzS}g@~KqT|GqW_]i^oToSoTqc@?A_f@wk@@Aat@sv@{_@s_@eVgBsWGaYdXv@pK`@dBp@fBjAdEhDvJbFjNfFfNZOt@w@b@w@^}@Pu@t@{AQ`D_@fNeCrJ{E|PyA~Fw@~E_@xCWxCShDhFf@kFe@WpTEjHUrE@v@SlBWbByAdIk@nB{JnZMS}CzIiBvIm@jKb@|YRhVZIRrQJrHEtC[rEMnAoBfM[fCK|EBlCFnBPjBf@`DxEbXbDa@tNs@bRg@dDObCGfD?ZDZT`AdBpD~GdCbAtG`DrJdFbH~DzBjAdCgv@'
        },
        children: [
          {
            address_parts: [
              'Arrochar',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{exvFrqbcM[eBk@sAuCoCD}@VQnALf@Sb@m@rAwCtBiBkPat@gGxDkAqDcEq@O`Ao@jBeAtFQdD_@fNeCrJ{E|PyA~Fw@~E_@xCWxCShDbHp@hEh@fAHx@ItCwA|Eq@rAd@tAj@rBtAlE`FPHNqFv@mDlAeEb@}CEgB'
            },
            children: [],
            id: 510,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Arrochar, New York City'
          },
          {
            address_parts: [
              'Bay Terrace',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'mcovFxmncMiDkFwEeGoGeKsMiOmHnGwL~CyJ~AkKfABb@SlA[`A`EpDpCfB`DhArBxBhB`CjAf@dFjAjAn@f@l@xA~CbB|EwGdMPlJjBjE`CzDaA|AlJKdI_AjB]@OjCaEv@WfAkAdT{\\sHwN'
            },
            children: [],
            id: 511,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bay Terrace, New York City'
          },
          {
            address_parts: [
              'Dongan Hills',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'giuvF|ohcMeZqd@f@}@dA}BhJcUmDwE}DmDhJcUS[aT{QoNsLiCkC{BwC_F~B}EwRc@\\mJ`FtBhI_AlAdBfGoArK[zJmDcB_FcBoGcBuFiBgEgBf@nDv@hD?dBDfDP`Dt@pCpAdC|EjFgFpSwE`QjHrCxEfE`JxInIzPP|FjAnBnIxPChQpFx@~T`CjH{GhFSvGtBrFtCvHtEfBpAbCRfB]{@_AvDgIlDmIqYsc@'
            },
            children: [],
            id: 522,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Dongan Hills, New York City'
          },
          {
            address_parts: [
              'Egbertville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ugtvFf~lcM|BMnAOR_B|@_ENcBN}IJq@Tu@jCcFm@k@gEeN_A}AcEaD{CuC{@rCkHd@cGxDiDfFkVpYrPrg@Xe@l@k@n@e@n@o@l@u@`AeB`@i@bDeDbBkAvF_Dd@QRCh@BvDfA^C'
            },
            children: [],
            id: 523,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Egbertville, New York City'
          },
          {
            address_parts: [
              'Emerson Hill',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'sxxvF`igcMiDsAlEmPnFcT}EkFqAeCu@qCSaDCoG{@qDgDHsFt@yGwIPa@cFcFcAoASlBWbByAdIk@nB{JnZMS}CzIiBvIm@jKb@|YRhV~Aa@Vk@j@s@pFqG`BqArCMpAU`AFj@Tv@b@f@JlBPnA^lAf@HwAxCeBrBm@hEKpAzDrB_FhEoL}BaA'
            },
            children: [],
            id: 526,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Emerson Hill, New York City'
          },
          {
            address_parts: [
              'Fort Wadsworth',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'o~wvFfc~bMeVgBsWGaYdXv@pK`@dBp@fBjAdEhDvJbFjNfFfNZOt@w@b@w@^}@Pu@v@_BbAuFn@iBPaAbEp@hApDfG{DrBzIvC{BdAaAzAeAlAgAzAaA^Gf@ObFiDhWqY{_@s_@'
            },
            children: [],
            id: 527,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Fort Wadsworth, New York City'
          },
          {
            address_parts: [
              'Grant City',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ajtvF`licMpFiM|AuEtA}EwBwBiH_HoC_CcCuCeb@ik@kJhU_ApBk@bAxt@diArCoG'
            },
            children: [],
            id: 529,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Grant City, New York City'
          },
          {
            address_parts: [
              'Grasmere',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'e{wvFd{dcMnAmKcBeG~@mA_CaJuDlBmDxBw@Tk@AGkDXsMOGgBuBeBgByB{AeDmAyEn@{CxAy@F_AG}Fs@wFg@WpTEjHUrE?t@dApA~E`FMb@xGvIpFu@lDKi@eDvEnBrE|AvFxAnGtBfD~A\\cK'
            },
            children: [],
            id: 530,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Grasmere, New York City'
          },
          {
            address_parts: [
              'Lighthouse Hill',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{isvFviocMeCsa@]iD{@gEuByHgBwHc@yBi@mB_Ai@m@YiA_@g@KoAN_DPwDeAg@CU@e@RyF~CaBjAeDdD_@h@aAdBk@r@o@n@s@d@k@l@a@p@s@bB_@jBzJpUvLxNfOnk@xMh@|NiBeCua@'
            },
            children: [],
            id: 540,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Lighthouse Hill, New York City'
          },
          {
            address_parts: [
              'Midland Beach',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'mcsvFxwgcMzS}g@~KqT|GqW_]i^oToSqTqc@qVzj@iPj`@kF|McNr\\|DlDfg@rq@lCbD|CjCjH`HjInI~CqHhL}T'
            },
            children: [],
            id: 546,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Midland Beach, New York City'
          },
          {
            address_parts: [
              'New Dorp',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'inrvFpglcM`@gAfJiQ|FwLrDcHhDkH`JmQ{D_C{DiCiVoQ{IeG\\aAaEsGu@iIoHDeDnGuDyCm@aA}@fBeD~HeFgFeBdGkAjDkPp_@_E~Ix@|@|@v@jCnCjAzAf@|@PlAHzBH~@xCvCdE`D|@|AhEdNj@j@t@XxACvF{Aj@EfETt@d@t@h@vBtCnBvBjAr@p@Dl@JlA`@hAl@j@gA'
            },
            children: [],
            id: 548,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'New Dorp, New York City'
          },
          {
            address_parts: [
              'New Dorp Beach',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'keqvF|ifcMmDrB_E~IiJvUaJzU{I`VnIzFnVtQ|DjC`E`CjJcSlLaXjE}Po_@ev@'
            },
            children: [],
            id: 591,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'New Dorp Beach, New York City'
          },
          {
            address_parts: [
              'Oakwood',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '}hovFdlkcMqAoB{GuGoAH_@IkAs@uCkAoEcDc@k@[u@s@iCWkAg@wCGQa@_@_@MS?uBZm@Fc@Qm@QaAc@Q?q@`@g@?}G_E_K|RqBhEsGfMsDxHkJrQa@hAk@dAeB|DhCvE~B`FjCfCdBdCPd@`CfD|BvDNfB|BYjKeAxJaBvL_DlHoG~]}r@i@u@'
            },
            children: [],
            id: 550,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Oakwood, New York City'
          },
          {
            address_parts: [
              'Oakwood Beach',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'waovFdlhcMcb@_JiEtPeMnYuI|Q~G~Dd@?p@a@P?THl@Zn@L^RdDe@R@^L^\\FPf@tCZnAp@hCZt@`@j@nEdDtCfAjAt@b@HlAIxGtGdGhJpIyF`\\_i@ae@_u@'
            },
            children: [],
            id: 592,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Oakwood Beach, New York City'
          },
          {
            address_parts: [
              'Ocean Breeze',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '_auvFbcdcMj^yy@af@wk@cU`m@kJtUwJjUs@lAoFtCcBhA_@j@zBvCfCjChMnKjU`SRZvS}g@'
            },
            children: [],
            id: 551,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Ocean Breeze, New York City'
          },
          {
            address_parts: [
              'Richmondtown',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'mrpvFr_pcMkBeEOoJvGeMeB_FyAaDc@k@oAm@cFmAkAe@kBcCsBuBaDiAmCiBcEqDZ_APoAAc@_CZOkB{BsDaCiDSc@aBeCmCeCaCgFiCuEdB}DgAm@oAa@m@Ks@Gy@i@QGmBwBwBuCeAw@e@YwCQo@Ak@BqBl@eCn@yABu@YmCbFSt@Ip@QzIOdB{@|DS~A^FbAZ`Ab@x@f@h@nBb@tBhB~HrBrHx@bE\\hDjCvc@vCte@o@pJhCrFjBnNvCdDhLfJnAk@dy@e{@t@mAaC}D'
            },
            children: [],
            id: 561,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Richmondtown, New York City'
          },
          {
            address_parts: [
              'South Beach',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ccwvFnadcM\\k@jBkAjFwCt@mAzJwUjJwU|Tql@ct@uv@gWpYgFjDc@Nc@FwA~@mAfA{AdAgAbAyCzBzLbi@wBjBqAvCc@l@k@PkAMYREz@rCnCn@tAVbBFfBa@|CmA`Ey@rDg@dUDfDl@Bt@UnDyBpDkBHTlJaFb@_@|EvR~E_C'
            },
            children: [],
            id: 568,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'South Beach, New York City'
          },
          {
            address_parts: [
              'Todt Hill',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ygwvFbakcMeBqb@BgQuIcQeAeBQ}FoI}PaJ{IyEeEeEjLwBbFsAyDiEJqBj@yCdBKvAkAe@qAa@mBQg@Ky@c@g@ScAGuARmCLaBrAyFtGc@l@Yl@cAVTrQJrHEtC[rEMnAoBfM[fCK|EBlCFnBPjBf@`DxEbXbDa@tNs@bRg@dDObCGfD?ZDZT`AdBpD~GdCbAtG`DrJdFbH~DzBjAdCgv@'
            },
            children: [],
            id: 575,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Todt Hill, New York City'
          }
        ],
        id: 503,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/500-StatenIsland.png',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'East Shore, New York City'
      },
      {
        address_parts: [
          'Mid-Island',
          'Staten Island',
          'NY'
        ],
        bounds: {
          points: 'icyvFlgvcMtN|TdEcKhGmN~O{]nCgH|@gFRwCZcGV}BFWTKh@CfAVx@ZxHtLlJrJbAp@|@R~JlBjBTjXnBvWfBtKTfITzHZpIc@Eu@uWak@wLyWuCeGqGyNoCsFoCaF}@{@_EaD{@}@sBoCyBkCiCkD{AyBuHwJeKcHcAmMg@wH}Ci@hAuFG{A@sABc@JYdEsHtDcIPKnBgEdAyAb@STGVAdANp@P|@H^Cx@_@b@c@j@{@Tk@RgAPuB\\mB|@qBsPwg@wT{V_T}QeChv@uBgAgHaE_L}FmFkCC?aCaAuFiKUQ_@EiDAMuPDwE_@uG]qAaBx@eEViARcCJoK|@aCZeC`@}GlBeId@uGd@yAEaCUw@yTqG|BoOh@iEp@n@`Jd@zJyCnA_GtCuCp@iBZh@jFnBrPPGrJs@~Dv@jCHpCWtEeBzBiA~B_@tFBZfQjAn[v@``@AvCjGnj@XdDbGjf@bFnb@tBxQ`AxHl@lKrEc@`D@aD?qEb@x@zOGtBcAfNkAjM`Dn@t@?~@YlDsCtA~CrA~DjA~Dt@rA~HlJ'
        },
        children: [
          {
            address_parts: [
              'Bulls Head',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'icyvFlgvcMtN|TdEcKhGmN~O{]nCgH|@gFRwCZcGV}BFWTKh@CfAVx@\\y@oAu@}@q@o@eAm@u@[w@WeBa@eCMmG|@}OrAeFj@eCh@yBZcBCkL{C_Eu@cD?qEb@x@zOGtBcAfNkAjM`Dn@t@?~@YlDsCtA~CrA~DjA~Dt@rA~HlJ'
            },
            children: [],
            id: 514,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bulls Head, New York City'
          },
          {
            address_parts: [
              'Castleton Corners',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'qlxvFrrmcMImAz@cMr@_NGkA_@oAsAiCmAoCXc@VKVAcCcAuFiKUQ_@EiDAMuPDwE_@uG]qAaBx@eEViARcCJoK|@aCZeC`@}GlBeId@uGd@yAEaCUw@yTqG|BoOh@iEp@n@`Jd@zJyCnA_GtCuCp@iBZh@jFnBrPPGrJs@~Dv@jCHpCWtEeBzBiA~B_@tFBZfQjAn[XnMpL@bLm@dEc@dLi@vOcAnHk@tBI`CU~ASnBe@Sk@'
            },
            children: [],
            id: 516,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Castleton Corners, New York City'
          },
          {
            address_parts: [
              'Manor Heights',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'gtuvFd`mcMwGiSwT{V_T}QeChv@uBgAgHaEmSiKYBWHWd@nAvCnA~B`@nADnAu@vNy@hLHlA|@jCfBjDrBvCtD~DmDvLy@fDMzBCtAx@~Ds@hKzIxFpHhFnF|DdAdAt@l@dEdCb@J`BNjJod@G{A@sABc@JYdEsHtDcIPKnBgEdAyAb@STGVAdANp@P|@H^Cx@_@b@c@j@{@Tk@RgAPuB\\mB|@qB{GmS'
            },
            children: [],
            id: 543,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Manor Heights, New York City'
          },
          {
            address_parts: [
              'Meiers Corners',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'adxvF|focMy@mEPmEx@gDnDoLuDcEwB}CgBgDg@_B{A^gARkDZiBDoPpAqUjAyDb@iLp@qLI\\tQAvCfEf_@fe@wBzKYnIm@rPi@nErCp@aK'
            },
            children: [],
            id: 545,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Meiers Corners, New York City'
          },
          {
            address_parts: [
              'New Springville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{jsvFvrtcM}K_VwLyWuCeGqGyNoCsFoCaF}@{@_EaD{@}@sBoCyBkCiCkD{AyBuHwJeKcHcAmMg@wH_Di@eJpc@a[|l@aGr\\`AhUpG{@f@?|ALdB^t@Vv@\\`Al@r@n@t@|@tJdOlJrJbAp@|@R~JlBjBTjXnBvWfBtKTfITzHZpIc@Eu@wJaT'
            },
            children: [],
            id: 549,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'New Springville, New York City'
          },
          {
            address_parts: [
              'Willowbrook',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'aaxvFfkscMWcGbGs\\`[am@bAuEaBOa@IcEeCs@k@kAiAaKmHeD}BsIsFyAgAwBmAeKXoGZgF`@_GJcGTcb@lBbAhJXdDbGjf@bFnb@tBxQ`AxHl@lKrEc@`D@~Dr@jLzCbBD~B_@|Be@`Gq@bOmAk@gM'
            },
            children: [],
            id: 583,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Willowbrook, New York City'
          }
        ],
        id: 505,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/500-StatenIsland.png',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'Mid-Island, New York City'
      },
      {
        address_parts: [
          'North Shore',
          'Staten Island',
          'NY'
        ],
        bounds: {
          points: 'g__wFfiycMdWoj@hPa\\hEkFzCkCfGqIpBcFr@mBl@oGf@wIn@iIvI`FnZnTrd@d]rIk~@`AuMFeCeB}[_TgfBYoDgi@aDgh@sD~h@tDxNx@|N`ArH`@kGoj@@}Bw@{`@kAu[_@eQqFAaC^{BfAwEdBoCToCI_Eu@mJt@SFoAwKgAkKgEfDuFdCaHpAmFjBwDP}@yDhDgCxAoArAsB|AdDzFsDxDmA`C{H~FgIvCwJeC{BvB{BvEcHBB`LyV}E}JjLRzClNpKr]x@jV`CT|ADpHg@Os@QsBGgBCoCLaFXcCnBoMPqAVgEFwCU_NIgL]HSiWc@_Yj@kKhB{I|C{INTzJqZf@kB|AgIh@qE@y@RmE@@@yDZiXRmDXuCZoCx@kFdB{GzE_Q|BsIPaIHaDPeDu@xAQt@_@~@c@t@s@t@[RwKcZgEwL_BgFu@wBa@iBw@mKaj@|WcKhI{_@`u@kUpEj@tYTxEWoEa@iRqbAaN{Hj@f@hMk@iMsCZqe@vKiD`L_Mz`@wAbKXlLqApGk@zJpJfYnFt^Pv]\\th@KrFdJuEgJxEsGx@tRj_AfGlw@g@tGnHngBpEt@vFzi@uIdm@yJt`@wFIiLng@B`d@z@`m@lX~a@|c@zc@lUuh@'
        },
        children: [
          {
            address_parts: [
              'Arlington',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ag~vFv}wcMhPa\\hEkFzCkCfGqIpBcFr@mBl@oGf@wIn@oIqEsCoBy@uA]cYqEc@M_t@{@yq@kAiLng@B`d@zU`Gz\\fCjJvEbKtDfKlLtJvLtIeR'
            },
            children: [],
            id: 509,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Arlington, New York City'
          },
          {
            address_parts: [
              'Clifton',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ko{vFdeecM~Eo@}LiR{LsQ`Ve\\}OiI_FkGkBiEqC_DoDeA{LcMmUpEj@tYt@~OjOjr@hOtBdFXfFp@pGpC|FrDvC}A'
            },
            children: [],
            id: 519,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Clifton, New York City'
          },
          {
            address_parts: [
              'Elm Park',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{q~vF`zocMQnBaQyDN_@_ZsHsFyAoE}@aGh@kFRvB~g@`WfEte@bKd@}Ed@qDbJ|BlJpBJDhJhBx@Fr@Rl@gLMoOiA?i@iDc@i@q@_@cEqAaCk@}B[}@e@oByBmB}BqBbG'
            },
            children: [],
            id: 524,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Elm Park, New York City'
          },
          {
            address_parts: [
              'Graniteville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'yezvFzqucMjBgS`AuMFeCy@sOk@iK_TgfBYoDgi@aDgj@{DkA`PLxOm@bLjKnAvHrInIxO`KpLnHvDzEbB_KlSuCfGiCnGqGpPsB`H{A|GxI`FnZnTrd@d]fFcj@'
            },
            children: [],
            id: 528,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Graniteville, New York City'
          },
          {
            address_parts: [
              'Grymes Hill',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'gn|vFxfgcMpQwAhFi@`AP~AGj@NTX`CxAlBZVNjAfF`CiBfF_FMcJj@kKhB{I~C{IeCqD}KkGcHsEkFt@iC|AqG{DoGoCyEm@{F_@wNqBoKaAyHyC{Dg@_CkAwCsBgEpHfA~AHl@}IrPzClDhAzAlCpAjIzEfIdFtPvTtIxK~FnIdCsG'
            },
            children: [],
            id: 533,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Grymes Hill, New York City'
          },
          {
            address_parts: [
              'Howland Hook',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'g__wFfiycMnLkWyJ{LeKiLeKwDoJuEsWkB{CY_VcGz@bm@lX~a@|c@zc@lUuh@'
            },
            children: [],
            id: 537,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Howland Hook, New York City'
          },
          {
            address_parts: [
              'Mariners Harbor',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'cv|vFhytcMrB_HtGuPjCuGpOm[aFeBgHuDeKoLoIyOuHuIkKmAy@Ww@EeMiCiIiBuHkBe@xDe@rEoe@aKwPsCxFzi@uIdm@{Jv`@|o@dAnWXtUZ^LpYnElA^vB~@fElCxAwG'
            },
            children: [],
            id: 544,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Mariners Harbor, New York City'
          },
          {
            address_parts: [
              'New Brighton',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'itawFjgicMdJuEIuBj`@_FK{B`JgAc@cGrA[bMyAdCaVFaIyBsAoCuA_@i@Qi@Cm@Dm@hBqHFk@D{@Ew@Qc@WY[W[_@Uc@Cc@PyDJgDKs@_@mB]g@[_@yHsEc@k@_@oCg@Xo@Pk@BYCeKgBgKaBcCIg@BcAP]J{DxBgJnI`AfCoEnCpFt^Pv]\\th@KrF'
            },
            children: [],
            id: 547,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'New Brighton, New York City'
          },
          {
            address_parts: [
              'Park Hill',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'qjzvFzqecMxGoSf@kB|AgITcBRmB@y@RmEeL}HiK{FaEuB_QyIaVb\\~KjPxMnSdHtE`LlGnCdE`BaF'
            },
            children: [],
            id: 553,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Park Hill, New York City'
          },
          {
            address_parts: [
              'Port Richmond',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'aa_wFjslcMgBr@aKjBeLzBob@|Dg@rGvDn~@fFQbGk@dEz@`b@pKS^dQxDJqBvBaGdBxBtB|B|@b@|BZzBj@fEnAr@b@b@d@f@hDfA?lAcPdN~@tEuq@RiI}Bap@dCeAqAyKgAkKgEfDuFdCaHpAmFjBwDP_A{DkFdJo@d@sDzB}CpBuIxE'
            },
            children: [],
            id: 556,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Port Richmond, New York City'
          },
          {
            address_parts: [
              'Rosebank',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'm{yvFd{ccMPgPwEyAmFiFoGmHe_@g~@yL}Y_`@fu@|LvLjDfAvC`DnBlE|ErGde@zUzMnHnL`I@yD'
            },
            children: [],
            id: 562,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Rosebank, New York City'
          },
          {
            address_parts: [
              'Saint George',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ev_wFxidcMkBaFuCwFsCkGe@y@Ei@?aAPs@Rg@fAcFAgHm@uRy@uRsCZqe@vKiD`L_Mz`@wAbKXlLqApGk@zJnJhYpEoCcAiChJoIzDyBZKbAQb@AfCFbK`BjKhBZ@f@Ap@Sj@YzDsEVa@lEsMy@sC'
            },
            children: [],
            id: 569,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Saint George, New York City'
          },
          {
            address_parts: [
              'Shore Acres',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'wmyvFvtacMhDkMPaIHaDPeDu@xAQt@_@~@c@t@s@t@[RwKcZgEwL_BgFu@wBa@iBw@mKaj@|WcKjIbm@byAlGlHlFhFtExAHaGRmDt@eHx@kFdB{GnDgM'
            },
            children: [],
            id: 565,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Shore Acres, New York City'
          },
          {
            address_parts: [
              'Silver Lake',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'gp|vF|zicM`LyV_F_KcO}UnBoJjCgDwFcIoPaT}IsLcEoCuMyHoCoAoAcB[l@kHdq@ZdDj@rA\\zAhAlOVdF\\fET|DPzD@lAjA_@jEe@rOiCfAYfAK`Cg@rC_@nBIjBUf@F\\TrEtLpFtTbElG'
            },
            children: [],
            id: 566,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Silver Lake, New York City'
          },
          {
            address_parts: [
              'Stapleton',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'uo}vFtqccMyByK_AaPa@iRqbA_NbA|^`@hDj@zDpFwApEm@tGdCnGvC?hG~P|O|@CdAl@H^Bt@_@~D@nAX`Ax@xBvCbCbHvCrKz@eKae@'
            },
            children: [],
            id: 571,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Stapleton, New York City'
          },
          {
            address_parts: [
              'Sunnyside (Staten Island)',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'w|{vFxwhcMzClNpKr]x@jV`CT|ADpHg@Os@QsBGgBCoCLaFXcCnBoMPqAVgEFwCU_NIgL]HSiWU}M_FzEkCnBkAgFQOuB]}BwAU[m@O}AFcAQkEf@oRzAcCpGkCfDoBpJ|FdJdGxJlLR'
            },
            children: [],
            id: 573,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Sunnyside (Staten Island), New York City'
          },
          {
            address_parts: [
              'Tompkinsville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'gt~vFdlecM}AqAzIsPAu@[i@u@m@lEsHtCnBlCpAzD`@uCoCw@iBSkAEcA`@cECs@Q]y@i@aAAcJiI{EqEAkGeGuCaHeC{Ej@gFtAq@_Ea@gEy@}]{Hj@r@nRn@rR?nHgAbFQd@Qt@?`ADh@d@x@rCjGrCtFjB~Ez@tCoEtMU^_EvE\\lCb@j@xHrEZ^\\f@l@bD_@`JBb@T`@^`@n@n@Pb@Hx@Gz@Ij@iBpHEl@Bj@Pj@^h@rCtAtBrAtKWnHcq@\\k@aAqA'
            },
            children: [],
            id: 576,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Tompkinsville, New York City'
          },
          {
            address_parts: [
              'West Brighton',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'y}|vFz|hcMwEyL]Sg@GkBVoBFsC`@aCf@gAJgAVaOdCyEh@mA^CoAg@kJ]sEU}EkAuO[yAm@uA[gDsKRIdI_ApJcAjJsH`AqCZqAXb@dGaJfAJxBuOlBqOrBDrBgJxEsGx@tRj_AfGpw@pb@}DlIcBzMeCdBu@|I{EnCkBtD{Br@g@jFeJhDeCxAoArAsB|AdDzFsDxDmA`C{H~FgIvCwJeC{BvB{BvEcH_EiGmFsT'
            },
            children: [],
            id: 580,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'West Brighton, New York City'
          },
          {
            address_parts: [
              'Westerleigh',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'sa{vFnuncM@}Bw@{`@kAu[_@eQqFAaC^{BfAwEdBoCToCI_Eu@mJt@yCjA~Bdp@UdImAtReCb^z[|BxNx@|N`ArH`@kGoj@'
            },
            children: [],
            id: 582,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Westerleigh, New York City'
          }
        ],
        id: 501,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/500-StatenIsland.png',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'North Shore, New York City'
      },
      {
        address_parts: [
          'South Shore',
          'Staten Island',
          'NY'
        ],
        bounds: {
          points: 'srdvFjoedMtQ_^gKs^kB}\\aMkPoGi^eAqMaCy|@i[om@oa@ef@gEvCeEbBfEeBfEwCpTk}@wt@ubAsAyM{Us_AqI|BsIrEgA|@eA`AcDbCfDkC`A}@`Aw@tIuErI}B{Lmf@ePod@mA~@lAcAwl@e{Aq~@}y@cQrJuNnNyE{FiT~\\aAdAy@XkC`E?LsB^eI~@gJHyx@vz@dBtEpXr_@D?G?{DvLpBzVsDnn@yN~f@bAlHmFzVxEhTpBtLTzPnQtQjNhOABdH|IfEdJfCvJBC{@pHh@vMjBbNyGjGvFj`@{Jrz@nL_DiL~Cle@hgAlSr\\|NbZ``@fHjj@aUx{@gG?GrSsGbKrIhI~LbHrPhDrNhSlNjLPjErI~N~Cbc@_HpVuS'
        },
        children: [
          {
            address_parts: [
              'Annadale',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'iclvFxpwcMc@sBbAkIF_AxFuCzEsB~EaBrPkDrFeCbE}Bv@YfB}@rAoA`F{D`A}@`Aw@tIuErI}B{Lmf@ePod@_FzD_GhDoNnJ_GrD_O~J_OlJiExCyKzGg@@m@Qu@FmAZe@|@_@hAgFdOoA`EoD`K_A|BeArBsBwAyBqAqEsBkBQiB?kJ}@iDnA}AZ{ANaQtBwLdAkH`Ar@tKgD~Ht@VtApAzHpHtMzMtI~GzNbKrC~BpBlClI{SlCuGjD{IfSzOtF_Fb_@kNi@kB'
            },
            children: [],
            id: 507,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Annadale, New York City'
          },
          {
            address_parts: [
              'Arden Heights',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'oqovFhsycMdJsJxGgOiKmHkJqHcMkM_LoKu@WiF^_MrA_Fd@}LdB_Fd@mFzVxEhTpBtLTzPnQtQjNjOfFsGlWyWpKaL'
            },
            children: [],
            id: 508,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Arden Heights, New York City'
          },
          {
            address_parts: [
              'Charleston',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{`jvFzkcdMYuOeAc`@]oKi@sSQwKcAwMc@{CoJcj@eDhA_Bb@}JrBqFx@gMf@mOiBRfI^dI^zKH~@v@zEaD@mLc@yEg@qEo@mEeAoK{CkHeDcNjGiCnAuL|DwTbHwTbGle@hgAlSr\\|NbZ``@fHjj@aUx{@gG_@qO'
            },
            children: [],
            id: 517,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Charleston, New York City'
          },
          {
            address_parts: [
              'Eltingville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'uqkvFfepcMaNpK{Rpb@gBnBkBhBmStRaQ|Po@j@qDj@oCbBq@PyAx@cInAu@Ha@?yAQwAKyAW_EWaDp@}U|F{UtF|AbFNnATjCCj@YhCQt@Ev@iAtIcAvIfDSJzBVxApA~AtGnG`BdBf@~@`B~Dd@f@|DnC|EtBlEa@fLyAxBUxAUlEuA~Hn@|@JbAC`CRhF`CpEzCbBoDzA_EnIuVjAuDvAkDzBc@t@Pv@IvMiIr]kUbFmDnFeDlMwItF}C~EeEwl@e{A'
            },
            children: [],
            id: 525,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Eltingville, New York City'
          },
          {
            address_parts: [
              'Great Kills',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'gqmvFhjncMcQrJuNnNyE{FiT~\\aAdAy@XkC`E?LsB^eI~@gJHyx@vz@dBtEpXr_@zFFdBrHvAjE|Bm@nQeEnVcGzCo@`EXvATrD\\^?|AQzGeAzA{@r@SjC_BpDk@jDcDnFqFvW_WnCmCnCuC|Rsb@~MqKq~@}y@'
            },
            children: [],
            id: 531,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Great Kills, New York City'
          },
          {
            address_parts: [
              'Greenridge',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'arpvFzhwcMwEZaLlAqEb@}NpB{Ed@cAoHxN_g@rDon@qB{VzDwL~FDbBrHvBzGh@xAVxAR`BJ~AOtB[nBKhAgAnI_AlIdDUH~BXvAvAbBpJpJd@z@bBbEd@f@`EnCvErB}Iv@uG~@r@tKiD`I'
            },
            children: [],
            id: 532,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Greenridge, New York City'
          },
          {
            address_parts: [
              'Huguenot',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'ydivFnnucMqI|BsIrEgA|@eA`AiFzDgAfAyAt@}@ZkFtCsErB{PjDwKdEsGbDE`AgAlI^`Bl@zBc_@jNwF~EaS{OoD~ImClGkI`TuBqCcCsBiBqA_HfOaWbXaWjWiFtGdH|IfEdJfCvJfDwEjDuB|^_NjIoCxBm@bPsGzGcDbC{@xEyAlSoHvEuB`ZkLtI{Dth@w\\|KcHvKiHdYeQ{Us_A'
            },
            children: [],
            id: 538,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Huguenot, New York City'
          },
          {
            address_parts: [
              'Pleasant Plains',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{ojvFhb_dMpAbGjClQdAbNd@vUjFVFwCNc@TyMPm@nKk@vAc@pH_F`MuI|TPvZ{IxFkBdEO|DDjIMVKz@{@bH}H?GCBFI`LkGi[om@oa@ef@gEvCuKnEeBvAgZvLaCfAqAb@wD|@}BXo@EwEo@iCpAg@j@yBb@e@gAy@}@cMjD{AbAk@JkJb@pCfOrGp^dAjG'
            },
            children: [],
            id: 554,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Pleasant Plains, New York City'
          },
          {
            address_parts: [
              'Princes Bay',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'qufvFrazcMwt@ubAsAyMaVzNmS|MmIdFsf@h[uIxDiHrCvAbEfAlEfLhn@|Ljq@bJa@t@M|AaAbMkDv@z@f@hAvBe@f@i@jCqAxEn@l@DvBYzD}@pAc@`CgAfZyLdBwAvKqEfEwCpTk}@'
            },
            children: [],
            id: 557,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Princes Bay, New York City'
          },
          {
            address_parts: [
              'Richmond Valley',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'mlevFvu~cM_LjGINc@b@sFlGaAbAWLqCFqGDcBEeELiGtBiZrI{TSoM`JcHtEwA`@oKl@Sl@SxMOb@IvCiFWNnF@tAx@dVfBbw@rSuGdAeUf@gRb@oHxG}@`JyAt@[ZSl@m@l@y@fBcD`@QhA]|HqAbJmBnJwB~KoCni@iMjEKcCy|@'
            },
            children: [],
            id: 560,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Richmond Valley, New York City'
          },
          {
            address_parts: [
              'Rossville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'amkvFpw{cMaVrItD`SuPhEoVbE`@xMIpNgHdBwC_g@sBuNiCeN_FfBsEoHg@mGcBs@eAwGoDbAsDlAeJ`DcWhJiDtBgDnE{@vHh@vMjBbNyGjGvFj`@{Jrz@pSqFlQqFnQ}FnHqDxHkDxEvBjBt@lBf@dF|AdFlApEp@fFh@|CNjGP~CAw@aFGu@e@sN[_GSwHlOhB`Mg@pFy@hIaB~Cw@|CgAoV{tA'
            },
            children: [],
            id: 563,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Rossville, New York City'
          },
          {
            address_parts: [
              'Tottenville',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'srdvFjoedMtQ_^gKs^kB}\\aMkPoGi^eAqMkEHcDx@ud@rKcLpCwInBeKxBgHhAiA\\a@PiBfDi@r@m@l@]Tu@Z_JxAyG|@g@lHc@lRgA`UdKrIhI~LbHrPhDrNhSlNjLPjErI~N~Cbc@_HpVuS'
            },
            children: [],
            id: 577,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Tottenville, New York City'
          },
          {
            address_parts: [
              'Woodrow',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '}qkvF|f{cMqGk]gAqEuAcEeObGsGnCwSrHeD`A}CfAmG|CmPzGfAzG`Br@f@jGrEpH~EgBjCdNrBtNvC~f@fHeBFsN_@yMxVgEhPcEsDcSzUqIwCuO'
            },
            children: [],
            id: 584,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Woodrow, New York City'
          }
        ],
        id: 502,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/500-StatenIsland.png',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'South Shore, New York City'
      },
      {
        address_parts: [
          'West Shore',
          'Staten Island',
          'NY'
        ],
        bounds: {
          points: 'qstvF|j|cMiBsJf@gTf@eYnNo\\gBuOkFuGrAq`@uCcF{KgB_SdPeTx@gOmCgSgKiNmPgScG}BrFGfX`Fj`@xEn_@{L{`ADmXmG}JgF{HaIsJq@mAy@qCeBmFuA_DmDpC_AXu@@eDq@{Fzo@WSeg@e_@mWaRyIaFg@hHk@|Jq@nGaDhIoGvIsCjCiEfFmBpD_I`P{H`PcRla@oTfg@`^n_@th@vGhb@uIhRk@hAeSzFiKbLpBtO`MlPCk@iUj@fUv{@_Ktg@`s@h`AzKpAcJ'
        },
        children: [
          {
            address_parts: [
              'Bloomfield',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'u{yvFf`xcMvBgQkDqCaHeEgFwEeg@e_@mWaRyIaFg@hHk@|Jq@nGaDhIoGvIsCjCiEfFmBpD_I`P{H`PcRla@oTfg@`^n_@th@vGhb@uIhRk@hAeSzFiKbLpBtO`MlPCw@yZ[}IgBwO`Fmh@'
            },
            children: [],
            id: 512,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Bloomfield, New York City'
          },
          {
            address_parts: [
              'Chelsea (Staten Island)',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: '{sxvFtvwcMDmXmG}JgF{HaIsJq@mAy@qCeBmFuA_DmDpC_AXu@@eDq@}F|o@tE~DfHlE`DpCmBnOkFdj@fBzOl@dRd@dRz{@_K{Rm}A'
            },
            children: [],
            id: 518,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Chelsea (Staten Island), New York City'
          },
          {
            address_parts: [
              'Travis',
              'Staten Island',
              'NY'
            ],
            bounds: {
              points: 'qstvF|j|cMiBsJf@gTf@eYnNo\\gBuOkFuGrAq`@uCcF{KgB_SdPeTx@gOmCgSgKiNmPgScG}BrFGfX`Fj`@tKd|@tg@|r@h`AzKpAcJ'
            },
            children: [],
            id: 578,
            locality_scope: 'ny:nyc',
            picture: '/static/images/regions/500-StatenIsland.png',
            region_type: 'neighbourhood',
            root_priority: null,
            text: 'Travis, New York City'
          }
        ],
        id: 504,
        locality_scope: 'ny:nyc',
        picture: '/static/images/regions/500-StatenIsland.png',
        region_type: 'neighbourhood',
        root_priority: null,
        text: 'West Shore, New York City'
      }
    ],
    id: 500,
    locality_scope: 'ny:nyc',
    picture: '/static/images/regions/500-StatenIsland.png',
    region_type: 'borough',
    root_priority: 1,
    text: 'Staten Island, New York City'
  },
  {
    address_parts: [
      'NJ'
    ],
    bounds: null,
    children: [
      {
        address_parts: [
          'Hudson County',
          'NJ'
        ],
        bounds: {
          points: '_bdxFtsvbM^c@vq@_XfZwu@bQm_@nd@}M~R}m@ty@bi@jJzFnd@b[pRtL^?|OhJx^bV`b@rXtj@v[hl@zJfu@tLpqAdSpKpArJxA`sC~YtpA~q@p|Cr}A`Ah@pDfClBdAvDlBhVbL`GdDHHxAt@hI~EGzaBf@h~A~Sjj@l@jdBvHzg@zG~a@jErTf@xZXhW~G`r@PfFoHlqAyBz]aIwE_|@sp@alBkyAiGmFhBfLuYi_@{d@i^ijBuxAcw@fPoa@fSwfByLw`@sDcL|EaIbPaB|I|Cd|Ahb@xn@pJpi@|@bUgMjd@yy@|Yqz@kFu]aI{U}PqPmOqe@}QsJoGiUcXm\\yEy@WuVkB~LoZt]ky@v[_Z|Om`@yNs_AmE{aA~U{YjR}@j\\kJlFqX{fAkOkiAeh@ecAgiAor@k}@uMsdCc^keAyTgM`DyJyR_Vu]gYfGiW'
        },
        children: [
          {
            address_parts: [
              'Bayonne',
              'NJ'
            ],
            bounds: {
              points: 'sklwFrojcMda@{fApT_JfF~E~~@cYjuAmlExf@z]b^|}AdJ`Gt\\rt@kHzrBhExCjTz]bGnr@_A~}@|F|ZgLraC}Wo^gc@_eAec@uf@}uFobD'
            },
            children: [],
            id: 1090101,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Bayonne, Hudson County'
          },
          {
            address_parts: [
              'East Newark Borough',
              'NJ'
            ],
            bounds: {
              points: 'kjvwFn{rcMyBfMECgBvJa@dBy@tC_DvI`Fh@nIz@jHl@hG|@xBVp@DrBDEmGcBBaDE|@iIaCOkDe@vBqRJqGkPqB'
            },
            children: [],
            id: 1091101,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'East Newark Borough, Hudson County'
          },
          {
            address_parts: [
              'Guttenberg',
              'NJ'
            ],
            bounds: {
              points: 'g`_xFxevbMm@`BkBoAsGtQpA~@oAnDfIbBb@PtAkCfBdA~FsOcAoAh^e`A_BkB|G_R_D}BK?QOe@QQOEAO`@Up@@Dg@|AE?g@YmAtDc@bDUz@mBYo@WeXjt@tB~AeDdJNJ'
            },
            children: [],
            id: 1090701,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Guttenberg, Hudson County'
          },
          {
            address_parts: [
              'Harrison',
              'NJ'
            ],
            bounds: {
              points: 'ouvwFn}qcM~I_j@tScBNlExd@u_@eEuHlLsOzHb[~QvOnDpClBxBjClDn@zAdBjHTzDXzPI~_@s@bFuExLgDbDeKrGoj@xPoHn@gE[GmGcBDaDG|@gIaCQiDe@tBoRLqGaPqBdBkLsOcH|@oF'
            },
            children: [],
            id: 1091001,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Harrison, Hudson County'
          },
          {
            address_parts: [
              'Hoboken',
              'NJ'
            ],
            bounds: {
              points: 'ijswFx{{bM_@xIMfEeDlEuDsAkG~@iCgBwCkEeKCgUuNmSiJaZqP{YePRkKbBiCF_DpA_@|BeC`Nkn@jHX~yB|_@s@hTiNnt@{@xEQnF'
            },
            children: [],
            id: 1090201,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Hoboken, Hudson County'
          },
          {
            address_parts: [
              'Jersey City',
              'NJ'
            ],
            bounds: {
              points: '_wywFvf_cMh`@}SdK}AtEeEnFqNvEqCvKaa@dXaF|G_U`DaGbUxJdUxNdK?tClElCfBhG}@vDtAfDmEx@sWhPc{@n^cPppCdj@zj@p]fp@~eB`sCjcAmuAllE{~@`YiF_FqT~Iea@zfAwH{@im@~Meb@{e@uZ{p@yNsK}j@yJ}H_Cu\\aRiF_GeKeW_Lwr@oOo\\{QiGkUhVcL_Ja@iG_AwBkJrGiCeAy@iGkIz@cGyCmBaKaEk@sM}[s@kDqFmIKuHbGoJXwIcS?uEeI_NcJ'
            },
            children: [
              {
                address_parts: [
                  'Bergen-Lafayette',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: '}lqwF`_bcMjb@ubBhVdFjS{G|FwArCuLxAwJrEyeAH}JrCw_@lZhGzj@r]dp@~eBoSdk@qYdYuYzN_Y|^jFjGqFfQq[|i@iMiHmI}CeKaJuNqR}b@iYqD{I{BqA'
                },
                children: [],
                id: 1091202,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Bergen-Lafayette, Hudson County'
              },
              {
                address_parts: [
                  'Downtown',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: 'mdtwF`w|bMdBaEfAr@hG{@vDtAfDoEz@qWhPc{@l^ePhmBv_@p@no@cGzoAqCtL}FxAmSzGse@yJiGvFcg@eVQ[yKyOsAdBaFyEaAdB_KgF_CcG}KaFaDuF'
                },
                children: [],
                id: 1091203,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Downtown, Hudson County'
              },
              {
                address_parts: [
                  'Greenville',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: 'iyowFn_hcMjJej@hExCtOy]oCsGnO_]r[}i@nFgQiFiGzX{^rY{N~YiYlSok@zhAla@~hAfa@kuAjlE}~@~XgF}EqT|IcP~b@{iAyCsKcAeLmEaYy]'
                },
                children: [],
                id: 1091205,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Greenville, Hudson County'
              },
              {
                address_parts: [
                  'Journal Square',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: 'mftwFn`dcMoOm\\|B_DfPqsA|s@w|@|AgDPZ`SpJfK~ExFpChGyFfNtCyXfhAqHnYiLmGyCtIef@sVo\\r_BsA{H'
                },
                children: [],
                id: 1091207,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'Journal Square, Hudson County'
              },
              {
                address_parts: [
                  'The Heights',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: '_wywFtf_cMj`@{SdK}AtEeElFqNzEyCtKy`@bXcF~G_U|CaGdUxJdUxNdK?tClEdAr@eBbE~CrF|K`F`CbG|JfFbAeB`FzErAeBvKvO{AjD}s@t|@iPrsA{B|C}QkGiUjVeL_Ja@iG_AwBiJpGiCcAy@iGmIz@cG{CmBaKaEk@sM}[s@iDoFmIMuHdGqJXuIeSAsEeIaNcJ'
                },
                children: [],
                id: 1091204,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'The Heights, Hudson County'
              },
              {
                address_parts: [
                  'West Side',
                  'Jersey City',
                  'NJ'
                ],
                bounds: {
                  points: '_}owFbnhcMqDaI{NwK}j@}J}HwBs\\eRkF_GcKeWoI{h@r\\q_Bff@rVtCwIfP~IrDxI~b@hYpNrRdK~InI|ChMhHmO`]nCpGuOz]iE_DuD~TqAfH{EtY'
                },
                children: [],
                id: 1091206,
                locality_scope: 'nj:hudson',
                picture: null,
                region_type: 'neighbourhood',
                root_priority: null,
                text: 'West Side, Hudson County'
              }
            ],
            id: 1091201,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Jersey City, Hudson County'
          },
          {
            address_parts: [
              'Kearny',
              'NJ'
            ],
            bounds: {
              points: 'ke}wFx}pcMny@uoBpc@iRcGgv@}GyCgMuPf@gJkJePzCm[tF}[xLQjHcOxNgCrMjDdIsGlNkDg@kSpH{KxVpUbT~JpXoBfN_RsGirArSmT|QhGnOn\\|Kzr@jKhWlFbGj\\pQzHhC~j@rJxNpKrZzp@fb@~e@uf@bWcVlE}cBwXqVlEcIrVXdzAmLrObEtHud@r_@KmEwSdB_Llq@rObHaBjLM?wBdMECeC~M}@tCaDxImYcAec@kZ}Z{RuOwBsZm[oTcPi^p@eOcH'
            },
            children: [],
            id: 1090501,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Kearny, Hudson County'
          },
          {
            address_parts: [
              'North Bergen Township',
              'NJ'
            ],
            bounds: {
              points: 'ikbxFtizbM`B}Le@wBeJPcGgFm@sG_@kPqK}@YsOaCmBkH`De@yGwIaCcEsKhCkHYmIdNePtSPjHdEb_AuvBdW~AhEaGnUoBpm@|ZuF`Qc@dDSx@mBYo@UeXht@rB`BeDdJPJo@`BiBqAuGvQrA|@qAnDhIdBRHLH[n@dGtEpDrFvJtRxNfMvMd@xXqClDjBDQd^`^}GjSfEPhFfDbJo@CxDxFfHzQjKxLtXhN|IhUcA~_@jVyE|PyErCmFnNuEdEeKzAu]hRaEuBaJz@kNyGoGbG}OwHaH@aGuEiGeTjHkQnDs^uK{KiaAci@wRrn@io@wn@}Ztr@kC{d@c^}V'
            },
            children: [],
            id: 1090901,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'North Bergen Township, Hudson County'
          },
          {
            address_parts: [
              'Secaucus',
              'NJ'
            ],
            bounds: {
              points: '{gaxFpg|bMd@|^nFflAr@bH~IxUvf@ze@~CbYjL|SriBboAzxAiJb_@h]bThKnXoBfNwQoGwrAw@z@cL{Ia@kGaAuBkJrGgCgAy@gGkIz@cGyCoBaKcEo@qMy[q@iDuFqIGwH`GkJXwIaI@_ICwEeI}M_JrAw@_E{BeJ|@kNuGoG`G{OuHaH?cGuEiGeTjHgQlDs^qK}KmaAki@uRvn@io@wn@}Zxr@'
            },
            children: [],
            id: 1090801,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Secaucus, Hudson County'
          },
          {
            address_parts: [
              'Union City',
              'NJ'
            ],
            bounds: {
              points: '{_|wF|rwbMzGsR|N|Vx{@zh@uNlMrd@hWlKsZ|I~I_@rOnEfFfAaCvs@z`@kDrG}GzT_X~E{DzNc`@cViUbAgN_JyLwX_RiKuFcH?{D_Jp@iFiDiEQ|GkS_^a^xDyK_B}@xGyR'
            },
            children: [],
            id: 1090401,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Union City, Hudson County'
          },
          {
            address_parts: [
              'Weehawken Township',
              'NJ'
            ],
            bounds: {
              points: 'mr{wFxcvbMbEeKrWlFvdBtz@pBzj@?tH}BfCqA\\IbDaBfCShKGCiA~BmEgF^qO}I_JmKpZud@gWtNkMu{@}h@aO_WqEqDbJ{T'
            },
            children: [],
            id: 1090301,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'Weehawken Township, Hudson County'
          },
          {
            address_parts: [
              'West New York',
              'NJ'
            ],
            bounds: {
              points: 'ec_xFxewbMrB{DfBbA|FsOaAmAh^e`AaBmBvHuS~gAhw@cUtj@nErDuPlf@`Bz@cElLmDgByXpCyMi@yNeMwJsRoDwFgGuE'
            },
            children: [],
            id: 1090601,
            locality_scope: 'nj:hudson',
            picture: null,
            region_type: 'city',
            root_priority: null,
            text: 'West New York, Hudson County'
          }
        ],
        id: 1090001,
        locality_address: '50 Harrison Street, Suite 114',
        locality_code: 'nj:hudson',
        locality_scope: 'nj:hudson',
        locality_zip: '07030',
        picture: null,
        region_type: 'county',
        root_priority: null,
        text: 'Hudson County, New Jersey'
      }
    ],
    id: 1000001,
    locality_scope: null,
    picture: null,
    region_type: 'state',
    root_priority: 2,
    text: 'New Jersey'
  }
]

export default readable(regions)
